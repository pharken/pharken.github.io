const FAST = 'fast';
const FAST_PROD = 'fast_prod';
const VBG = 'vbg';
const PLAYGROUND = 'playground';


/*
    Uncomment the account you wish to test.  Comment the rest
*/
// let account = VBG;
let account = FAST;
// let account = FAST_PROD;
// let account = PLAYGROUND;


const accountId = {
    vbg: '22209379',
    fast: '17276385',
    fast_prod: '88102062',
    playground: '49985427',
};


//TODO  confirm the correct domains
/*
// original
const baseUrl = {
    vbg: 'https://z1.context.liveperson.net',
    fast: 'https://va-e.c.liveperson.net',
    fast_prod: 'https://va-e.c.liveperson.net',
    playground: 'https://va-s.c.liveperson.net'
}
*/
const baseUrl = {
    vbg: 'https://z1.context.liveperson.net',
    fast: 'https://z1.context.liveperson.net',
    fast_prod: 'https://va-e.c.liveperson.net',
    playground: 'https://va-s.c.liveperson.net'
}


// secret key:  maven-api-key
const apiKey = {
    vbg: 'kq9tMnO5BCMjIyMDkzNzk=',
    fast: 'RsVgzBjLAeMTcyNzYzODU=',
    fast_prod: 's3TyAVOLl4ODgxMDIwNjI=',
    playground: 'hNzTR1BjI3NDk5ODU0Mjc='
}


let base, acct, mvnApiKey;
switch(account) {
    case FAST:
        base = baseUrl.fast;
        acct = accountId.fast;
        mvnApiKey = apiKey.fast;
        break;
    case FAST_PROD:
        base = baseUrl.fast_prod;
        acct = accountId.fast_prod;
        mvnApiKey = apiKey.fast_prod;
        break;
    case VBG:
        base = baseUrl.vbg;
        acct = accountId.vbg;
        mvnApiKey = apiKey.vbg;
        break;
    case PLAYGROUND:
        base = baseUrl.playground;
        acct = accountId.playground;
        mvnApiKey = apiKey.playground;
        break;
}


const namespace = 'messagingQueueHealth';


const lpUrl = {
    base: `${base}`,
    getNamespaces: `/v1/account/${acct}`,
    createNamespace: `/v1/account/${acct}`,
    updateNamespaceProperty: `/v1/account/${acct}/${namespace}/properties`,
    getNamespaceProperties: `/v1/account/${acct}/${namespace}/properties`,
    deleteNamespace: ''
}

const COMMON_HEADERS = {
    'Content-Type': 'application/json',
};



/*
let getBearerToken = function( accountId ) {
    try {
        const bearerTokenURL = `https://va.agentvep.liveperson.net/api/account/${accountId}/login?v=1.3`;
        const bodyGetBearerToken = {
            "username": "queueHealthStatus",
            "appKey": "aed144e8bc6a4c54bb6750794ca0fc75",
            "secret": "42ebd15749c009fe",
            "accessToken": "47ed01ae4acd4b998a986eb43c57ab0a",
            "accessTokenSecret": "7b8e272234e0837d"
        }
        const payloadRequest = await httpClient(bearerTokenURL, {
            method: 'POST',
            headers: { ...COMMON_HEADERS },
            body: bodyGetBearerToken,
            json: true,
        });
        return payloadRequest.bearer || ''
    } catch (error) {
        console.error(`getBearerToken > received following error message during Bearer Token: ${error.message}`)
        return ''
    }
}
*/

let getBearerToken = function() {

    const bearerTokenURL = `https://va.agentvep.liveperson.net/api/account/${acct}/login?v=1.3`;
    const bodyGetBearerToken = {
        "username": "queueHealthStatus",
        "appKey": "aed144e8bc6a4c54bb6750794ca0fc75",
        "secret": "42ebd15749c009fe",
        "accessToken": "47ed01ae4acd4b998a986eb43c57ab0a",
        "accessTokenSecret": "7b8e272234e0837d"
    }
    fetch(bearerTokenURL, {
        method:  'POST',
        body: JSON.stringify(bodyGetBearerToken),
        headers: { ...COMMON_HEADERS }
    })
        .then(resp => {
            return resp.json()
        })
        .then(data => {
            console.log(`bearer token success`)
        })
        .catch( err => console.log('something went wrong', err) );
}




/*
async getJSON() {
    return fetch('/website/MyJsonFile.json')
        .then((response)=>response.json())
        .then((responseJson)=>{return responseJson});
}
*/

async function getNamespaces() {

    fetch(lpUrl.base + lpUrl.getNamespaces, {
        method:  'GET',
        headers: {
            'maven-api-key': `${mvnApiKey}`,
            'Content-Type': 'application/x-www-form-urlencoded' }
    })
        .then(resp => {
            return resp.json()
        })
        .then(namespaces => {
            console.log(`namespaces: ${JSON.stringify(namespaces)}`)
            let namespaceFound = false;
            namespaces.every(ns => {
                if (ns === namespace) {
                    namespaceFound = true
                    return false;
                }
                return true;
            });
        })
        .catch( err => {
            console.log('something went wrong', err);
            return false;
        });
}

/**
 .then(namespaces => {
                console.info('namespace list returned');
                let namespaceFound = false;
                namespaces.every(ns => {
                    if (ns === namespace) {
                        namespaceFound = true
                        return false;
                    }
                    return true;
                });

                callback(null, namespaceFound)
            })
 .catch(err => {
                console.error(`checkNamespaceExists API failed: ${err.message}`);
            })
 }

 */



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




$(function() {
    console.log( "API begin" );
    // getBearerToken()
    getNamespaces();
    // createNamespace();
    // updateNamespaceProperty();
    getNamespaceProperties();
});
