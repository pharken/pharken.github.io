//***************************************************
//~~~~~~~~~~~Auto open using code~~~~
//
// Created by Yogesh ( 2023-09-07 )
//***************************************************

var lpAutoOpenWindowState = {
    autoOpenTimerRun: 0,
    autoOpenInProgress: true,
    autoOpenMsgWindowClicked: false,
    maxRetry: 4,
    autoOpenTimer: 0,
};

var autoOpenWindow = function autoOpenWindow(currentRetry, engagementId) {
    var retry = currentRetry || 0;

    lpAutoOpenWindowState.autoOpenInProgress = true;
    lpAutoOpenWindowState.autoOpenTimerRun = setTimeout(function delay() {
        try {
            //Try reloading lpTag
            if (retry >= lpAutoOpenWindowState.maxRetry || lpAutoOpenWindowState.autoOpenMsgWindowClicked) return;

            //LP logs
            if (window.location.href.indexOf("?lpDebug") >= 0) {
                console.log('AutoOpenScript: autoMessageWindow Launched!', lpAutoOpenWindowState);
            }

            lpTag.taglets.rendererStub.click(engagementId);
            lpAutoOpenWindowState.autoOpenMsgWindowClicked = true;
            lpAutoOpenWindowState.autoOpenInProgress = false;
        } catch (error) {
            if (retry < lpAutoOpenWindowState.maxRetry) {
                autoOpenWindow(retry + 1);
            }
            if (window.location.href.indexOf("?lpDebug") >= 0) {
                console.log('AutoOpenScript: autoMessageWindow close not available!');
            }
        }
    }, lpAutoOpenWindowState.autoOpenTimer * 1000);
};

function getAOTimer(engName) {
    try {
/*
        var findTimeRegex = /\b\d{0,3}s/g;
        var aoTimer = engName.match(findTimeRegex);
        // If no regex match, return 0
        if (aoTimer.length === 0) return 0;
        var time = aoTimer[0].replace('s', '');
*/
        const pattern = /_(\d+)s/g;
        let match, time;
        while ((match = pattern.exec(engName)) !== null) {
            time = match[1];
            console.log(time);
        }
        return parseInt(time);
    }
    catch (e) {
        console.log(e)
        //Default AO fallback timer
        return 30;
    }
}

function livePersonAutoOpenHandler() {
    //LP Event binding
    if (window.lpTag && window.lpTag.events && window.lpTag.events.bind) {
        try {
            window.lpTag.events.bind("LP_OFFERS", "OFFER_IMPRESSION", (data) => {
                let engagementName = data.engagementName;
                let engagementId = data.engagementId;

                //LP logs
                if (window.location.href.indexOf("?lpDebug") >= 0) {
                    console.log("AutoOpenScript: ",data);
                }

                if (engagementName.toLowerCase().includes('tol')) {
                    lpAutoOpenWindowState.autoOpenTimer = getAOTimer(engagementName);
                    autoOpenWindow(0, engagementId);
                }
            });
        } catch (err) {
            if (window.location.href.indexOf("?lpDebug") >= 0) {
                console.log(err)
                console.log("AutoOpenScript: Error occured in invoking lpTag");
            }
        }
    }
}

livePersonAutoOpenHandler();
