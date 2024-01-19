/**
 * TEST PAGE SETUP FOR AFINITI TEAM
 */
'use strict';

import * as lpTagUtil from "../livepersonScripts/lpTagUtil.js";

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






/*
$('#lpTagRefreshBtn').on( "click", function() {
    refreshLpTag();
});

$(function() {
    console.log( "Test page begin" );
    waitForLpTagPromise.then(
        result => loadSectionValues(),
        error => console.log('LP tag not loading')
    );
});

const loadSectionValues = function (){
    console.log('load sections');
    lpTag.section = [ "lp-plb-test", "human-agent", "firstskill" ];
    // lpTag.section = [ "lp-plb-test", "human-agent", "secondskill" ];
    // lpTag.section = [ "lp-plb-test", "human-agent", "skill0000" ];
    // lpTag.section = [ "lp-plb-test", "human-agent", "skill0001" ];

    setTimeout(() => refreshLpTag(), 2000);
}
*/
