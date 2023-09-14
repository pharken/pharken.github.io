/***
 *  Determine if the LP monitoring tag has been fully loaded on the page and
 *  all LP functions are available
 */

let isLpTagReady = false;

const detectLpTagReady = function (){
    if ( window.lpTag && window.lpTag.events && window.lpTag.events.bind ) {
        isLpTagReady = true;
        let $lpLoadSuccessMsg = $('<p></p>', {
            text: 'LP loaded',
            class: 'elementToFadeInAndOut'
        });
        $('#statusMsg').append($lpLoadSuccessMsg);
    }
    else
        setTimeout(detectLpTagReady, 250);
}