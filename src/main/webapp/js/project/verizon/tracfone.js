/*
    Verizon Tracfone
*/

let engagementId = null;

let main = function (){
    let $brands = $('.brand');
    for ( let $brand of $brands) {
        console.log( 'brand: ' + $brand.attributes[1].nodeValue );
    }
    $brands.click( function(event) {
        engagementId = event.target.attributes[1].value;
        setLpTagSections(event.target.attributes[2].value);
        refreshTracfonePage();
    });

    $('#launchTracfoneEngagementBtn').click( launchTracfoneEngagement );
};


let setLpTagSections = function(brand){
    console.log(brand);
    lpTag.section = [ brand ];
};

let refreshTracfonePage = function () {
    lpTag.newPage( document.URL, { section: lpTag.section });
}


let launchTracfoneEngagement = function () {


    //TODO FIX
    //TODO   WHEN YOU SEE THE CONSOLE MESSAGES, YOU'LL SEE WHAT I MEAN
    //          ITS NOT LAUNCHING THE ENGAGEMENT FOR 1 , AND THE GET ALL
    //          ENGAGEMENTS IS RETURNING MANY.


    console.log(`URL: ${document.URL}`);
    let engagements = lpTag.events.hasFired("RENDERER_STUB","AFTER_CREATE_ENGAGEMENT_INSTANCE");

    // remove duplicates
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
        // let engagementId = engagement.data.msg.engagementId;
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

