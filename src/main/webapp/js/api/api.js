/*
    API

*/

// secret key:  maven-api-key
let accounts = {
    SANDBOX: {
        accountId: '49985427',
        baseUrl: 'https://z1.context.liveperson.net',
        'maven-api-key': 'hNzTR1BjI3NDk5ODU0Mjc='
    },
    VBG: {
        accountId: '22209379',
        baseUrl: 'https://z1.context.liveperson.net',
        'maven-api-key': 'kq9tMnO5BCMjIyMDkzNzk='
    },
    FAST: {
        accountId: '17276385',
        baseUrl: 'https://z1.context.liveperson.net',
        'maven-api-key': 'RsVgzBjLAeMTcyNzYzODU='
    },
    FAST_PROD: {
        accountId: '88102062',
        baseUrl: 'https://va-e.c.liveperson.net',
        'maven-api-key': 's3TyAVOLl4ODgxMDIwNjI='
    }
}


// ***********    Set the account    ***********
let base = accounts.SANDBOX.baseUrl;
let acct = accounts.SANDBOX.accountId;
let mvnApiKey = accounts.SANDBOX["maven-api-key"]


const namespace = 'messagingQueueHealth';


const lpUrl = {
    base: `${base}`,
    getNamespaces: `/v1/account/${acct}`,
    createNamespace: `/v1/account/${acct}`,
    updateNamespaceProperty: `/v1/account/${acct}/${namespace}/properties`,
    getNamespaceProperties: `/v1/account/${acct}/${namespace}/properties`,
    deleteNamespace: ''
}

const COMMON_HEADER = {
    'maven-api-key': `${mvnApiKey}`,
    'Content-Type': 'application/json'
}



const bindButtons = function () {
    let getNamespaceBtn = document.getElementById('getNamespaceBtn');
    getNamespaceBtn.addEventListener("click", getNamespaces );
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





const createNamespace = function() {

    let payload = JSON.stringify({ "name": namespace } );

    fetch(lpUrl.base + lpUrl.createNamespace, {
        method:  'POST',
        body: payload,
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


const getNamespaceProperties = function () {
    fetch(lpUrl.base + lpUrl.getNamespaceProperties, {
        method:  'GET',
        headers: {
            'maven-api-key': `${mvnApiKey}`,
            'Content-Type': 'application/json' }
    })
        .then(resp => {
            return resp.json()
        })
        .then(nsProperties => {
            console.log(`success`);
            console.log(`namespace properties: ${JSON.stringify(nsProperties)}`)
        })
        .catch( err => console.log('something went wrong', err) );
}


let apiMain = function () {

    displayInfo( "API begin" );
    displayInfo(`base: ${base}, account ID: ${acct}`);

    bindButtons();
    bindLpEvents();
    // getNamespaces();
    // createNamespace();
    // updateNamespaceProperty();
    // getNamespaceProperties();
}


$(function() {
    apiMain();
});
