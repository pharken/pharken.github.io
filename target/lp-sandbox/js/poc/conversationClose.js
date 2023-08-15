/*
    Conversation Close
*/
const ROUTING_ENGAGEMENT_ID = '3955040638';


let runEngagementOpen = function (getInfo=false) {
    if(lpTag && lpTag.taglets && lpTag.taglets.rendererStub) {

        if (getInfo) {
            let info = lpTag.taglets.rendererStub.getEngagementInfo(ROUTING_ENGAGEMENT_ID);
            displayInfo( info );
        }

        let clicked = lpTag.taglets.rendererStub.click(ROUTING_ENGAGEMENT_ID, { preChatLines: ["Test msg"]});
        displayInfo(`Launch web messaging: ${clicked}`);
        displayInfo('_');  // spacer
    }
    else
        displayInfo('lpTag not ready');
}


let main = function (){
    let $openEngagementBtn = $('#openEngagementBtn');
    $openEngagementBtn.on( "click", function() {
        displayInfo('runEngagementOpen');
        runEngagementOpen();
    });
};


$(function() {
    console.log( "Conversation close" );
    lpTag.section = [ "routing" ];   // initialize lpTage sections

    main();
});
