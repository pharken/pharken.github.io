/**
 *
 * TEMPLATE FOR A TEST PAGE
 *
 */
'use strict';

import * as lpTagUtil from "../livepersonScripts/lpTagUtil.js";
import * as lpEvents  from "../livepersonScripts/lpEvents.js";

const loadSectionValues = function(urlParams){
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



$(function() {
    console.log( "Test page begin" );

    const urlStr = window.location.search;
    const urlParams = new URLSearchParams(urlStr);

    lpTagUtil.waitForLpTagPromise.then(
        result => loadSectionValues(urlParams),
        error => console.log('LP tag not loading')
    );

    document.title = urlParams.get('pagetitle');

    lpEvents.bindCopyVisitorIdBtn();
    lpEvents.bindLpEvents();
});

