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



const identityFn = function(callback) {

    callback({
        iss: 'https://www.placeholder.com',
        acr: 'loa1',
        sub: 'sub'
    });
};

lpTag.identities = [];
lpTag.identities.push(identityFn);



const xxxxxxx = function () {

    // Header
    window.onload = function () {
        function random32bit() {
            let u = new Uint32Array(1);
            window.crypto.getRandomValues(u);
            let str = u[0].toString(16).toUpperCase();
            return '00000000'.slice(str.length) + str;
        }

        var oHeader = { alg: 'RS256', typ: 'JWT' };

        // Payload
        var oPayload = {};
        var tNow = KJUR.jws.IntDate.get('now');
        var tEnd = KJUR.jws.IntDate.get('now + 1year');
        oPayload.iss = "http://foo.com";
        //oPayload.sub = "TestPage" + random32bit();
        oPayload.sub = "Nafeez";
        oPayload.nbf = tNow;
        oPayload.iat = tNow;
        oPayload.exp = tEnd;
        oPayload.jti = "id123456";
        oPayload.aud = "http://foo.com/employee";

        oPayload.type = "phVip";

        // Sign JWT, password=616161
        var sHeader = JSON.stringify(oHeader);
        var sPayload = JSON.stringify(oPayload);
        var prvKey = KEYUTIL.getKey("-----BEGIN RSA PRIVATE KEY-----MIICWwIBAAKBgQDdlatRjRjogo3WojgGHFHYLugdUWAY9iR3fy4arWNA1KoS8kVw33cJibXr8bvwUAUparCwlvdbH6dvEOfou0/gCFQsHUfQrSDv+MuSUMAe8jzKE4qW+jK+xQU9a03GUnKHkkle+Q0pX/g6jXZ7r1/xAK5Do2kQ+X5xK9cipRgEKwIDAQABAoGAD+onAtVye4ic7VR7V50DF9bOnwRwNXrARcDhq9LWNRrRGElESYYTQ6EbatXS3MCyjjX2eMhu/aF5YhXBwkppwxg+EOmXeh+MzL7Zh284OuPbkglAaGhV9bb6/5CpuGb1esyPbYW+Ty2PC0GSZfIXkXs76jXAu9TOBvD0ybc2YlkCQQDywg2R/7t3Q2OE2+yo382CLJdrlSLVROWKwb4tb2PjhY4XAwV8d1vy0RenxTB+K5Mu57uVSTHtrMK0GAtFr833AkEA6avx20OHo61Yela/4k5kQDtjEf1N0LfI+BcWZtxsS3jDM3i1Hp0KSu5rsCPb8acJo5RO26gGVrfAsDcIXKC+bQJAZZ2XIpsitLyPpuiMOvBbzPavd4gY6Z8KWrfYzJoI/Q9FuBo6rKwl4BFoToD7WIUS+hpkagwWiz+6zLoX1dbOZwJACmH5fSSjAkLRi54PKJ8TFUeOP15h9sQzydI8zJU+upvDEKZsZc/UhT/SySDOxQ4G/523Y0sz/OZtSWcol/UMgQJALesy++GdvoIDLfJX5GBQpuFgFenRiRDabxrE9MNUZ2aPFaFp+DyAe+b4nDwuJaW2LURbr8AEZga7oQj0uYxcYw==-----END RSA PRIVATE KEY-----  ");
        var sJWT = KJUR.jws.JWS.sign("RS256", sHeader, sPayload, prvKey);
        console.log(sJWT);

/*
        var s = document.getElementById('jwt');
        s.innerHTML = sJWT;
        var site = document.getElementById('site');
        site.innerHTML = siteNumber;
*/

        window.LPJsMethodName = function (callback) {
            console.log("TEST");
            callback(sJWT);
        };
    }

}




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

    let $copyVisitorIdBtn = $('#copyVisitorIdBtn');
    $copyVisitorIdBtn.on( "click", function() {
        copyToClipboard('visitorId');
    });

    bindLpEvents();




};




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


$(function() {
    console.log( "Routing begin" );
    // routing is for the top right 'banking' entry point
    // parkinglot is for the top left 'parking lot' entry point. This is a shortcut to go directly to the parking lot bot

    //lpTag.section = [ "routing", "parkinglot" ];   // playground tests

    //lpTag.section = [ "vzqaparkinglot" ];   // test for verizon - QA - parking lot
    // lpTag.section = [ "l1:wireline", "l2:home", "l3:internet", "l4:acp" ];   // playground tests
    lpTag.section = [ "testPLB" ];   // test for parking lot bot on Afiniti Alpha site



    //TODO  do this on lpTag --- on ready or the other one
    // detectBrowserMain();

    main();
});

