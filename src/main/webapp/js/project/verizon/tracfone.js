let selectedBrand = null;


// footer color :  f9f6f6
// engagement window shadow:   0 0 16px 2px rgba(0,0,0,0.2)

//  414143


const verizonBrand = [
    {
        name:         "net10",
        engagementId: "4080717838",
        fontFamily:   "Roboto",
        fontSize:     "14px",
        colors: [ {blue: "00AEEF"},{simpleBlack: "231F20"}, {white: "FFFFFF"}, {hover: "F3FCFF"} ]
    }
    ,
    {
        name:         "net10support",
        engagementId: "4144064438",
        fontFamily:   "Roboto",
        fontSize:     "14px",
        colors: [ {blue: "00AEEF"}, {simpleBlack: "231F20"}, {white: "FFFFFF"},{hover: "F3FCFF"} ]
    },
    // missing
    {
        name:         "safelink",
        engagementId: "4080697738",
        fontFamily:   "Arial",
        fontSize:     "",
        colors: [ {"1": "000000"}, {"2": "000000"}, {"3": "000000"} ]
    },
    // missing
    {
        name:         "pageplus",
        engagementId: "4080722538",
        fontFamily:   "Arial",
        fontSize:     "",
        colors: [{"1": "dd1e1e"}, {"2": "000000"}, {"3": "000000"} ]
    },
    {
        name:         "familymobile",
        engagementId: "4080715538",
        fontFamily:   "Bogle regular",
        fontSize:     "14px",
        colors: [ {walmartBlue: "1A75CF"}, {walmartYellow: "F7B512"}, {white: "FFFFFF"} ]
    },
    {
        name:         "simple",
        engagementId: "4080674538",
        fontFamily:   "Montserrat",
        fontSize:     "14px",
        colors: [ {simpleGreen: "93D500"}, {simpleBlack: "231F20"}, {white: "FFFFFF"} ]
    },
    {
        name:         "straighttalk",
        engagementId: "4080561538",
        fontFamily:   "Segoe UI regular",
        fontSize:     "14px",
        colors: [ {green: "BEE81E"}, {white: "FFFFFF"}, {black: "000000"}, {grey: "6C6C6C"} ]
    },
    {
        name:         "tracfone",
        engagementId: "4089582738",
        fontFamily:   "Lato Bold",
        fontSize:     "",
        colors: [ {tracfoneBlue: "273691"}, {tracfoneGreen: "88C65B"}, {lightestGrey: "F6F9FC"}, {lightGrey: "E3E9EF"}, {hoverBlue: "012979"} ]
    },
    // red:  RGB:238,0,0  =  ee0000
    {
        name:         "total",
        engagementId: "4080697138",
        fontFamily:   "Verizon",
        fontSize:     "",
        colors: [ {black: "000000"}, {white: "FFFFFF"}, {red: "RGB:238,0,0"} ]
    },
    {
        name:         "gosmart",
        engagementId: "4127275338",
        fontFamily:   "Istok Web",
        fontSize:     "14px",
        colors: [ {blue: "048FB6"},{darkGray: "414143"}, {white: "FFFFFF"}, {logoGreen: "BDD531"}, {hoverBlue: "048FB6"} ]
    }
]

//  414143




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
    $('#launchTracfoneEngagementBtn').click( launchTracfoneEngagement );
    checkLpScriptsLoaded();
};


let setLpTagSections = function(brand){
    console.log(brand);
    lpTag.section = [ brand ];
};

let changePageFont = function( fontName ){
    let elem = document.getElementsByTagName("body");
    document.getElementsByTagName("body")[0].style = `font-family: ${fontName}`;
};

/**
    Force refresh of lpTag - usually for SPA (single page app) but useful for this poc
*/
let refreshTracfonePage = function () {
    lpTag.newPage( document.URL, { section: lpTag.section });
}


let launchTracfoneEngagement = function () {
    console.log(`URL: ${document.URL}`);
    let engagements = lpTag.events.hasFired("RENDERER_STUB","AFTER_CREATE_ENGAGEMENT_INSTANCE");

    // remove duplicates, then display the engagement name
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
    lpTag.section = [ "tracfone" ];   // initialize lpTage sections
    main();
});
