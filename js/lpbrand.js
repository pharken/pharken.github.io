'use strict';


const initAgentSdk = function () {
    console.log('init Agent SDK');
    lpTag.agentSDK.init({
        notificationCallback: notificationHandler,
        visitorFocusedCallback: focusHandler,
        visitorBlurredCallback: blurHandler
    })
};

const notificationHandler = function () {
    console.log('notification handler callback');
};

const focusHandler = function () {
    console.log('focus handler callback');
};

const blurHandler = function () {
    console.log('blur handler callback');
};


// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

const getChatConversation = function () {
    console.log('get chat transcript');
    let jsonElemKey = "chatTranscript";
    lpTag.agentSDK.get(jsonElemKey, onGetChatSuccess, onGetChatFail);
};

const onGetChatSuccess = function (lpPublicModelData) {
    console.log('get chat success');

    let data = lpPublicModelData;
    if ( data ) {
        if ( typeof data === 'object' ) {
            if ( 'lines' in data )
                return getLastMessage(data.lines);
        }
    }
};

const onGetChatFail = function (err) {
    console.log('get chat fail');

    if (err) {
        console.log('Error: ' + err.message);
        console.log(err.stack);

        const lpDiv = document.getElementById('lpDiv');
        const noModelData = document.createElement("p");

        noModelData.innerText = "No model data found";
        lpDiv.body.appendChild(noModelData);
    }
    else
        console.log('onGetChatFail - ok');
};


// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

const bindAgentWorkspaceDataElement = function () {
    console.log('bind chat conversation');
    let jsonElemKey = "chatTranscript";
    lpTag.agentSDK.bind(jsonElemKey, updateCallback, bindFail);
};

const bindFail = function(err) {
    if (err)
        console.log('bind error');
    else
        console.log('bind success');
};

const updateCallback = function () {
    console.log('Engagement chat updated');
    getChatConversation();
};


// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

const getLastMessage = function (chatLines) {
    console.log('Getting last message');

    let chat = (chatLines).slice().reverse();

    chat.every(line => {
        if (line.source === 'visitor') {
            console.log('Visitor msg: ' + line.text);
            getMovieInfo(line.text);
            return false;
        }
    });

    return true;
};


const IMDB_API_URL = 'https://www.omdbapi.com/?apikey=757600f9';

const getMovieInfo = function(movieTitle) {
    let searchUrl = IMDB_API_URL + '&t=' + movieTitle;

    serviceRequest( searchUrl )
        .done(function (movieData) {
            let movieJson = JSON.stringify(movieData,null,4);
            
			if ( movieData.hasOwnProperty('Error'))
                console.log('Movie not found');
            else
                displayMovie(movieData);
        })
        .fail(function (jqXHR, s, error) {
            console.log(`Status code: ${jqXHR.status} - ${jqXHR.message}`);
        });
};


const serviceRequest = function(URL, httpFunction, payload) {
    if (!httpFunction)
        httpFunction = 'GET';

    let data = {};
    if (payload)
        data = JSON.stringify(payload);

    return $.ajax({
          url: URL
        , type: httpFunction
        , cache: false
        , dataType: 'json'
        , data: data
        , async: true
    });
};


const displayMovie = function(movie){
    let $ul = $('#listContainer');
    let $li = $('<li></li>');
    let title    = $('<p></p>', {text: movie.Title});
    let year     = $('<p></p>', {text: `${movie.Year} (Rated: ${movie.Rated})`});
    let genre    = $('<p></p>', {text: movie.Genre});
    let director = $('<p></p>', {text: movie.Director});
    $li.append(title, year, genre, director);

    $ul.append($li);
    $ul.animate({scrollTop: $ul.prop("scrollHeight")}, 500);
};




// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

jQuery(function($) {
    $(document).ready(function() {
        initAgentSdk();
        getChatConversation();
        bindAgentWorkspaceDataElement();
    });
});


