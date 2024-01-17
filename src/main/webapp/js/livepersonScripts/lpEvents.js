'use strict';

import * as infoPanel from "../util/infoPanel.js";
import * as common from "../util/common.js";

const bindCopyVisitorIdBtn = function (){
    let $copyVisitorIdBtn = $('#copyVisitorIdBtn');
    $copyVisitorIdBtn.on( "click", function() {
        common.copyToClipboard('visitorId');
    });
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
    // for some reason, there is sometimes an error in the LP tag.js here and so wrap it in try/catch so that
    // checkEventCallbackValueForSpecificData will still execute
    try {
        //infoPanel.displayInfo(`( ${getFormattedTimeStamp()} )  ${eventName}:\n ${JSON.stringify(data, null, 2)}`);
        infoPanel.displayInfo(`${eventName}:\n ${JSON.stringify(data, null, 2)}`);
    }
    catch (e) {}

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


export  {
    bindCopyVisitorIdBtn,
    bindLpEvents
}

