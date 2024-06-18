'use strict';

let loginCredentials = {
    "username": "apiUser",
    "password": "apiUser4321"
}

const accounts = {
    sandbox: {
        acctId: '49985427',
        apiAuth: {
            "appKey":            "b1d6a2ccd2764a4f9f9ba4cbde546220",
            "secret":            "7ae5d4da4009cb21",
            "accessToken":       "75c76f27ce104828bd9c5b1a6901bdfc",
            "accessTokenSecret": "216979272d7e9b5c"
        },
        domains: {
            bearerToken     : 'https://va.agentvep.liveperson.net',
            convCloudUI     : 'https://va.agentvep.liveperson.net',
            msgHistory      : 'https://va.agentvep.liveperson.net',
            intervalMetrics : ''
        }
    },
    tracfoneProd: {
        acctId: '91614185',
        apiAuth: {
            "appKey":            "a91a7442c5274dadaeadaa45e61dda0c",
            "secret":            "ee3a4506420e0f",
            "accessToken":       "c065d288f3f0484dac81a071d06acc07",
            "accessTokenSecret": "2e811479d026dbd5"
        },
        domains: {
            bearerToken     : '',
            convCloudUI     : '',
            msgHistory      : '',
            intervalMetrics : 'https://va.agent-activity.liveperson.net'
        }
    }
}


let acct = accounts.tracfoneProd.acctId;
let apiAuth = accounts.tracfoneProd.apiAuth;
let domains = accounts.tracfoneProd.domains;
const URLS = {
    bearerToken     : `${domains.bearerToken}/api/account/${acct}/login`,
    campaigns       : `${domains.convCloudUI}/api/account/${acct}/configuration/le-campaigns/campaigns`,
    campaign        : `${domains.convCloudUI}/api/account/${acct}/configuration/le-campaigns/campaigns/{campaignId}`,
    messageHistory  : `${domains.msgHistory}/messaging_history/api/account/${acct}/conversations/search`,
    intervalMetrics : `${domains.intervalMetrics}/api/account/${acct}/interval-metrics`
}


let bearerToken = null;
let startTime, endTime;
const startEndTime = {
    "start": {
        "from": `${startTime}`,
        "to":   `${endTime}`
    }
};


async function getBearerToken() {
    try {
        return axios({
            method: 'post',
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


async function getIntervalMetrics() {
    try {
        return axios({
            method: 'GET',
            url: URLS.intervalMetrics,
            params: { v: '1' },
            headers: { Authorization: apiAuth}
        });
    }
    catch (error) {
        console.error(error);
    }
}


const getMessagingHistory = function (conversationId, startTime, endTime, status=["CLOSE","OPEN"],
                                      content=[ "info", "messageRecords", "agentParticipants", "transfers"  ])
{
    console.log('getMessagingHistory');

    let payload = { };
    if (conversationId)
        payload['conversationId'] = conversationId;
    if (status)
        payload['status'] = status;
    if (content)
        payload['contentToRetrieve'] = content;
    if (startTime) {
        if (!endTime)
            endTime = new Date().getMilliseconds();

        payload['start'] = {
            "from":startTime,
            "to":endTime
        }
    }

    axios({
        method: 'post',
        url: URLS.messageHistory,
        params: { offset: 0, limit:50, source:'someUniqueName' },
        headers: { Authorization: `Bearer ${bearerToken}`},
        data: JSON.stringify(payload)
    })
        .then(function (response) {
            console.log('response received: ');
            doSomethingWithResponse(response);
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
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
        let url = URLS.campaign.replace('{campaignId}', campaignId);
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


$(async function() {

    let intervalMetricsResp = await getIntervalMetrics();
    console.log( JSON.stringify(intervalMetricsResp) );

/*
    let loginResp = await getBearerToken();
    bearerToken = loginResp.data.bearer;

    // getMessagingHistory();

    let campaignsResp = await getCampaigns();
    let campaigns = campaignsResp.data;

    let sampleCampaign = campaigns[0].id;
    let campaignResp = await getCampaign( sampleCampaign );
    let engagementName = campaignResp.data.name;
    let engagementIds = campaignResp.data.engagementIds;

    console.log(`Engagement: ${engagementName}, ${JSON.stringify(engagementIds)}`);
*/

    console.log('DONE');
});


