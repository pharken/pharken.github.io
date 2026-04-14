/**
 *
 */
'use strict';

import * as lpTagUtil from "../../livepersonScripts/lpTagUtil.js";
import * as proactiveEngagements from "../../livepersonScripts/proactiveEngagement.js";
import * as common from "../../../util/common.js";
import * as api from "../../../api/cc-ui-api.js";
import {getBearerToken, getCampaign, getCampaigns} from "../../../api/cc-ui-api.js";



let selectedBrand = null;

const postLpTagLoad = function (urlParams){

    loadSectionValues(urlParams);


    //TODO  getCampaigns
    //TODO  iterate campaigns for engagements
    //      for each campaign, add a 'title' division in the list.
    //      for each engagement
    //          load entry point
    //          get section values
    //          load engagement in the engagement list.  Add css class to make clickable


    loadEngagementsDropdown();
    $('#launchTracfoneEngagementBtn').click( launchTracfoneEngagement );
    $('#autoOpenBtn').click( proactiveEngagements.livePersonAutoOpenHandler() );

    let $copyEngagementBtn = $('#copyEngagementBtn');
    $copyEngagementBtn.on( "click", function() {
        common.copyToClipboard('currentEngagement')
    });
};


/*
    Force refresh of lpTag - usually for SPA (single page app) but useful for this poc
*/
const refreshTracfonePage = function () {
    lpTag.newPage( document.URL, { section: lpTag.section });
}


const loadEngagementsDropdown = async function (){

    let loginResp = await api.getBearerToken()
    let bearerToken = loginResp.data.bearer;

    let campaignsResp = await api.getCampaigns();
    let campaigns = campaignsResp.data;


    for ( const campaign of campaigns ) {

        // let sampleCampaign = campaigns[0].id;
        let campaignResp = await api.getCampaign( campaign.id );
        let engagementName = campaignResp.data.name;

        let engagementIds = campaignResp.data.engagementIds;
        for ( const engagementId of engagementIds ) {

            //TODO      load entry point
            //          get section values
            //          load engagement in the engagement list.  Add css class to make clickable

        }

    }



    for (const engmt in tracfoneData.engagements) {
        //console.log(engmt, engagements[engmt]);

        let $a = $('<a className:"dropdown-item"></a>');
        // let $span = $('<span className="d-inline-block bg-primary rounded-circle p-1"></span>');
        let $span = $('<span></span>');
        let lob = engmt.substring(0, 2)
        switch(lob) {
            case 'TF':
                $span = $('<span className="d-inline-block bg-primary rounded-circle p-1"></span>');
                break;
            case 'GS':
                $span = $('<span className="d-inline-block bg-secondary rounded-circle p-1"></span>');
                break;
            case 'NT':
                $span = $('<span className="d-inline-block bg-warning rounded-circle p-1"></span>');
                break;
            default:
                break;
        }
        $span.text(engmt);

        let $ul = $('#engagementList');
        let $li = $('<li></li>').on('click', function () {
            let selectedEngagement = tracfoneData.engagements[engmt];
            lpTag.section = tracfoneData.entryPoints[ selectedEngagement ];
            refreshTracfonePage();
            // This works, but I prefer the code below to show it on the bottom of the page
            // let btnTitle = document.getElementById('engagementListDropdown');
            // btnTitle.innerHTML = engmt + ' <span class="caret"></span>';

            let currentEngagement = document.getElementById('currentEngagement');
            currentEngagement.innerHTML = engmt;
            let currentSections = document.getElementById('currentSections');
            currentSections.innerHTML = (lpTag.section).toString();

        });
        $ul.append($li.append($a.append($span)));
    }
}


const launchTracfoneEngagement = function () {
    console.log(`URL: ${document.URL}`);
    let engagements = lpTag.events.hasFired("RENDERER_STUB","AFTER_CREATE_ENGAGEMENT_INSTANCE");

    // remove duplicates, then log the engagement name to the console
    console.log(`Engagement name count (including duplicates): ${engagements.length}`)
    let engagementNameSet = new Set();
    engagements.forEach(en => {
        let eName = en.data.eng.conf.name;
        if ( !engagementNameSet.has(eName) ) {
            engagementNameSet.add( eName );
            console.log( eName );
        }
    });

    if (engagements && engagements.length > 0) {
        let engagement = engagements[0];
        console.log(`Engagement name: ${engagement.data.eng.conf.name}`);
        let {engagementId} = selectedBrand;
        if (engagementId) {

            let engagementInfo = lpTag.taglets.rendererStub.getEngagementInfo(engagementId);
            console.log( `Engagement info: ${JSON.stringify( engagementInfo )}` );

            let engagementState = lpTag.taglets.rendererStub.getEngagementState(engagementId);
            console.log( `Engagement state: ${JSON.stringify(engagementState)}` );

            lpTag.taglets.rendererStub.click(engagementId);
        }
        else
            console.log('Cant find engagementId');
    }
}


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
        result => postLpTagLoad(urlParams),
        error => console.log('LP tag not loading')
    );
    document.title = urlParams.get('pagetitle');
});








