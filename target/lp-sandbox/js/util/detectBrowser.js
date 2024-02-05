/**


*/

const BROWSER = {
    CHROME : 'Chrome'
    , SAFARI : 'Safari'
    , FIREFOX : 'Firefox'
    , MSIE : 'MSIE'
    , EDGE : 'Edge'
    , OPERA : 'Opera'
    , BRAVE : 'Brave'
}

const VENDOR = {
    GOOGLE : 'Google',
    APPLE : 'Apple',
    MOZILLA : 'Mozilla',
    MICROSOFT : 'Microsoft',
    OPERA : 'Opera'
}


let $browserInfo = $('#browserInfo');


let checkMobile = function (){
    if(/Mobi/.test(navigator.userAgent))
        appendInfo( 'Device: Mobile' );
    else
        appendInfo( 'Device: Desktop' );
}


let checkBrowserByUserAgent = function () {
    const userAgent = navigator.userAgent;
    appendInfo( `Browser userAgent: ${userAgent.toString()}` );


    let browser;
    if ( userAgent.indexOf(BROWSER.CHROME) != -1 )
        browser = BROWSER.CHROME;
    else if ( userAgent.indexOf(BROWSER.SAFARI) != -1 )
        browser = BROWSER.SAFARI;
    else if ( userAgent.indexOf(BROWSER.FIREFOX) != -1 )
        browser = BROWSER.FIREFOX;
    else if ( userAgent.indexOf(BROWSER.MSIE) != -1 )
        browser = BROWSER.MSIE;
    else if ( userAgent.indexOf(BROWSER.OPERA) != -1 )
        browser = BROWSER.OPERA;
    else if ( userAgent.indexOf(BROWSER.BRAVE) != -1 )
        browser = BROWSER.BRAVE;
    else
        browser = 'unknown';

    //appendInfo( `Browser (userAgent): ${browser}` );
}


let checkBrowserByVendor = function () {

    let browserVendor;
    const vendor = navigator.vendor;

    if ( vendor.indexOf(VENDOR.GOOGLE) != -1 )
        browserVendor = VENDOR.GOOGLE;
    else if ( vendor.indexOf(VENDOR.APPLE) != -1 )
        browserVendor = VENDOR.APPLE;
    else if ( vendor.indexOf(VENDOR.MOZILLA) != -1 )
        browserVendor = VENDOR.MOZILLA;
    else if ( vendor.indexOf(VENDOR.MICROSOFT) != -1 )
        browserVendor = VENDOR.MICROSOFT;
    else
        browserVendor = 'unknown';

    appendInfo( `Vendor: ${browserVendor}` );
}


let appendInfo = function (info) {
    let $p = $('<p></p>', { text: info });
    $browserInfo.append( $p );
}

export {
    checkMobile,
    checkBrowserByUserAgent,
    checkBrowserByVendor
}

