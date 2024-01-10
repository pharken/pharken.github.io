
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
    lpTag.section = [ "playground", "demo", "playground-bot" ];    // test the playground bot
    // lpTag.section = [ "testPLB" ];        // test the parking lot bot on Alpha
    // lpTag.section = [ "demooffhours" ];   // test for the FaaS function: Off Hours Messaging Line
    // lpTag.section = [ "demooffhours", "playground" ];
    // lpTag.section = [ "sandbox", "plain-ordinary", "playground" ];    // 2 engagements: ordinary chat and playground bot



    /*
    Parking Lot Test | Verizon PROD |: 23979466
        Campaign:    vzstore
        Engagement:  LP_Parking_lot_Test
        Entry point: TestParkingLot  |  sections:
    */
    // lpTag.section = [ "vzprodparkinglot" ];



    main();
});
