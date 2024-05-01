/**
 *  FaaS to retrieve SDEs
 *  This code will retrieve SDEs in real time.  My bot has a small delay in the dialog, but the SDEs
 *  were returned without issue
 *
 *  Code is tested and works
 */


// import FaaS Toolbelt
const { Toolbelt, ConversationContentTypes } = require('lp-faas-toolbelt');

// Create SDE/Conversation-Util instance
const conversationUtil = Toolbelt.ConversationUtil();
const sdeUtil = Toolbelt.SDEUtil();

const sdeType = 'ctmrinfo';
const sdeKey = 'customerId';
let logMsg = [];   // logMsg is a class variable. Empty on every new run



async function getAuthCustomerInfo(conversationId) {
    // Parameters for authSDEs
    const contentToRetrieve = [ ConversationContentTypes.SDES ];

    // Get Conversation and extract SDEs
    let conversation;
    for (let i = 0; i < 3; i++) {
        try {
            conversation = await conversationUtil.getConversationById( conversationId, contentToRetrieve );
            if (conversation)
                console.info(JSON.stringify(conversation));
        }
        catch(e) {
            console.error(`attempt ${i + 1} to conversationUtil failed`);
            if (i >= 2) {
                return undefined;
            }
        }
    }

    // sde interface https://developers.liveperson.com/liveperson-functions-development-toolbelt.html
    let sdes;
    for (let i = 0; i < 3; i++) {
        try {
            sdes = sdeUtil.getSDEsFromConv(conversation);
        }
        catch(e) {
            console.error(`attempt ${i + 1} to sdeUtil failed`);
            if (i >= 2) {
                return undefined;
            }
        }
    }

    // Get certain type of array
    let theSdes = sdes.sdes.events.filter(item => item.hasOwnProperty(sdeType));

    return theSdes;
}


async function getUnAuthCustomerInfo(conversationId) {
    // Parameters for unAuthSDEs
    const contentToRetrieve = [ ConversationContentTypes.UNAUTH_SDES ];

    // Get Conversation and extract SDEs
    let conversation;
    for (let i = 0; i < 3; i++) {
        try {
            conversation = await conversationUtil.getConversationById( conversationId, contentToRetrieve );
            if (conversation) {
                // console.info(JSON.stringify(conversation));
                logMsg.push(`Conversation: ${JSON.stringify(conversation)}`);
                break;
            }
        }
        catch(e) {
            logMsg.push(`Error: attempt ${i + 1} to conversationUtil failed`);
            if (i >= 2) {
                return undefined;
            }
        }
    }
    // sde interface https://developers.liveperson.com/liveperson-functions-development-toolbelt.html
    let sdes;
    for (let i = 0; i < 3; i++) {
        try {
            sdes = sdeUtil.getSDEsFromConv(conversation);
            if (sdes) {
                logMsg.push(`sdes: ${JSON.stringify(sdes)}`);
                break;
            }
        }
        catch(e) {
            logMsg.push(`Error: attempt ${i + 1} to sdeUtil failed`);
            if (i >= 2) {
                return undefined;
            }
        }
    }

    let convSDEs = sdes.unAuthSdes.events.filter(item => item.hasOwnProperty(sdeType));

    return convSDEs;
}


async function getSdeValue(arrayOfCustomerInfo) {
    const sortedDescendingArrayOfCustomerInfo = arrayOfCustomerInfo.sort((a, b) => b.customerInfo.originalTimeStamp - a.customerInfo.originalTimeStamp);

    if (sortedDescendingArrayOfCustomerInfo
        && sortedDescendingArrayOfCustomerInfo[0]
        && sortedDescendingArrayOfCustomerInfo[0][sdeType]
        && sortedDescendingArrayOfCustomerInfo[0][sdeType][sdeType]
        && sortedDescendingArrayOfCustomerInfo[0][sdeType][sdeType][sdeKey]
        && sortedDescendingArrayOfCustomerInfo[0][sdeType][sdeType][sdeKey].length) {
        return sortedDescendingArrayOfCustomerInfo[0][sdeType][sdeType][sdeKey];
    }
    return '';
}


async function lambda(input, callback) {
    logMsg = [];  // Empty on every new run
    let result = [];

    const payload = input.payload;
    const conversationId = payload.convId;
    logMsg.push(`|conversationId: ${conversationId}`);
    //logMsg.push(`|conversationId: ${JSON.stringify(payload)}`);


    try {
        // You can select and use one of the following two functions depending on your purpose.
        // * getAuthCustomerInfo : Reads data from auth SDE
        // * getUnAuthCustomerInfo : Reads data from unAuth SDE
        let customerInfoSdes = null;
        customerInfoSdes = await getUnAuthCustomerInfo(conversationId);
        if (!customerInfoSdes)
            throw new Error('Failed to fetch sde data');

/*
        customerInfoSdes = await getAuthCustomerInfo(conversationId);
        if (!customerInfoSdes)
            throw new Error('Failed to fetch sde data');
*/

        logMsg.push(`|getSdeValue...`);

        result = await getSdeValue(customerInfoSdes);

        //console.info(`Fetched following SDE ${sdeVal} for ${conversationId}`);
        logMsg.push(`Fetched following SDE ${result} for ${conversationId}`);
        callback(null, result);
    }
    catch (e) {
        // console.error(`Received ${e.message} during obtaining SDE's for ${conversationId}`);
        logMsg.push(`|Error: ${e.message} during obtaining SDEs`);
    }
    finally {
        console.info( JSON.stringify(logMsg) );
        callback(null, result);
    }
}