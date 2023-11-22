// ✅✅✅
// ❌❌❌

let selectedBrand = null;


const detectLpTagReady = function (){
    if ( window.lpTag && window.lpTag.events && window.lpTag.events.bind ) {
        isLpTagReady = true;
        let $lpLoadSuccessMsg = $('<p></p>', {
            text: 'LP loaded',
            class: 'elementToFadeInAndOut'
        });
        $('#statusMsg').append($lpLoadSuccessMsg);


        lpTag.section = [ "tracfonedemo" ];   // initialize lpTage sections
        //lpTag.section = [ "l1:tracfone", "l2:phone" ];   // TF_sales_phone[DT_S], TF_sales_phone[DT_O_TOL_30s]
        //lpTag.section = [ "l1:tracfone", "l2:accessories" ];   // Tracfone specific proactive engagement
        //lpTag.section = [ "autoopen10s" ];// proactive demo engagement

        hideShowInputField();
        lpTagBind_entryPoint();
    }
    else
        setTimeout(detectLpTagReady, 250);
}



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

        let sectionValues = event.target.attributes[1].value;
        selectedBrand = verizonBrand.find( vzbrand => vzbrand.name === sectionValues );

        setLpTagSections(sectionValues);
        //changePageFont( selectedBrand.fontFamily );
        refreshTracfonePage();
    });

    loadEngagementsDropdown();

    $('#launchTracfoneEngagementBtn').click( launchTracfoneEngagement );
    $('#autoOpenBtn').click( livePersonAutoOpenHandler );
    $('#cartSdeBtn').click( pushCartSde );
    checkLpScriptsLoaded();

    let $copyEngagementBtn = $('#copyEngagementBtn');
    $copyEngagementBtn.on( "click", function() {
        copyToClipboard('currentEngagement');
    });

};


let setLpTagSections = function(sectionValues){
    console.log(sectionValues);
    lpTag.section = [];
    let sections = sectionValues.split(',');
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
        let $span = $('<span></span>');
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
                break;
            default:
                break;
        }
        $span.text(engmt);

        let $ul = $('#engagementList');
        let $li = $('<li></li>').on('click', function () {
            let selectedEngagement = engagements[engmt];
            lpTag.section = entryPoints[ selectedEngagement ];
            refreshTracfonePage();
            // This works, but I prefer the code below to show it on the bottom of the page
            // let btnTitle = document.getElementById('engagementListDropdown');
            // btnTitle.innerHTML = engmt + ' <span class="caret"></span>';

            let currentEngagement = document.getElementById('currentEngagement');
            currentEngagement.innerHTML = engmt;
            let currentSections = document.getElementById('currentSections');
            currentSections.innerHTML = (lpTag.section).toString();

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
        //TODO document this line
        // the equivalent line is :   let engagementId = selectedBrand.engagementId
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


const pushCartSde = function (){
    lpTag.sdes = lpTag.sdes||[];

    // cart update
    let cartUpdateEx = {
        "type":     "cart",  //MANDATORY
        "total":    11.7,  //TOTAL VALUE OF THE CART AFTER DISCOUNT
        "currency": "USD",  //CURRENCY CODE
        "numItems": 6,  //NUMBER OF ITEMS IN CART
        "products": [{
            "product":     {
                "name":     "prod1",  //PRODUCT NAME
                "category": "category",  //PRODUCT CATEGORY NAME
                "sku":      "sku",  //PRODUCT SKU OR UNIQUE IDENTIFIER
                "price":    7.8  //SINGLE PRODUCT PRICE
            }, "quantity": 1  //NUMBER OF PRODUCTS
        }]
    };

    // viewed product
    let viewProductEx = {
        "type":     "prodView",
        "currency": "USD",
        "products": [{
            "product": {
                "name":     "red high heel shoe",
                "category": "women shoes",
                "sku":      "xyz567",
                "price":    77.8
            }
        }]
    }

    // transaction
    let transactionEx = {
        "type":     "purchase",  //MANDATORY
        "total":    11.7,
        "currency": "USD",
        "orderId":  "DRV1534XC",
        "cart":     {
            "products": [
                {
                    "product":  {
                        "name":     "antivirus pro plan",
                        "category": "software",
                        "sku":      "xyz001",
                        "price":    7.8
                    },
                    "quantity": 3
                },
                {
                    "product":  {
                        "name":     "Mega phone",
                        "category": "device",
                        "sku":      "mgphne",
                        "price":    1000.01
                    },
                    "quantity": 2
                },
            ]
        }
    }
    //SDE PUSH -- instant
    //SDE SEND -- delayed
    lpTag.sdes.send(cartUpdateEx);
    lpTag.sdes.send(transactionEx);
    lpTag.sdes.send(viewProductEx);
}


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
    console.log( "Tracfone begin" );
    detectLpTagReady();
    main();
});
