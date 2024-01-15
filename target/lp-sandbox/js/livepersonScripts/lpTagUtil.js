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


const detectLpTagReadyPromise = function (lpTagLoadResolve){
    if ( window.lpTag && window.lpTag.events && window.lpTag.events.bind ) {
        updateStatusMsg();
        lpTagLoadResolve();
        // setTimeout(() => lpTagLoadResolve(), 2000);
    }
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


/*
promise that allows us to wait for the LP tag to finish loading
Once loaded, resolve the promise and then continue with the code that
performs operations on the LP tag
*/
const waitForLpTagPromise = new Promise( function (lpTagLoadResolve, lpTagLoadError) {
    detectLpTagReadyPromise(lpTagLoadResolve);
});


const refreshLpTag = function () {
    console.log('lpTag refresh');
    lpTag.newPage( document.URL, { section: lpTag.section });
}


/*
export  {
    waitForLpTagPromise,
    updateStatusMsg,
    refreshLpTag
}
*/
