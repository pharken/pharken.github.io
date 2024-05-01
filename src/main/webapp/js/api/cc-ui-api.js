'use strict';


let acct = '49985427';
let bearerToken = null;

let apiAuth = {
    "appKey": "b1d6a2ccd2764a4f9f9ba4cbde546220",
    "secret": "7ae5d4da4009cb21",
    "accessToken": "75c76f27ce104828bd9c5b1a6901bdfc",
    "accessTokenSecret": "216979272d7e9b5c"
};

let loginCredentials = {
    "username": "apiUser",
    "password": "apiUser4321"
}


const accounts = {
    'sandbox'   : { 'accountId': '49985427', 'domain': '' },
    'tracfoneQA': { 'accountId': '42268356', 'domain': 'https://va.ac.liveperson.net' }
}

let domain = accounts.tracfoneQA.domain;
let acct = accounts.tracfoneQA.accountId;

const URLS = {
    bearerToken         : `https://va.agentvep.liveperson.net/api/account/${acct}/login`,
    campaigns           : `${domain}/api/account/${acct}/configuration/le-campaigns/campaigns`,
    engagements         : `${domain}/api/account/${acct}/configuration/le-campaigns/campaigns/{campaignId}`,
    engagementWindows   : `${domain}/api/account/${acct}/configuration/engagement-window/window-confs`,
    engagementWindow    : `${domain}/api/account/${acct}/configuration/engagement-window/window-confs/{engagementId}`,
    entryPoints         : `${domain}/api/account/${acct}/configuration/le-targeting/onsite-locations`,
    entryPoint          : `${domain}/api/account/${acct}/configuration/le-targeting/onsite-locations/{entryPointId}`,
    visitorBehaviors    : `${domain}/api/account/${acct}/configuration/le-targeting/visitor-behaviors`,
    visitorBehavior     : `${domain}/api/account/${acct}/configuration/le-targeting/visitor-behaviors/{visitorBehaviorId}`,
    messageHistory      : `https://va.msghist.liveperson.net/messaging_history/api/account/${acct}/conversations/search`

}


/*
* This will not work if account has SSO enabled.
* Add the bearer token manually in a text input field
*/
async function getBearerToken() {
    try {
        return axios({
            method: 'POST',
            url: URLS.bearerToken,
            params: { v: '1.3' },
            headers: { Authorization: apiAuth},
            data: loginCredentials
        });
    }
    catch (error) {
        console.error(error);
    }
}


async function getCampaigns() {
    try {
        return axios({
            method: 'GET',
            url: URLS.campaigns,
            params: { v: '3.4', fields: ['id', 'name', 'description', 'expirationDate', 'goalId', 'lobId', 'status', 'engagementIds', 'type'] },
            headers: { Authorization: `Bearer ${bearerToken}`}
        });
    }
    catch (error) {
        console.error(error);
    }
}


async function getCampaign( campaignId ) {
    try {
        let url = URLS.engagements.replace('{campaignId}', campaignId);
        return axios({
            method: 'GET',
            url: url,
            params: { v: '3.4' },
            headers: { Authorization: `Bearer ${bearerToken}`}
        });
    }
    catch (error) {
        console.error(error);
    }
}

async function getEngagementWindows() {
    try {
        return axios({
            method: 'GET',
            url: URLS.engagementWindows,
            params: { v: '2.0' },
            headers: { Authorization: `Bearer ${bearerToken}`}
        });
    }
    catch (error) {
        console.error(error);
    }
}

async function getEngagementWindow( engagementId ) {
    try {
        let url = URLS.engagementWindow.replace('{engagementId}', engagementId);
        return axios({
            method: 'GET',
            url: url,
            params: { v: '2.0' },
            headers: { Authorization: `Bearer ${bearerToken}`}
        });
    }
    catch (error) {
        console.error(error);
    }
}

async function getEntryPoints() {
    try {
        return axios({
            method: 'GET',
            url: URLS.entryPoints,
            params: { v: '3.0' },
            headers: { Authorization: `Bearer ${bearerToken}`}
        });
    }
    catch (error) {
        console.error(error);
    }
}

async function getEntryPoint( entryPointId ) {
    try {
        let url = URLS.entryPoint.replace('{entryPointId}', entryPointId);
        return axios({
            method: 'GET',
            url: url,
            params: { v: '3.0' },
            headers: { Authorization: `Bearer ${bearerToken}`}
        });
    }
    catch (error) {
        console.error(error);
    }
}

async function getVisitorBehaviors() {
    try {
        return axios({
            method: 'GET',
            url: URLS.visitorBehaviors,
            params: { v: '2.0' },
            headers: { Authorization: `Bearer ${bearerToken}`}
        });
    }
    catch (error) {
        console.error(error);
    }
}

async function getVisitorBehavior( visitorBehaviorId ) {
    try {
        let url = URLS.visitorBehavior.replace('{visitorBehaviorId}', visitorBehaviorId);
        return axios({
            method: 'GET',
            url: url,
            params: { v: '3.0' },
            headers: { Authorization: `Bearer ${bearerToken}`}
        });
    }
    catch (error) {
        console.error(error);
    }
}


/*
* TEST
*/
const main = async function () {

    let loginResp = await getBearerToken();
    bearerToken = loginResp.data.bearer;

    let campaignsResp = await getCampaigns();
    let campaigns = campaignsResp.data;

    let sampleCampaign = campaigns[0].id;
    let campaignResp = await getCampaign( sampleCampaign );
    let engagementName = campaignResp.data.name;
    let engagementIds = campaignResp.data.engagementIds;

    let entryPointsResp = await getEntryPoints();
    let entryPoints = entryPointsResp.data.xxxxxxxxxxxxxxxxxx;

    let entryPointId = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
    let entryPointResp = await getEntryPoint(entryPointId);
    let entryPointSectionValues = entryPointsResp.data.xxxxxxxxxxxxxxxxx;

    let visitorBehaviorsResp = await getVisitorBehaviors();
    let visitorBehaviors = visitorBehaviorsResp.data.xxxxxxxxxxxxxxxxx;

    let visitorBehaviorId = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
    let visitorBehaviorResp = await getVisitorBehavior(visitorBehaviorId);
    let visitorBehavior = visitorBehaviorResp.data.xxxxxxxxxxxxxxxxx;



    console.log(`Engagement: ${engagementName}, ${JSON.stringify(engagementIds)}`);
};



$( function() {
    //main();
});


export {
    getBearerToken,
    getCampaigns,
    getCampaign,
    getEngagementWindows,
    getEngagementWindow,
    getEntryPoints,
    getEntryPoint,
    getVisitorBehaviors,
    getVisitorBehavior
}


