'use strict';

import * as util from "../util/common.js";

let hrefDomain;
const localDomain = "http://localhost:9000/view";
const githubDomain = "https://pharken.github.io/src/main/webapp/view";
const defaultPath = '/project';

const tableColumns = [ { title: 'Site' },{ title: 'Site ID' },{ title: 'Engagement' },{ title: 'Sections' },{ title: 'Desc' },{ title: 'Path' } ];

// HTML file name, account site number, engagement name, lpTag section array, description, directory/location of html file
const projectDataset = [
    ["overlayConfigurator", "49985427", "N/A", [], "Overlay configurator", "/misc" ],
    ["misc", "49985427", "N/A", [], "Naming convention builder, browser detect", "/misc" ],
    ["sandbox", "49985427", "---", [ "routing", "parkinglot" ], "old routing bot. routing and PLB demos", "/misc" ],
    ["sandbox", "49985427", "Sandbox>>Playground Bot", [ "demo", "playground", "playground-bot" ], "Bot with menu of various demos", "/misc" ],
    ["sandbox", "49985427", "Sandbox>>Overlay auto close", [ "playground", "overlay", "autoclose" ], "Overlay auto close ex", "/misc" ],
    ["VZ-QA", "87604225", "LP1testForParkingLot", [ "vzqaparkinglot" ], "PLB test, campaign: VZ TAG CS", "" ],
    ["VZ-Prod", "23979466", "LP_Parking_lot_Test", [ "vzprodparkinglot" ], "<span class='fa fa-lg fa-warning isOff'></span> PLB test, campaign: vzstore", "" ],
    ["VZ-Prod", "23979466", "LP_Emergency_RSA_Satellite_Test", [ "rsa-bot", "vzprod" ], "<span class='fa fa-lg fa-warning isOff'></span> Emergency RSA satellite test, campaign: vzstore", "" ],
    ["TracfoneDemo", "91614185", "---", [], "<span class='fa fa-lg fa-warning isBlue'></span> Tracfone demo page - Entry Points not working", "/project/tracfone"],
    ["VZ-Tracfone", "91614185", "LP_Parking_Lot_Test", [ "vz-tracfone-prod-plb-test" ], "PLB test", ""],
    ["VZ-Tracfone", "91614185", "---",   [ "lp-test", "lp-generic" ], "LP generic test", ""],
    ["VZ-Alpha-2", "6841549", "---",   [ "lp-plb-test", "bot-agent" ], "PLB/Afiniti. Bot agent interact with PLB", "" ],
    ["VZ-fast",  "88102062", "---",  [ "l2:business", "l3:shop", "l4:uc", "l5:contact-us", "source:digquote-d2d" ], "Old, not sure", "/project/customer" ],
    ["VZ-Alpha", "50499881", "---",  [ "lp-plb-test", "bot-agent" ], "PLB/Afiniti. Bot agent interact with PLB", "" ],
    ["VZ-Alpha", "50499881", "firstSkill",  [ "lp-plb-test", "human-agent", "firstskill" ],  "PLB/Afiniti. Human agent interact with PLB", "" ],
    ["VZ-Alpha", "50499881", "secondSkill", [ "lp-plb-test", "human-agent", "secondskill" ], "PLB/Afiniti. Human agent interact with PLB", "" ],
    ["VZ-Alpha", "50499881", "skill0000",   [ "lp-plb-test", "human-agent", "skill0000" ],   "PLB/Afiniti. Human agent interact with PLB", "" ],
    ["VZ-Alpha", "50499881", "skill0001",   [ "lp-plb-test", "human-agent", "skill0001" ],   "PLB/Afiniti. Human agent interact with PLB", "" ],
    ["TestPage-Alpha", "50499881", "firstSkill", [ "lp-plb-test", "human-agent", "firstskill" ], "Test page setup for the Afiniti team", "/misc" ],
    ["GoldmanSachs_QA", "36416044", "N/A", [ "lptest" ], "Test page for the Key Phrase Observer controller bot", "/project/customer" ]
]

const tableEventFired = function (theEvent) {
    if ( theEvent === 'Search' )
        bindDomainWarningIcon();
}

const initDataTable = () => {
    let projectTable = new DataTable('#projectTable', {
        columns: tableColumns,
        data: projectDataset,
        columnDefs: [
            {
                data: null,
                defaultContent: '<button class="btn btn-secondary" type = "button"><span class="fa fa-lg fa-link"></span></button>',
                targets: -1
            }
        ]
    })
        .on('order.dt', () => tableEventFired('Order'))
        .on('search.dt', () => tableEventFired('Search'))
        .on('page.dt', () => tableEventFired('Page'))
        .on( 'draw', bindDomainWarningIcon );       // table rendered

    /*
        // table row click
        $('#projectTable tbody tr').on("click", function (){
            let rowSiteName = $(this).find("td").eq(0).text();
            console.log(rowSiteName);
        });
    */

    // bind table row button click
    projectTable.on('click', 'button', function (e) {
        let data = projectTable.row(e.target.closest('tr')).data();

        let hrefParams = '';
        let sectionValues = data[3];
        sectionValues.forEach( (param,i) => hrefParams+= `sect${i}=${param}&` );
        // hrefParams = hrefParams.slice(0, -1);    // remove last &
        hrefParams += `pagetitle=${data[0]}`;

        let urlPath = data[5];
        if (!urlPath) urlPath = defaultPath;

        let href = `${hrefDomain}${urlPath}/${data[0]}.html?${hrefParams}`;
        window.location=href;
    });
}

const bindDomainSelectorSlider = () => {
    let $domainSelector = $('#domainSelector');
    $domainSelector.on('click', () => {
        if ($domainSelector.hasClass('isOn')) {
            $domainSelector.removeClass('isOn');
            $domainSelector.addClass('isOff fa-rotate-180');
            hrefDomain = localDomain;
        }
        else {
            $domainSelector.removeClass('isOff fa-rotate-180');
            $domainSelector.addClass('isOn');
            hrefDomain = githubDomain;
        }
    });
}


const bindDomainWarningIcon = () => {
    let $domainWarningIcon = $('.fa-warning.isOff');
    $domainWarningIcon.off();
    $domainWarningIcon.on('click', () => {
        alert('lpTag is not white listed for localhost');
    });
}


$(function() {
    hrefDomain = localDomain;
    initDataTable();
    bindDomainSelectorSlider();
    bindDomainWarningIcon();
});

