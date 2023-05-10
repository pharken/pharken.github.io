/*
    Routing stuff


    have you tried using ON_STARTED lpTag.event yet? At that point new Page
    should be ready as well as it's dependencies. I also think it's worth
    trying ON_READY too. The event binding must happen synchronously.


*/

const ROUTING_ENGAGEMENT_ID = '3955040638';

const GBM = 'gbm';
const ABC = 'abc';
const WEB = 'web';



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
        setButtonsActive();
    });


    runEngagementOpen();
};


let setButtonsActive = function () {

/*
    let sdes = lpTag.sdes;
    displayInfo(`lpTag.sdes: ${JSON.stringify(lpTag.sdes)}`);
*/

    let mrktInfo = lpTag.sdes.get("mrktInfo");
    let platform = mrktInfo[0].info.campaignId;
    displayInfo(`campaignId = ${platform}`);


    let gbmBtn = document.getElementById("gbmBtn");
    let abcBtn = document.getElementById("abcBtn");
    let webBtn = document.getElementById("startEngagementBtn");
    let allBtn = document.getElementById("launchBtn");

    displayInfo(`platform: ${platform}`);
    switch (platform) {
        case (GBM):
            gbmBtn.disabled = false;
            abcBtn.disabled = true;
            startEngagementBtn.disabled = true;
            break;
        case (ABC):
            gbmBtn.disabled = true;
            abcBtn.disabled = false;
            startEngagementBtn.disabled = true;
            break;
        case (WEB):
            gbmBtn.disabled = true;
            abcBtn.disabled = true;
            startEngagementBtn.disabled = false;
            break;
        default:
            gbmBtn.disabled = true;
            abcBtn.disabled = true;
            startEngagementBtn.disabled = false;
    }
}


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

    //TODO  do this on lpTag --- on ready or the other one
    // detectBrowserMain();

    main();
});

