
const main = function () {
    lpTagBind_entryPoint();
    lpTagBind_engagementWindow();
}


// THIS WORKS
function lpTagBind_entryPoint(){
    console.log("Bind lpTag AFTER_CREATE_ENGAGEMENT_INSTANCE")
    window.lpTag.events.bind(
        "RENDERER_STUB",
        "AFTER_CREATE_ENGAGEMENT_INSTANCE",
        () => {
            var renderEvents = lpTag.events.hasFired("RENDERER_STUB", "AFTER_CREATE_ENGAGEMENT_INSTANCE");
            console.log("RenderEvents:");
            console.table(renderEvents)
        }

    )
    console.log("complete");
};

// THIS DOES NOT WORK
function lpTagBind_engagementWindow(){
    console.log("Bind lpTag OFFER_CLICK")
    window.lpTag.events.bind(
        "LP_OFFERS",
        "OFFER_CLICK",
        () => {
            var renderEvents = lpTag.events.hasFired("LP_OFFERS", "OFFER_CLICK");
            console.log("RenderEvents:");
            console.table(renderEvents)
        }

    )
    console.log("complete");
}




$(function() {
    console.log( "sandbox" );
    // initialize lpTag sections
    // lpTag.section = [ "example01", "example02" ];
    // lpTag.section = [ "playground" ];    // test the playground bot
    // lpTag.section = [ "testPLB" ];       // test the parking lot bot on Alpha
    //lpTag.section = [ "demooffhours" ];   // test for the Off Hours Messaging Line FaaS function
    lpTag.section = [ "demooffhours", "playground" ];

    main();
});
