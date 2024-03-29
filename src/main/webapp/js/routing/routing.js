/*
    Routing stuff


    TODO add ON_STARTED and ON_READY lpTag.events to this demo

*/
'use strict';

import * as lpInfo from "../livepersonScripts/lpInfoDisplay.js";
import * as lpTagUtil from "../livepersonScripts/lpTagUtil";
import * as lpEvents from "../livepersonScripts/lpEvents";


const ROUTING_ENGAGEMENT_ID = '3955040638';
const GBM = 'gbm';
const ABC = 'abc';
const WEB = 'web';



let routingMain = function (){
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
        lpInfo.getLpInfo();
    });

    let $copyVisitorIdBtn = $('#copyVisitorIdBtn');
    $copyVisitorIdBtn.on( "click", function() {
        copyToClipboard('visitorId');
    });

    let $webtagBtn = $('#webtagBtn');
    $webtagBtn.on( "click", function() {

        let siteScript = '';
        addScript( siteScript );
/*
        // Example: Unload jQuery and load a different version dynamically
        unloadAndReloadScript('https://code.jquery.com/jquery-3.6.4.min.js', 'https://code.jquery.com/jquery-3.6.0.min.js', function(){
            // New version of jQuery has been loaded, you can now use it.
            $(document).ready(function(){
                // Your jQuery code goes here
                console.log('New version of jQuery is ready!');
            });
        });
*/
/*
        const webtagScript = '../../js/livepersonScripts/webtag.js';
        unloadAndReloadScript('placeholder', webtagScript, function(){
            $(document).ready(function(){
                console.log('Did it work?');
                lpTag.section = [ "vz-tracfone-prod-plb-test" ];   // parking lot bot test (tracfone)
            });
        });
*/

    });

    let $lpSiteBtn = $('#lpSiteBtn');
    $lpSiteBtn.on( "click", function() {
        lpTag.site = '91614185';
        lpTag._load();
        // lpTag.init();
    });


    bindLpEvents();
};


function addScript( src ) {
    let s = document.createElement( 'script' );
    s.setAttribute( 'src', src );
    document.body.appendChild( s );
}


const bindLpEvents = function () {
    bindLpEvent('lp_sdes', 'VAR_ADDED', sdeAddedCallback);
    // None of the others work unless this one is active
    bindLpEvent('MONITORING_STATE', 'lp_SMT', monitoringStateCallback);
    bindLpEvent('state', 'lpUnifiedWindow', stateCallback);
    bindLpEvent('conversationInfo', 'lpUnifiedWindow', conversationInfoCallback);
    bindLpEvent('engagementData', 'lpUnifiedWindow', engagementDataCallback);
    bindLpEvent('maximized', 'lpUnifiedWindow', maximizedCallback);
    bindLpEvent('minimized', 'lpUnifiedWindow', minimizedCallback);
    // bindLpEvent('START', 'LP_OFFERS', startCallback);
    // bindLpEvent('OFFER_DISPLAY', 'LP_OFFERS', offerDisplayCallback);
    // bindLpEvent('OFFER_IMPRESSION', 'LP_OFFERS', offerImpressionCallback);
    // bindLpEvent('OFFER_CLICK', 'LP_OFFERS', offerClickCallback);
    // bindLpEvent('OFFER_REMOVE', 'LP_OFFERS', offerRemoveCallback);
}

/**
 *
 * @param eventName         string
 * @param appName           string
 * @param callbackFunc      function
 * @param callbackFunctionExecutionContext     The object which is the execution context of the function.
 *                                              Useful if you rely on context ("this") in your code.
 *                                              <optional>
 * @param async             boolean             <optional>
 * @param triggerOnce       boolean             <optional>
 */
const bindLpEvent = function (eventName, appName, callbackFunc, context=null, async=true, triggerOnce=false) {

    lpTag.events.bind({
        eventName:   eventName,
        appName:     appName,
        func:        callbackFunc,
        context:     context,
        async:       async,
        triggerOnce: triggerOnce
    })
}

const sdeAddedCallback = ( (data) => genericBindEventCallback('lp_sdes', data));
const monitoringStateCallback = ( (data) => genericBindEventCallback('MONITORING_STATE', data));
const stateCallback = ( (data) => genericBindEventCallback('state', data));
const conversationInfoCallback = ( (data) => genericBindEventCallback('conversationInfo', data));
const engagementDataCallback = ( (data) => genericBindEventCallback('engagementData', data));
const maximizedCallback = ( (data) => genericBindEventCallback('maximized', data));
const minimizedCallback = ( (data) => genericBindEventCallback('minimized', data));
const startCallback = ( (data) => genericBindEventCallback('START', data));
const offerDisplayCallback = ( (data) => genericBindEventCallback('OFFER_DISPLAY', data));
const offerImpressionCallback = ( (data) => genericBindEventCallback('OFFER_IMPRESSION', data));
const offerClickCallback = ( (data) => genericBindEventCallback('OFFER_CLICK', data));
const offerRemoveCallback = ( (data) => genericBindEventCallback('OFFER_REMOVE', data));

const genericBindEventCallback = function (eventName, data) {
    //displayInfo(`( ${getFormattedTimeStamp()} )  ${eventName}:\n ${JSON.stringify(data, null, 2)}`);
    displayInfo(`${eventName}:\n ${JSON.stringify(data, null, 2)}`);

    checkEventCallbackValueForSpecificData(data);
}

const checkEventCallbackValueForSpecificData = function (data){
    updateText("visitorId", data);
    updateText("agentId", data);
    updateText("agentName", data);
    updateText("skill", data);
    updateText("campaignId", data);
    updateText("conversationId", data);
    updateText("state", data);
}


const updateText = function (id, obj) {
    if (id in obj) {
        let value = obj[id];
        if (value) {
            // this check exists because there can be more than one value for visitor Id
            let $targetId = $('#' + id);
            if (id === "visitorId") {
                if (value.length > 30) {
                    $targetId.html(value);
                    if ($('#copyVisitorIdBtn').hasClass('display-none'))
                        $('#copyVisitorIdBtn').removeClass('display-none');
                }
            }
            else
                $targetId.html(value);
        }
    }
}


const copyToClipboard = function (id) {
    const textToCopy = $('#' + id).text();
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            console.log("copied to clipboard: " + textToCopy);
        })
        .catch((error) => {
            console.error("Failed to copy text to clipboard:", error);
        });
}


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


const unloadAndReloadScript = function (oldScriptUrl, newScriptUrl, callback) {
    // Find existing script element
    let existingScript = document.querySelector('script[src="' + oldScriptUrl + '"]');

    if(existingScript){
        // Remove existing script element
        existingScript.parentNode.removeChild(existingScript);
    }

    // Create and append a new script element
    let newScript = document.createElement('script');
    newScript.type = 'text/javascript';
    newScript.src = newScriptUrl;
    newScript.onload = callback;
    document.head.appendChild(newScript);
}





$(function() {
    console.log( "Test page begin" );

    const urlStr = window.location.search;
    const urlParams = new URLSearchParams(urlStr);

    lpTagUtil.waitForLpTagPromise.then(
        result => loadSectionValues(urlParams),
        error => console.log('LP tag not loading')
    );

    document.title = 'Routing';

    lpEvents.bindCopyVisitorIdBtn();
    lpEvents.bindLpEvents();

    routingMain();
});
