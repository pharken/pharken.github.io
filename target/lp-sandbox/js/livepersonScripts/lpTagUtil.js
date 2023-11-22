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

/* Updating section and refresh LP tag is intended to be used
*  with single page apps.
*  It is useful for demo purposes when we want to frequently
*  change the entry point */
const updateSectionValues = function (sectionValues) {

}
