'use strict';

import * as url2section from "../util/urlToSectionValues.js";
import * as browser from "../util/detectBrowser.js";

$(function() {
    url2section.generateLPNamingConventionsInit();
    browser.checkMobile();
    browser.checkBrowserByUserAgent();
    browser.checkBrowserByVendor();
});