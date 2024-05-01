

const COMMON_HEADERS = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
};



*/

/*
let getBearerToken = function() {

    const bearerTokenURL = `https://va.agentvep.liveperson.net/api/account/${acct}/login?v=1.3`;
    const auth = {
        "username": "queueHealthStatus",
        "appKey": "b1d6a2ccd2764a4f9f9ba4cbde546220",
        "secret": "7ae5d4da4009cb21",
        "accessToken": "75c76f27ce104828bd9c5b1a6901bdfc",
        "accessTokenSecret": "216979272d7e9b5c"
    };
    const payload =  {
        "username": "apiUser",
        "password": "apiUser4321"
    };
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

*/



