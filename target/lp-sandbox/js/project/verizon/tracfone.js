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
    }
    else
        setTimeout(detectLpTagReady, 250);
}


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

    // loadEngagementsDropdown();
    bindEngagementComboDropdown();
    loadEngagementsDatalist();
    //bindEngagementInputTextBox();

    $('#launchTracfoneEngagementBtn').click( launchTracfoneEngagement );
    $('#autoOpenBtn').click( livePersonAutoOpenHandler );
    $('#cartSdeBtn').click( pushCartSde );
    checkLpScriptsLoaded();

    bindTestBtn();

    let $copyEngagementBtn = $('#copyEngagementBtn');
    $copyEngagementBtn.on( "click", function() {
        copyToClipboard('currentEngagement');
    });

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
This works temporarily and then the credentials expire ..... so it's a no go
let doit = function () {

    var settings = {
        "url": "https://va.ac.liveperson.net/api/account/91614185/configuration/le-users/skills",
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json",
            "Authorization": "OAuth oauth_consumer_key=\"5c746408d1e2498ea7c0d6bacf4fd823\",oauth_token=\"aa65ffe517324087a0c2316b16f29726\",oauth_signature_method=\"HMAC-SHA1\",oauth_timestamp=\"1695515427\",oauth_nonce=\"VBUwuchMym2\",oauth_version=\"1.0\",oauth_signature=\"5Lw%2Bav7xAOr7wBd080CQti6zitI%3D\"",
            "Cookie": "JSESSIONID=9E68EC2381D2DAA8C8CD525BFC0D30DA"
        },
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}
*/



/*
// OLD working
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
            lpTag.section = entryPoints[ engagements[engmt] ];
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
*/


const bindEngagementComboDropdown = function (){

    $.widget( "custom.combobox", {
        _create: function() {
            this.wrapper = $( "<span>" )
                .addClass( "custom-combobox" )
                .insertAfter( this.element );

            this.element.hide();
            this._createAutocomplete();
            this._createShowAllButton();
        },

        _createAutocomplete: function() {
            var selected = this.element.children( ":selected" ),
                value = selected.val() ? selected.text() : "";

            this.input = $( "<input>" )
                .appendTo( this.wrapper )
                .val( value )
                .attr( "title", "" )
                .addClass( "custom-combobox-input ui-widget ui-widget-content ui-state-default ui-corner-left" )
                .autocomplete({
                    delay: 0,
                    minLength: 0,
                    source: this._source.bind( this )
                });

            this._on( this.input, {
                autocompleteselect: function( event, ui ) {
                    ui.item.option.selected = true;
                    this._trigger( "select", event, {
                        item: ui.item.option
                    });
                },

                autocompletechange: "_removeIfInvalid"
            });
        },

        _createShowAllButton: function() {
            var input = this.input,
                wasOpen = false;

            $('#comboBoxDownArrow').on('click', function() {
                input.trigger( "focus" );
                // Close if already visible
                if ( wasOpen )
                    return;

                // Pass empty string as value to search for, displaying all results
                input.autocomplete( "search", "" );
            });

        },

        _source: function( request, response ) {
            var matcher = new RegExp( $.ui.autocomplete.escapeRegex(request.term), "i" );
            response( this.element.children( "option" ).map(function() {
                var text = $( this ).text();
                if ( this.value && ( !request.term || matcher.test(text) ) )
                    return {
                        label: text,
                        value: text,
                        option: this
                    };
            }) );
        },

        _removeIfInvalid: function( event, ui ) {

            // Selected an item, nothing to do
            if ( ui.item ) {
                return;
            }

            // Search for a match (case-insensitive)
            var value = this.input.val(),
                valueLowerCase = value.toLowerCase(),
                valid = false;
            this.element.children( "option" ).each(function() {
                if ( $( this ).text().toLowerCase() === valueLowerCase ) {
                    this.selected = valid = true;
                    return false;
                }
            });

            // Found a match, nothing to do
            if ( valid ) {
                return;
            }

            // Remove invalid value
            this.element.val( "" );
            this.input.autocomplete( "instance" ).term = "";
        },

        _destroy: function() {
            this.wrapper.remove();
            this.element.show();
        }
    });

    $( "#engagementCombobox" ).combobox();
    $( "#toggle" ).on( "click", function() {
        $( "#engagementCombobox" ).toggle();
    });
}


const loadEngagementsDatalist = function (){

/*
    let $engagementDatalist = $("#engagementDatalist");
    $engagementDatalist.empty();
    for (const engmt in engagements) {
        // let $option = $("<option/>).html(engmt).appendTo("#engagementDatalist");
        let $option = $("<option/>").html(engmt).on('click', ()=> {
            lpTag.section = entryPoints[ engagements[engmt] ];
            refreshTracfonePage();

            let currentEngagement = document.getElementById('currentEngagement');
            currentEngagement.innerHTML = engmt;
            let currentSections = document.getElementById('currentSections');
            currentSections.innerHTML = (lpTag.section).toString();
        });
        $engagementDatalist.append($option);
    }
*/
    let $engagementlist = $("#engagementCombobox");
    $engagementlist.empty();
    for (const engmt in engagements) {

        let $option = $("<option></option>").attr("value", entryPoints[ engagements[engmt] ]).text(engmt);
        $option.on('click', ()=> {
                lpTag.section = entryPoints[ engagements[engmt] ];
                refreshTracfonePage();

                let currentEngagement = document.getElementById('currentEngagement');
                currentEngagement.innerHTML = engmt;
                let currentSections = document.getElementById('currentSections');
                currentSections.innerHTML = (lpTag.section).toString();
            });

        $engagementlist.append($option);
    }
}



const bindTestBtn = function () {
    let $testBtn = $('#testBtn');
    $testBtn.on('click', function (){

        var engagementOptions = {
            "TF eng 1": "l1:home,l2:phones",
            "NT eng 2": "value2",
            "GS spa 3": "value3"
        };

        var $el = $("#engagementCombobox");
        $el.empty(); // remove old options
        $.each(engagementOptions, function(key,value) {
            $el.append($("<option></option>")
                .attr("value", value).text(key));
        });
    })
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

