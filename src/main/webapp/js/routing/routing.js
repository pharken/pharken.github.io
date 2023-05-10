/*
    Routing stuff


    have you tried using ON_STARTED lpTag.event yet? At that point new Page
    should be ready as well as it's dependencies. I also think it's worth
    trying ON_READY too. The event binding must happen synchronously.


*/

const ROUTING_ENGAGEMENT_ID = '3955040638';

let main = function (){
    let $startEngagementBtn = $('#startEngagementBtn');
    $startEngagementBtn.on( "click", function() {
        displayInfo('runEngagementOpen');
        runEngagementOpen();
    });

    let $browserDetectBtn = $('#browserDetectBtn');
    $browserDetectBtn.on( "click", function() {
        displayInfo('detectBrowserMain');
        detectBrowserMain();
    });


    runEngagementOpen();
};


let runEngagementOpen = function () {
    if(lpTag && lpTag.taglets && lpTag.taglets.rendererStub) {
        lpTag.taglets.rendererStub.getEngagementState(ROUTING_ENGAGEMENT_ID);

        let info = lpTag.taglets.rendererStub.getEngagementInfo( ROUTING_ENGAGEMENT_ID );
        displayInfo(`info: ${JSON.stringify( info, null, 2 )}`);

        let clicked = lpTag.taglets.rendererStub.click(ROUTING_ENGAGEMENT_ID, { preChatLines: ["Test msg"]});
        displayInfo(`clicked: ${clicked}`);
        displayInfo(' ');  // spacer
    }
    else
        displayInfo('lpTag not ready');
}


$(function() {
    console.log( "Routing begin" );
    lpTag.section = [ "routing" ];   // initialize lpTage sections

    // detectBrowserMain();

    main();
});

