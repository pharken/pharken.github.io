/***
 Next, I’ll call the /v2/oauth2/token endpoint to get my OAuth token.

 The specific parameters you’ll need to pass in will vary from API to API. For Petfinder, I need to pass in a grant_type
 of client_credentials, along with my client_id (my key) and client_secret (my secret).

 We need to use the POST method for this API call (that’s true of all OAuth requests). The Petfinder API also uses
 application/x-www-form-urlencoded as it’s Content-type. This is the default for XHR, but fetch() uses JSON as it’s default.
 */


const petfinderUrl = {
    base: 'https://api.petfinder.com/',
    oauthToken: 'v2/oauth2/token',
    content: 'v2/animals'
}

// PetFinder client
const apiClient = {
    apiKey: '1V7jGAiYI0u9USdV2SfK7gEpEI86HdHa6Wark5zDTHExiOcn1C',
    secret: '4NqsFYDVYIxtjOddrN0p8vXWrUu64q1vtXy8N9jJ'
}

let oauth = {
    tokenType: null,
    token: null,
    expiration: null
};


/**
 * OAuth - using the PetFinder REST API
 *
 * Using the client API key and secret, get the token
 * Any subsequent REST requests will use the token (which has an expiration)
 */
const getPetfinderOauthToken = function() {

    // This is a POST request, because we need the API to generate a new token for us
    fetch(petfinderUrl.base + petfinderUrl.oauthToken, {
        method:  'POST',
        body:    'grant_type=client_credentials&client_id=' + apiClient.apiKey + '&client_secret=' + apiClient.secret,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
        .then(resp => {
            return resp.json()
        })
        .then(data => {
            oauth.tokenType = data.token_type;
            oauth.expiration = data.expires_in;
            oauth.token = data.access_token;
            console.log(`type: ${oauth.tokenType}`);
            console.log(`expiration: ${oauth.expiration}`);
            console.log(`token: ${oauth.token}`);
        })
        .catch( err => console.log('something went wrong', err) );
}

/**
 * This is exactly the same as getPetfinderOauthToken except that it
 * returns a promise instead of just getting the token
 *
 * Once the promise is resolved, we know that we have the
 *
 * @returns {Promise<unknown>}
 */
const authenticatePetfinderRestApi = function() {

    return new Promise(function(resolve, reject) {

        fetch(petfinderUrl.base + petfinderUrl.oauthToken, {
            method:  'POST',
            body:    'grant_type=client_credentials&client_id=' + apiClient.apiKey + '&client_secret=' + apiClient.secret,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
            .then(resp => {
                return resp.json()
            })
            .then(data => {
                oauth.tokenType = data.token_type;
                oauth.expiration = data.expires_in;
                oauth.token = data.access_token;
                // console.log(`type: ${oauth.tokenType}`);
                // console.log(`expiration: ${oauth.expiration}`);
                // console.log(`token: ${oauth.token}`);

                resolve(true);
            })
            .catch( err => {
                console.log('Get PetFinder token failed, err');
                reject(new Error(`Get token error: ${err}`));
            } );
    });
}


/**
 *
 * @returns {Promise<any>}
 */
const getPetfinderContent = function() {
    let org = 'RI77';
    let status = 'adoptable';
    return fetch(petfinderUrl.base + petfinderUrl.content + '?organization=' + org + '&status=' + status, {
        headers: {
            'Authorization': oauth.tokenType + ' ' + oauth.token,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(function (resp) {
        return resp.json();
    }).then(function (data) {
        console.log('pets', data);
    }).catch(function (err) {
        console.log('something went wrong', err);
    });
}




// Usage:
const getPetfinderTokenAndThenContent = function() {

    let promise = authenticatePetfinderRestApi();

    // could skip this is you want, but then you wouldn't have the error msg on fail
    promise.then(
        (hasToken) => console.log('token received'),
        error => console.log(`Error: ${error.message}`)
    );

    promise.then((hasToken) => {
        if (hasToken) {
            console.log('Got token. Get content...')
            getPetfinderContent();
        }
        else
            console.log('does this line ever get triggered?')
    });
}


$(function() {
    console.log( "API begin" );
    getPetfinderTokenAndThenContent();
});
