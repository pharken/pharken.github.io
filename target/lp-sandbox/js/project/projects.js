
let hrefDomain;
const localDomain = "http://localhost:9000/view";
const githubDomain = "https://pharken.github.io/src/main/webapp/view";
const defaultPath = '/project';



const tableColumns = [ { title: 'Site' },{ title: 'Site ID' },{ title: 'Engagement' },{ title: 'Sections' },{ title: 'Desc' },{ title: 'Path' } ];

const projectDataset = [
    ["sandbox", "49985427", "---", [ "routing", "parkinglot" ], "not sure, various playground demos", "/misc" ],
    ["VZ-QA", "87604225", "LP1testForParkingLot", [ "vzqaparkinglot" ], "PLB test, campaign: VZ TAG CS", "" ],
    ["VZ-Prod", "23979466", "LP_Parking_lot_Test", [ "vzprodparkinglot" ], "PLB test, campaign: vzstore", "" ],
    ["VZ-Prod", "23979466", "LP_Emergency_RSA_Satellite_Test", [ "rsa-bot", "vzprod" ], "Emergency RSA satellite test, campaign: vzstore", "" ],
    ["VZ-Tracfone", "91614185", "LP_Parking_Lot_Test", [ "vz-tracfone-prod-plb-test" ], "PLB test", ""],
    ["VZ-Tracfone", "91614185", "---",   [ "lp-test", "lp-generic" ], "LP generic test", ""],
    ["VZ-Alpha-2", "6841549", "---",   [ "lp-plb-test", "bot-agent" ], "PLB/Afiniti. Bot agent interact with PLB", "" ],
    ["VZ-Alpha", "50499881", "---",  [ "lp-plb-test", "bot-agent" ], "PLB/Afiniti. Bot agent interact with PLB", "" ],
    ["VZ-Alpha", "50499881", "firstSkill",  [ "lp-plb-test", "human-agent", "firstskill" ],  "PLB/Afiniti. Human agent interact with PLB", "" ],
    ["VZ-Alpha", "50499881", "secondSkill", [ "lp-plb-test", "human-agent", "secondskill" ], "PLB/Afiniti. Human agent interact with PLB", "" ],
    ["VZ-Alpha", "50499881", "skill0000",   [ "lp-plb-test", "human-agent", "skill0000" ],   "PLB/Afiniti. Human agent interact with PLB", "" ],
    ["VZ-Alpha", "50499881", "skill0001",   [ "lp-plb-test", "human-agent", "skill0001" ],   "PLB/Afiniti. Human agent interact with PLB", "" ]
]


let projectMain = function (){
    hrefDomain = githubDomain;

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
    });

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

    let $copyVisitorIdBtn = $('#copyVisitorIdBtn');
    $copyVisitorIdBtn.on( "click", function() {
        copyToClipboard('visitorId');
    });
};


$(function() {
    projectMain();
});
