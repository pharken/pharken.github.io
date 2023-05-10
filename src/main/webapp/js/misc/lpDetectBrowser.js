/*jshint scripturl:true*/
/*jshint esversion: 6*/

var minMacOSVersion = [10, 13, 4];
var minIOSVersion = [11, 3];
var supportedSystemRegEx = /\((Macintosh|iPhone|iPad|(?:iPod(?:\x20touch)?));.*\x20((?:\d[_.]{0,1})+)[^)]*\)\x20/i;
var urlFlag = false;
var clickEventSet = false;

if (lpTag.section == "") { lpTag.section = []; }


// Check for device compatibility


function CheckChannelSupport() {
    var userAgent = (window.navigator && window.navigator.userAgent) || '';
    var sysInfo = extractSystemInfo(userAgent);
    // check platform version
    if (!!sysInfo) {
        if ('MACINTOSH' === sysInfo.type.toUpperCase()) {
            // MacOS
            // console.log('Detected MacOS version: ', sysInfo.version);
            if (checkVersion(sysInfo.version, minMacOSVersion)) {
                return "abc";
            } else {
                return "web";
            }
        } else if (['IPHONE', 'IPAD', 'IPOD', 'IPOD TOUCH'].includes(sysInfo.type.toUpperCase())) {
            // iOS
            // console.log('Detected iOS version: ', sysInfo.version);
            if (checkVersion(sysInfo.version, minIOSVersion)) {
                return "abc";
            } else {
                return "web";
            }
        }
    } else if (userAgent.indexOf('Android')>=0){
        return "gbm";
    } else {
        // Unknown platform
        // console.log('Unknown platform!');
        return "web";
    }
}


function extractSystemInfo(e) {
    var t = supportedSystemRegEx.exec(e);
    // console.log('System info extracted from UA: ', t);
    return t ?
        {
            type: t[1],
            version: (function (e) {
                var t = [],
                    n = /(\d+)/g,
                    r = null;
                do {
                    if ((r = n.exec(e))) {
                        var i = parseInt(r[0], 10);
                        if ('number' != typeof i) return null;
                        t.push(i);
                    }
                } while (r);
                return t;
            })(t[2])
        } :
        null;
}


function checkVersion(targetVersion, minVersion) {
    if (void 0 === targetVersion) return !1;
    for (var n = 0, r = minVersion.length; n < r; n++) {
        var i = minVersion[n],
            o = parseInt(targetVersion[n], 10);
        if ((isNaN(o) && (o = 0), o > i)) return !0;
        if (o < i) return !1;
    }
    return !0;
}


// Parse through script url params and associated actions
function setCampaignId(channel) {

    // If SDE and Section values were not passed, use default
    var campaignId = "";
    var mrktInfo = lpTag.sdes.get("mrktInfo");
    if (mrktInfo && mrktInfo[0].info.campaignId) {campaignId="set";}

    if (campaignId==""){
        if (channel=="abc") {
            sde = '{"type": "mrktInfo", "info": { "campaignId": "abc"}}';
        } else if (channel=="gbm") {
            sde = '{"type": "mrktInfo", "info": { "campaignId": "gbm"}}';
        } else {
            sde = '{"type": "mrktInfo", "info": { "campaignId": "web"}}';
        }
        lpTag.sdes.push(JSON.parse(sde));
        // console.log(sde);
    }

}


// Add Apple script to load engagement
function addChannelScript(src) {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = src;
    document.getElementsByTagName("head")[0].append(s);
}


// Append url to customer status SDE
function addUrl(abcLink) {
    var anchorParts = abcLink.href.split("?");
    if (!anchorParts) throw "Unable to break apart anchor tag";
    // console.log(anchorParts[0]);
    // console.log(anchorParts[1]);
    var anchorParams = anchorParts[1].split("&");
    if (!anchorParams) throw "Unable to get anchor parameters";
    // console.log(anchorParams[0]);
    // console.log(anchorParams[1]);
    var currentUrl = window.location.href;
    for (idx = 0; idx < anchorParams.length; ++idx) {
        if (anchorParams[idx].includes('biz-group-id')) {
            anchorParams[idx] += "%20|%20" + encodeURIComponent(currentUrl);
        }
    }
    var newABCHref = anchorParts[0];
    for (idx = 0; idx < anchorParams.length; ++idx) {
        newABCHref += ((idx == 0) ? "?" : "&") + anchorParams[idx];
    }
    // console.log(newABCHref);
    abcLink.href = newABCHref;
}


// Loop until script and div loaded
var loopCount = 0;
var abcLink = "";
function setUpEngagements() {
    setTimeout(function () {
        abcLoaded = typeof (AppleBusinessChat) !== "undefined";
        if (abcLoaded) {
            subLoaded = typeof (AppleBusinessChat.setUpBanners) !== "undefined";
        } else {
            subLoaded = false;
        }
        engLoaded = document.querySelector('[class^=apple-business-chat] iframe') !== null;
        if (loopCount < 15) {
            if (!abcLoaded || !subLoaded) {
                console.log("abc function/method not defined");
                loopCount++;
                setUpEngagements();
            } else if (abcLoaded && subLoaded && !engLoaded) {
                console.log('abc function/method defined');
                AppleBusinessChat.setUpBanners(); // IS THIS THE RIGHT THING TO CALL?
                loopCount++;
                setUpEngagements();
            } else if (abcLoaded && subLoaded && engLoaded) {
                console.log('abc engagement loaded');
                setTimeout(function () {
                    if (!clickEventSet) {
                        abcIframe = document.querySelector('[id^="LPMcontainer"] iframe');
                        abcLink = abcIframe.contentDocument.querySelector('a');
                        if (urlFlag) { addUrl(abcLink); }
                        btn = abcLink.href;
                        console.log(abcLink);
                        abcLink.removeAttribute('href');
                        lpBtn = abcIframe.contentDocument.querySelector('div[class^=businesschat-button__container]');
                        lpBtn.setAttribute('data-LP-event', 'click');
                        lpBtn.setAttribute('target', '_blank');
                        lpBtn.setAttribute('onclick', "window.open('" + btn + "','_blank')");
                        console.log('click event set');
                        clickEventSet = true;
                    }
                    document.querySelector('[id^="LPMcontainer"]').style.display = "block";
                }, 500);
            }
        } else {
            // console.log('Timed out');
        }
    }, 500);
}


var channel = CheckChannelSupport();
var runNewPage = false;
// console.log("Channel select: " + channel);
setCampaignId(channel);
if (channel=="abc") {
    addChannelScript("https://static.cdn-apple.com/businesschat/start-chat-button/2.0.0/index.js");
} else if (channel=="gbm") {
    addChannelScript("https://businessmessages.google.com/widget/v2/js");
}

// Call newPage if URL param exists
if (runNewPage) {
    setTimeout(function(){
        var sdes = lpTag.sdes.get();
        lpTag.newPage(document.URL, {
            section: lpTag.section,
            sdes: sdes
        });
        console.log('newpage complete');
    },500);
}
