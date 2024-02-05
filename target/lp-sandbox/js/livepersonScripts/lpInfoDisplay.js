/*

    This is a script that can be added as a bookmark with the following code (which isnt quite working yet)
    However, it works great as a Chrome dev tools snippet
    
    
    This script will return tons of info about the lp instance
    
    
    
    (function () {
    let bookmarklet = document.createElement('script'),
        url = location.protocol + '//donmanguno.github.io/test-site/js/bookmarklets/lpinfo.js?ts=%27+new Date().getTime();' +
            'bookmarklet.setAttribute(%27src%27,url);' +
            'document.body.appendChild(bookmarklet);}());
    
    %27  -  this is an encoded apostrophe
*/


function _getLatest(array, datum) {
    let event = undefined;
    if (datum) {
        for (let i = array.length-1; i>=0; i--) {
            if (array[i].data && array[i].data[datum]) {
                event = array[i];
                break;
            }
        }
    } else event = array[array.length-1]

    if (event && event.data) return datum ? event.data[datum] : event.data;
    else return undefined;
}


function _findRenderEvent(renderEvents, engagementId) {
    return renderEvents.find(function(ev) {
        return (ev && ev.data && ev.data.conf && ev.data.conf.id === engagementId);
    });
}


function _extractEngDetails(renderEvent) {
    let details = null;
    let eng = renderEvent.data && renderEvent.data.eng;
    if (eng && eng.conf) {
        details = {
            campaignId: eng.conf.campaignId,
            engagementId: eng.conf.id,
            engagementName: eng.conf.name,
            skillId: eng.conf.skillId,
            skillName: eng.conf.skillName,
            container: eng.mainContainer,
            windowId: eng.conf.windowId
        }
    }
    return details;
}


const getLpInfo = function () {
    try {
        let allEvents = lpTag.events.hasFired("*", "*");
        let convEvents = lpTag.events.hasFired("lpUnifiedWindow", "conversationInfo");
        let windowStateEvents = lpTag.events.hasFired("lpUnifiedWindow", "state");
        let renderEvents = lpTag.events.hasFired("RENDERER_STUB", "AFTER_CREATE_ENGAGEMENT_INSTANCE");
        let engagementClicks = lpTag.events.hasFired("LP_OFFERS", "OFFER_CLICK");
        let eventMap = allEvents.map(e => e.appName + '_' + e.eventName);
        let startPageIndex = eventMap.lastIndexOf("lp_monitoringSDKSP_SENT")
        let eventsAfterSP = allEvents.slice(startPageIndex)
        let engagementsAfterSP = eventsAfterSP.filter(function (e) {
            return e.appName === "RENDERER_STUB" && e.eventName === "AFTER_CREATE_ENGAGEMENT_INSTANCE"
        })
        let lastDisplayedEngagements = engagementsAfterSP.map(_extractEngDetails) || [];
        let displayedEngagements = renderEvents.map(_extractEngDetails) || [];
        let latestEngagementClick = _getLatest(engagementClicks) || {};
        let clickedEngagementRender = _findRenderEvent(renderEvents, latestEngagementClick.engagementId) || {};
        let clickedEngagement = _extractEngDetails(clickedEngagementRender)
        let lpVidCookie = document.cookie.split("; ").find(function (row) {
            return row.startsWith("LPVID");
        });
        let lpSidCookie = document.cookie.split("; ").find(function (row) {
            return row.startsWith("LPSID-".concat(lpTag.site));
        });
        let lpVid = lpVidCookie ? lpVidCookie.split("=")[1] : undefined;
        let lpSid = lpSidCookie ? lpSidCookie.split("=")[1] : undefined;
        let ceVid = _getLatest(convEvents, "visitorId");
        let pid = lpVid !== ceVid ? ceVid : undefined;
        let lpInfoObj = {
            clickedEngagement:        clickedEngagement,
            latestSkillId:            _getLatest(convEvents, "skill"),
            latestAgentId:            _getLatest(convEvents, "agentId"),
            latestConvId:             _getLatest(convEvents, "conversationId"),
            latestAgentName:          _getLatest(convEvents, "agentName"),
            latestWindowState:        _getLatest(windowStateEvents, "state"),
            displayedEngagements:     displayedEngagements,
            lastDisplayedEngagements: lastDisplayedEngagements,
            lpSid:                    lpSid,
            lpVid:                    lpVid,
            pid:                      pid,
            siteId:                   lpTag.site,
            sections:                 lpTag.section
        };
        // displayInfo( JSON.stringify( lpInfoObj, null, 2) );
        let str = JSON.stringify(lpInfoObj, null, 2); // spacing level = 2
        displayInfo( str );

        /*
                displayInfo({
                    clickedEngagement:        clickedEngagement,
                    latestSkillId:            _getLatest(convEvents, "skill"),
                    latestAgentId:            _getLatest(convEvents, "agentId"),
                    latestConvId:             _getLatest(convEvents, "conversationId"),
                    latestAgentName:          _getLatest(convEvents, "agentName"),
                    latestWindowState:        _getLatest(windowStateEvents, "state"),
                    displayedEngagements:     displayedEngagements,
                    lastDisplayedEngagements: lastDisplayedEngagements,
                    lpSid:                    lpSid,
                    lpVid:                    lpVid,
                    pid:                      pid,
                    siteId:                   lpTag.site,
                    sections:                 lpTag.section
                });
        */

        displayInfo(`URL: ${document.URL}`);

        let engagementNames = lpTag.events.hasFired("RENDERER_STUB", "AFTER_CREATE_ENGAGEMENT_INSTANCE");
        // remove duplicates
        displayInfo(`Engagement name count (including duplicates): ${engagementNames.length}`)
        let engagementNameSet = new Set();
        engagementNames.forEach(en => {
            let eName = en.data.eng.conf.name;
            if (!engagementNameSet.has(eName)) {
                engagementNameSet.add(eName);
                displayInfo(`\u2003\u2192\u2003 ${eName}`);
            }
        });
        displayInfo(`Sections: ${lpTag.section}`);


        // let allEvents = lpTag.events.hasFired("*","*");
        let hasOnReady = allEvents.find(e => {
            return e.eventName === "ON_READY"
        });
        if (hasOnReady)
            displayInfo('=========== Ready');
        else
            displayInfo('not ready');


    } catch (e) {
        console.error(e)
    }
}

export {
    getLpInfo
}