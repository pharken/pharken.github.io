
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
    /*
        Parking Lot test with Affiniti  ( 50499881 )
        Human agents setup to interact with Parking Lot bot
    */
    console.log('load sections');
    lpTag.section = [ "lp-plb-test", "human-agent", "firstskill" ];
    // lpTag.section = [ "lp-plb-test", "human-agent", "secondskill" ];
    // lpTag.section = [ "lp-plb-test", "human-agent", "skill0000" ];
    // lpTag.section = [ "lp-plb-test", "human-agent", "skill0001" ];

    setTimeout(() => refreshLpTag(), 2000);
}
