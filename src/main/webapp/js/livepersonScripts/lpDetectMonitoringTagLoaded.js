/***
 *  Determine if the LP monitoring tag has been fully loaded on the page and
 *  all LP functions are available
 */


const detectLpTagReady = function (){
    if ( window.lpTag && window.lpTag.events && window.lpTag.events.bind )
        updateStatusMsg();
    else
        setTimeout(detectLpTagReady, 250);
}


const updateStatusMsg = function () {

    //TODO  check if #statusMsg exists in DOM.  If not, create it with with CSS positioning

    let $lpLoadSuccessMsg = $('<p></p>', {
        text: 'LP loaded',
        class: 'elementToFadeInAndOut'
    });

    $('#statusMsg').append($lpLoadSuccessMsg);
}
