'use strict';

// import * as url2section from "../util/urlToSectionValues.js";

const acct = '49985427';


let getBearerToken = function() {

    const bearerTokenURL = `https://va.agentvep.liveperson.net/api/account/${acct}/login`;
    const auth = {
        "appKey": "b1d6a2ccd2764a4f9f9ba4cbde546220",
        "secret": "7ae5d4da4009cb21",
        "accessToken": "75c76f27ce104828bd9c5b1a6901bdfc",
        "accessTokenSecret": "216979272d7e9b5c"
    };
    const payload =  {
        "username": "apiUser",
        "password": "apiUser4321"
    };

    let bearer = null;
    axios({
        method: 'post',
        url: bearerTokenURL,
        params: { v: '1.3' },
        headers: { Authorization: auth},
        data: {
            "username": "apiUser",
            "password": "apiUser4321"
        }
    })
        .then(function (resp) {
            console.log('Login successful');
            bearer = resp.data.bearer;
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
            return bearer;
        });
}


const getConversationsByTimeRange = function () {
    console.log('getConversationsByTimeRange');

    let token = 'de0937dc5ca852058ed1ab9deab9eca84da95da2c431645eec441651f593e517';

    let url = 'https://va.msghist.liveperson.net/messaging_history/api/account/91614185/conversations/search';

    console.log(`url: ${url}}`);
    axios({
        method: 'post',
        url: url,
        params: { offset: 0, limit:50, source:'someUniqueName' },
        headers: { Authorization: `Bearer ${token}`},
        data: {
            "start": {
                "from":1702540800000,
                "to":1702551600000
            }
        }
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

/*
    // Want to use async/await? Add the `async` keyword to your outer function/method.
    async function getUser() {
        try {
            const response = await axios.get('/user?ID=12345');
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }
*/

}


async function getUser() {
    try {
        const response = await axios.get('/user?ID=12345');
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}


const doSomethingWithResponse = function (response) {
    console.log(response.data._metadata);
    console.log(response.data.conversationHistoryRecords);
}


$(function() {

    getBearerToken();
    getConversationsByTimeRange();

});