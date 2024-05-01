/**
 *
 * TEMPLATE FOR A TEST PAGE
 *
 */
'use strict';

import * as lpTagUtil from "../livepersonScripts/lpTagUtil.js";
import * as lpEvents  from "../livepersonScripts/lpEvents.js";
import * as lpInfo    from "../livepersonScripts/lpInfoSnippet.js";



const buildPageHtml = function () {

    document.getElementById("mainPanelTopLeft").innerHTML +=
    `
        <div class="defaultSection p-2">
        <span class="font-size-small">
            <div>
                <label>visitor Id:</label>
                <div id="visitorId" class="display-inline"></div>
                <div id="copyVisitorIdBtn"
                     class="display-inline btn btn-secondary margin-left-10px float-end display-none">Copy</div>
            </div>
            <div class="margin-top-20px">
                <label>agent Uuid:</label>
                <div id="agentId" class="display-inline margin-left-10px"></div>
            </div>
            <div>
                <label>agent name:</label>
                <div id="agentName" class="display-inline margin-left-10px"></div>
            </div>
            <div>
                <label>skill Id:</label>
                <div id="skill" class="display-inline margin-left-10px"></div>
            </div>
            <div>
                <label>campaign Id:</label>
                <div id="campaignId" class="display-inline margin-left-10px"></div>
            </div>
            <div>
                <label>conversation Id:</label>
                <div id="conversationId" class="display-inline margin-left-10px"></div>
            </div>
            <div>
                <label>state:</label>
                <div id="state" class="display-inline margin-left-10px"></div>
            </div>
        </span>
        </div>
        `;

    document.getElementById("mainPanelBottomLeft").innerHTML +=
        `
        <div class="defaultSection p-2">
            <div style="height: 46vh;">
                <textarea id="lpInfoContainer" style="font-size:smaller;"></textarea>
            </div>
        </div>
        <div>
            <div class="display-inline">
                <label for="sectionValues" class="display-inline">Section Values</label>
                <input type="text" id="sectionValues" name="sectionValues" class="display-inline">
            </div>
            <div id="buttonContainer" class="display-inline"></div>
        </div>
        `;
}


const addPageButtons = function () {
    const commonBtnClass = 'btn btn-secondary margin-left-10px display-inline float-end mt-2';
    const $buttonContainer = $("#buttonContainer");
    if( $buttonContainer.length != 0 ) {
        const $clearBtn = $('<div></div>', {
            id: 'clearBtn',
            class: commonBtnClass,
            text: 'clear'
        });
        const $lpInfo = $('<div></div>', {
            id: 'lpInfoBtn',
            class: commonBtnClass,
            text: 'LP info'
        });
        $buttonContainer.append( $lpInfo, $clearBtn );
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


const bindClearBtn = function () {
    const $clearBtn = $('#clearBtn');
    $clearBtn.on('click', () => {
        document.getElementById('visitorId').innerHTML = '';
        document.getElementById('agentId').innerHTML = '';
        document.getElementById('agentName').innerHTML = '';
        document.getElementById('skill').innerHTML = '';
        document.getElementById('campaignId').innerHTML = '';
        document.getElementById('conversationId').innerHTML = '';
        document.getElementById('state').innerHTML = '';
        document.getElementById("lpInfoContainer").value = "";
    })
}


const postLpTagLoad = function (urlParams){
    buildPageHtml();
    addPageButtons();
    loadSectionValues(urlParams);
    lpEvents.bindLpEvents();
    lpEvents.bindCopyVisitorIdBtn();
    lpInfo.lpTagBind_entryPoint();
    lpInfo.bindLpInfoBtn();
    bindClearBtn();
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

