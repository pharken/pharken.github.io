/*

    POC to read and update a google smartsheet

    TODO:  so far,  i have done no work whatsover with this
            This existing code was take from chatGDP



*/
const SmartsheetClient = require('smartsheet');

const smartsheet = new SmartsheetClient({
    accessToken: 'YOUR_ACCESS_TOKEN_HERE'
});

// Get a sheet by ID
smartsheet.sheets.getSheet({ id: 'SHEET_ID_HERE' })
    .then(sheet => {

        // Do something with the sheet data

        console.log(sheet);

        // Update a cell value
        const cellToUpdate = sheet.rows[0].cells[0];
        cellToUpdate.value = 'New Value';

        // Update the cell using the Smartsheet API
        return smartsheet.sheets.updateRow({
            id: sheet.id,
            body: {
                id: cellToUpdate.rowId,
                cells: [ cellToUpdate ]
            }
        });
    })
    .then(updatedRow => {
        console.log('Row updated:', updatedRow);
    })
    .catch(error => {
        console.error(error);
    });


