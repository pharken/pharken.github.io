/*


*/

let main = function (){
    let $brands = $('.brand');
    for ( let $brand of $brands) {
        console.log( 'brand: ' + $brand.attributes[1].nodeValue );
    }
    $brands.click( function(event) {
        setLpTagSections(event.target.attributes[1].value);
    });
};


let loadApiClient = function () {

}


/**
     Load the Sheets API client
 */
let loadSpreadsheet = function(){
    console.log('Load spreadsheet request');

    // Load the API client library
    gapi.load('client', function() {

        // Initialize the API client with your API key and the sheet API
        gapi.client.init({
            apiKey: 'YOUR_API_KEY',
            discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
        })
            .then(function() {

                // Use the Sheets API to get the value of cell A1 in the first sheet of the spreadsheet
                gapi.client.sheets.spreadsheets.values.get({
                    spreadsheetId: 'YOUR_SPREADSHEET_ID',
                    range: 'Sheet1!A1:A1',
                })
                    .then(function(response) {
                        var value = response.result.values[0][0];
                        console.log('The value of cell A1 is: ' + value);
                    });
            });
    });
};



/**
 Use the Sheets API to update the value of cell A1 in the first sheet of the spreadsheet
 */
let updateSpreadsheet = function () {

    gapi.client.sheets.spreadsheets.values.update({
        spreadsheetId: 'YOUR_SPREADSHEET_ID',
        range: 'Sheet1!A1:A1',
        valueInputOption: 'RAW',
        resource: {
            values: [[newValue]],
        },
    }).then(function(response) {
        console.log('Cell A1 has been updated.');
    });

}




$(function() {
    console.log( "Tracfone begin" );
    lpTag.section = [ "tracfone" ];   // initialize lpTage sections
    main();
});
