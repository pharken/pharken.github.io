



const tableColumns = [ { title: 'Site' },{ title: 'Site ID' },{ title: 'Engagement' },{ title: 'Sections' },{ title: 'Desc' } ];
const projectDataset = [
    ["Playground", "49985427", "---", [ "routing", "parkinglot" ], "not sure, various playground demos" ],
    ["VZ-QA", "87604225", "LP1testForParkingLot", [ "vzqaparkinglot" ], "PLB test, campaign: VZ TAG CS" ],
    ["VZ-Prod", "23979466", "LP_Parking_lot_Test", [ "vzprodparkinglot" ], "PLB test, campaign: vzstore" ],
    ["VZ-Prod", "23979466", "LP_Emergency_RSA_Satellite_Test", [ "rsa-bot", "vzprod" ], "Emergency RSA satellite test, campaign: vzstore" ],
    ["VZ-Tracfone", "91614185", "LP_Parking_Lot_Test", [ "vz-tracfone-prod-plb-test" ], "PLB test" ],
    ["VZ-Tracfone", "91614185", "---",   [ "lp-test", "lp-generic" ], "LP generic test" ],
    ["VZ-Alpha", "6841549", "---",   [ "lp-plb-test", "bot-agent" ], "PLB/Afiniti. Bot agent interact with PLB" ],
    ["VZ-Alpha", "50499881", "---",  [ "lp-plb-test", "bot-agent" ], "PLB/Afiniti. Bot agent interact with PLB" ],
    ["VZ-Alpha", "50499881", "firstSkill",  [ "lp-plb-test", "human-agent", "firstskill" ],  "PLB/Afiniti. Human agent interact with PLB" ],
    ["VZ-Alpha", "50499881", "secondSkill", [ "lp-plb-test", "human-agent", "secondskill" ], "PLB/Afiniti. Human agent interact with PLB"],
    ["VZ-Alpha", "50499881", "skill0000",   [ "lp-plb-test", "human-agent", "skill0000" ],   "PLB/Afiniti. Human agent interact with PLB"],
    ["VZ-Alpha", "50499881", "skill0001",   [ "lp-plb-test", "human-agent", "skill0001" ],   "PLB/Afiniti. Human agent interact with PLB"]
]




let projectMain = function (){

    new DataTable('#projectTable', {
        columns: tableColumns,
        data: projectDataset
    });

    $('#projectTable tbody tr').on("click", function (){
        let rowSiteName = $(this).find("td").eq(0).text();
        console.log(rowSiteName);
    });


    let $copyVisitorIdBtn = $('#copyVisitorIdBtn');
    $copyVisitorIdBtn.on( "click", function() {
        copyToClipboard('visitorId');
    });
};





const copyToClipboard = function (id) {
    const textToCopy = $('#' + id).text();
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            console.log("copied to clipboard: " + textToCopy);
        })
        .catch((error) => {
            console.error("Failed to copy text to clipboard:", error);
        });
}




$(function() {
/*
    let p = location.pathname;
    let pageName = p.substring(p.lastIndexOf('/')+1, p.lastIndexOf('.html'));

    let pageSections = sections[pageName];
    if (pageSections)
        lpTag.section = pageSections;
    else
        lpTag.section = [];

    console.log(`${pageName}: ${JSON.stringify(pageSections)}`);

*/

    // routing is for the top right 'banking' entry point
    // parkinglot is for the top left 'parking lot' entry point. This is a shortcut to go directly to the parking lot bot

    // lpTag.section = [ "routing", "parkinglot" ];   // playground tests

    /*
    Parking Lot Test:  ( 87604225 )  Verizon - QA
        Campaign:    VZ TAG CS
        Engagement:  LP1testForParkingLot
        Entry point: TestParkingLot
    */
    // lpTag.section = [ "vzqaparkinglot" ];

    /*
    Parking Lot Test | Verizon PROD |: 23979466
        Campaign:    vzstore
        Engagement:  LP_Parking_lot_Test
        Entry point: TestParkingLot  |  sections:
    */
    // lpTag.section = [ "vzprodparkinglot" ];


    /*
    Parking Lot Test | Verizon Tracfone |: 91614185
        Engagement:  LP_Parking_Lot_Test
    */
    // lpTag.section = [ "vz-tracfone-prod-plb-test" ];   // parking lot bot test (tracfone)
    // lpTag.section = [ "lp-test", "lp-generic" ];       // LP generic test (tracfone)


    /*
    Playground tests - not sure what this is testing though - probably old stuff
    */
    // lpTag.section = [ "l1:wireline", "l2:home", "l3:internet", "l4:acp" ];   // playground tests

    /*
    Parking Lot test with Afiniti  ( 50499881, 6841549 - same for both sites )
    Bot agent setup to interact with Parking Lot Bot
    */
    // lpTag.section = [ "lp-plb-test", "bot-agent" ];

    /*
    Parking Lot test with Affiniti  ( 50499881 )
    Human agents setup to interact with Parking Lot bot
    */
    // lpTag.section = [ "lp-plb-test", "human-agent", "firstskill" ];
    // lpTag.section = [ "lp-plb-test", "human-agent", "secondskill" ];
    // lpTag.section = [ "lp-plb-test", "human-agent", "skill0000" ];
    // lpTag.section = [ "lp-plb-test", "human-agent", "skill0001" ];

    detectLpTagReady();
    projectMain();
});

