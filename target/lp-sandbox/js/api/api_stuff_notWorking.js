

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




