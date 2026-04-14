/*
    API

*/


import {getCampaign} from "./cc-ui-api";

let accounts = {
    SANDBOX: {
        accountId: '49985427',
        baseUrl: 'https://z1.context.liveperson.net',
        'maven-api-key': 'hNzTR1BjI3NDk5ODU0Mjc='
    }
}


// ***********    Set the account    ***********
let base = accounts.SANDBOX.baseUrl;


const lpUrl = {
    base: `${base}`,
    getNamespaces: `/v1/account/${acct}`,
    updateNamespaceProperty: `/v1/account/${acct}/${namespace}/properties`,

}

const COMMON_HEADER = {
    'maven-api-key': `${mvnApiKey}`,
    'Content-Type': 'application/json'
}



const getNamespaces = async function () {
    try {
        let resp = await getRequest( lpUrl.getNamespaces );
        let namespaces = await resp.json();

        displayInfo('namespaces: ');
        displayInfo( JSON.stringify(namespaces, null, 2) );
        let namespaceFound = false;
        namespaces.every(ns => {
            if (ns === namespace) {
                namespaceFound = true
                return false;
            }
            return true;
        });

        // this is equal to the above
        /*
        await resp.json()
            .then(namespaces => {
                displayInfo('namespaces: ');
                displayInfo(JSON.stringify(namespaces, null, 2));
                let namespaceFound = false;
                namespaces.every(ns => {
                    if (ns === namespace) {
                        namespaceFound = true
                        return false;
                    }
                    return true;
                });
            });
        */

    }
    catch (err) {
        displayInfo(err.message);
    }
}


async function getRequest( url ) {
    return fetch(lpUrl.base + url, {
        method:  'GET',
        headers: COMMON_HEADER
    })
        .catch(err => {
            displayInfo(`Reqeust error: ${err.stack}`);
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



const updateNamespaceProperty = function() {

    let namespaceValue = {
        "accountId": "49985427",
        "nameSpace": "queueWaitTime",
        "ttlSeconds": 0,
        "payload": {
            "Property1": "abc",
            "Property2": "def"
        }
    };

    let payload = JSON.stringify(namespaceValue);

    fetch(lpUrl.base + lpUrl.updateNamespaceProperty, {
        method:  'PATCH',
        body:    payload,
        headers: {
            'maven-api-key': `${mvnApiKey}`,
            'Content-Type': 'application/json' }
    })
        .then(resp => {
            return resp.json()
        })
        .then(data => {
            console.log(`success`)
        })
        .catch( err => console.log('something went wrong', err) );
}


let apiMain = function () {

    displayInfo( "API begin" );
    displayInfo(`base: ${base}, account ID: ${acct}`);

    bindButtons();
    // getNamespaces();
    // updateNamespaceProperty();

}


const main = async function () {

    let loginResp = await getBearerToken();
    bearerToken = loginResp.data.bearer;

    let campaignsResp = await getCampaigns();
    let campaigns = campaignsResp.data;

    console.log(`Engagement: ${engagementName}, ${JSON.stringify(engagementIds)}`);
};







$(function() {
    apiMain();
});
