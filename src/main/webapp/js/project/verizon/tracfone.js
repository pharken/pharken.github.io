// ✅✅✅
// ❌❌❌


let selectedBrand = null;


let main = function (){
    let $brands = $('.brand');
    for ( let $brand of $brands) {
        console.log( `brand: ${$brand.attributes[1].nodeValue}` );
    }

    $brands.click( function(event) {
        let $thisBrand = $(event.target);

        let $isSelected = $('.isSelected');
        if ($isSelected.length > 0) $isSelected.removeClass('isSelected');
        $thisBrand.addClass('isSelected');

        let brandName = event.target.attributes[1].value;
        selectedBrand = verizonBrand.find( vzbrand => vzbrand.name === brandName );

        setLpTagSections(brandName);
        //changePageFont( selectedBrand.fontFamily );
        refreshTracfonePage();
    });



    loadEngagementsDropdown();



    $('#launchTracfoneEngagementBtn').click( launchTracfoneEngagement );
    checkLpScriptsLoaded();
};


let setLpTagSections = function(brand){
    console.log(brand);
    lpTag.section = [];
    let sections = brand.split(',');
    lpTag.section = [...sections];
};

let changePageFont = function( fontName ){
    let elem = document.getElementsByTagName("body");
    document.getElementsByTagName("body")[0].style = `font-family: ${fontName}`;
};


/*
    Force refresh of lpTag - usually for SPA (single page app) but useful for this poc
*/
let refreshTracfonePage = function () {
    lpTag.newPage( document.URL, { section: lpTag.section });
}

/*

    if (lpTag && lpTag.taglets && lpTag.taglets.rendererStub)
        let clicked = lpTag.taglets.rendererStub.click(ROUTING_ENGAGEMENT_ID);

*/


const loadEngagementsDropdown = function (){


    for (const engmt in engagements) {
        //console.log(engmt, engagements[engmt]);

        let $a = $('<a className:"dropdown-item"></a>');
        // let $span = $('<span className="d-inline-block bg-primary rounded-circle p-1"></span>');
        let $span = null;
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
        }
        $span.text(engmt);

        let $ul = $('#engagementList');
        let $li = $('<li></li>').on('click', function () {
            lpTag.section = entryPoints[ engagements[engmt] ];
            refreshTracfonePage();
            let btnTitle = document.getElementById('engagementListDropdown');
            btnTitle.innerHTML = engmt + ' <span class="caret"></span>';
        });
        $ul.append($li.append($a.append($span)));
    }
}


let launchTracfoneEngagement = function () {
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


$(function() {
    console.log( "Tracfone begin" );
    lpTag.section = [ "tracfonedemo" ];   // initialize lpTage sections
    // lpTag.section = [ "l1:tracfone", "l2:phone" ];   // TF_sales_phone[DT_S], TF_sales_phone[DT_O_TOL_30s]
    //lpTag.section = [ "l1:tracfone", "l2:accessories" ];   // Tracfone specific proactive engagement
    // lpTag.section = [ "autoopen10s" ];// proactive demo engagement
    main();
});
