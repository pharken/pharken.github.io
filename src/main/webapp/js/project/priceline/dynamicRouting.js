/*
    Routing stuff


    have you tried using ON_STARTED lpTag.event yet? At that point new Page
    should be ready as well as it's dependencies. I also think it's worth
    trying ON_READY too. The event binding must happen synchronously.


*/

const ROUTING_CAMPAIGN = 'routing';
const PRICELINE_WEB_CAMPAIGN = 'pricelineWeb';
const campaign = {
    routing: { engagementId: '3955040638'},
    pricelineWeb : {engagementId: '4124530538'}
}
const GBM = 'gbm';
const ABC = 'abc';
const WEB = 'web';

const GBMTestLink = "https://business.google.com/initiateBusinessChat?args=CigIAxIkOGIzN2Q3NTctN2U4ZC00NjU1LTk2MGItMWQ2NGM0MjZjY2VkYgd3ZWJ2aWV3aiJodHRwOi8vYnVzaW5lc3NtZXNzYWdlcy5nb29nbGUuY29tckIIAxIkOGIzN2Q3NTctN2U4ZC00NjU1LTk2MGItMWQ2NGM0MjZjY2VkGgpjYy1saXN0aW5nIgw5Njg2MTA1NTQ1NDCaAYsBChJjYy1saXN0aW5nX2NvbnRleHQSdQo4dHlwZS5nb29nbGVhcGlzLmNvbS9jaGF0LmJvdC5wbGF0Zm9ybS5CdXNpbmVzc0h1YkNvbnRleHQSOUgIWiQKGG92ZXJyaWRlX2NybV9lbnRyeV9wb2ludBIIVEVTVF9VUkxaDwoHaXNfdGVzdBIEdHJ1ZbIBOwo5SAhaJAoYb3ZlcnJpZGVfY3JtX2VudHJ5X3BvaW50EghURVNUX1VSTFoPCgdpc190ZXN0EgR0cnVl&hl=en";
const ABCTestLink = "https://business.google.com/message?args=CjkIAxIkOGIzN2Q3NTctN2U4ZC00NjU1LTk2MGItMWQ2NGM0MjZjY2VkGgpjYy1saXN0aW5nIgNHTU0SVAoSY2MtbGlzdGluZ19jb250ZXh0Ej4KOHR5cGUuZ29vZ2xlYXBpcy5jb20vY2hhdC5ib3QucGxhdGZvcm0uQnVzaW5lc3NIdWJDb250ZXh0EgJICFoECgJICA";


let main = function (){
    let $launchBtn = $('#launchBtn');
    $launchBtn.on( "click", function() {
        detectBrowserMain();
        launchEngagement();
    });

    checkLpScriptsLoaded();
};


/*  Activate the message button once LP scripts have been loaded    */
let timerId = null;
let checkLpScriptsLoaded = function () {
    try {
        let allEvents = lpTag.events.hasFired("*","*");
        let hasOnReady = allEvents.find( e => { return e.eventName ==="ON_READY" } );
        if (hasOnReady) {
            console.log('LP scripts ready');
            clearInterval(timerId);
            document.getElementById('launchBtn').disabled = false;
        }
        else
            console.log('LP scripts not ready');
    }
    catch (e) {
        console.log('checkLpScriptsLoaded failed');
        if (!timerId) {
            timerId = setInterval(timerFunction, 1000);
        }
    }
}

function timerFunction() {
    console.log("checking again ...");
    checkLpScriptsLoaded();
}


let getPlatform = () => {
    let mrktInfo = lpTag.sdes.get("mrktInfo");
    displayInfo(`platform: ${mrktInfo[0].info.campaignId}`);
    return mrktInfo[0].info.campaignId;
}


let openWebEngagement = function (getInfo=false) {
    displayInfo('Open web engagement')
    if(lpTag && lpTag.taglets && lpTag.taglets.rendererStub) {
        let clicked = lpTag.taglets.rendererStub.click( campaign.pricelineWeb.engagementId );
        displayInfo(`Launch web messaging: ${clicked}`);
    }
    else
        displayInfo('lpTag not ready');
}


let launchEngagement = () => {

    let platform = getPlatform();
    switch (platform) {
        case (GBM):
            window.open(GBMTestLink, '_blank');
            break;
        case (ABC):
            window.open(ABCTestLink, '_blank');
            break;
        case (WEB):
            openWebEngagement();
            break;
        default:
            openWebEngagement();
    }
}


$(function() {
    console.log( "Priceline POC begin" );
    main();
});

