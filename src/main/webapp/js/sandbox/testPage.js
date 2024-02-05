/**
 * TEST PAGE SETUP FOR AFINITI TEAM
 */
'use strict';

import * as lpTagUtil from "../livepersonScripts/lpTagUtil.js";
import * as url2section from "../util/urlToSectionValues";
import * as browser from "../util/detectBrowser";

const loadSectionValues = (urlParams) =>{
    let newLpTagSections = [];
    const params = urlParams.entries();
    for(const entry of params) {
        if ( entry[0].startsWith('sect') ) {
            console.log(`${entry[0]}: ${entry[1]}`);
            newLpTagSections.push( entry[1] );
        }
    }
    lpTag.section = newLpTagSections;
    setTimeout(() => lpTagUtil.refreshLpTag(), 2000);
}


const postLpTagLoad = function (urlParams){
    loadSectionValues(urlParams);
}


$(function() {
    console.log( "Test page begin" );
    const urlStr = window.location.search;
    const urlParams = new URLSearchParams(urlStr);

    lpTagUtil.waitForLpTagPromise.then(
        result => postLpTagLoad(urlParams),
        error => console.log('LP tag not loading')
    );
    document.title = urlParams.get('pagetitle');
});
