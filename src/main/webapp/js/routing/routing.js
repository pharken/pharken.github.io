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
        detectBrowserMain();
        setButtonsActive();
    });

    let $launchBtn = $('#launchBtn');
    $launchBtn.on( "click", function() {
        detectBrowserMain();
        launchEngagement();
    });

    let $lpInfoBtn = $('#lpInfoBtn');
    $lpInfoBtn.on( "click", function() {
        getLpInfo();
    });


    runEngagementOpen();
};


let getPlatform = () => {
    let mrktInfo = lpTag.sdes.get("mrktInfo");
    displayInfo(`platform: ${mrktInfo[0].info.campaignId}`);
    return mrktInfo[0].info.campaignId;
}


let setButtonsActive = function () {

    let gbmBtn = document.getElementById("gbmBtn");
    let abcBtn = document.getElementById("abcBtn");
    let webBtn = document.getElementById("startEngagementBtn");
    let allBtn = document.getElementById("launchBtn");

    let platform = getPlatform();
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


let runEngagementOpen = function (getInfo=false) {
    if(lpTag && lpTag.taglets && lpTag.taglets.rendererStub) {

        // lpTag.taglets.rendererStub.getEngagementState(ROUTING_ENGAGEMENT_ID);

        if (getInfo) {
            let info = lpTag.taglets.rendererStub.getEngagementInfo(ROUTING_ENGAGEMENT_ID);
            displayInfo(`info: ${JSON.stringify(info, null, 2)}`);
        }

        let clicked = lpTag.taglets.rendererStub.click(ROUTING_ENGAGEMENT_ID, { preChatLines: ["Test msg"]});
        displayInfo(`Launch web messaging: ${clicked}`);
        displayInfo('_');  // spacer
    }
    else
        displayInfo('lpTag not ready');
}


let launchEngagement = () => {

    let platform = getPlatform();
    switch (platform) {
        case (GBM):
            //TODO  set a href link
            //TODO  invoke link
            break;
        case (ABC):
            //TODO  same as GBM
            break;
        case (WEB):
            runEngagementOpen();
            break;
        default:
            runEngagementOpen();
    }
}


$(function() {
    console.log( "Routing begin" );
    lpTag.section = [ "routing" ];   // initialize lpTage sections

    //TODO  do this on lpTag --- on ready or the other one
    // detectBrowserMain();

    main();
});

