/**

 Rules for naming convention syntax

 ---Name---------------------Syntax-------------------------------------------Example-------------------------------
 Campaign				LOB-division-language								Tracfone-Care-Spa
 Enagement Name 		<<BASE>>(_language)_entryPointType_behavior1-N		TF_sales_accessories_audio_es_S_AO-30s
 Engagement Window		LobInitials-division(-language)-uniqueIdentifier	TF-sales-es-accessories-all-es
 Entry Point			<<BASE>>(-language)									TF-sales-accessories-audio-es
 Behavior				<<BASE>>(-language)-behaviors1-n					TF-sales-accessories-audio-AO-30s
 skill					LobInitials_division+Language 						TF_SalesSpa

 language only when not the default - english

 */

let textarea = null;
const result = document.getElementById("url2sectionsResultSection");
const SPANISH_IDENTIFIER = 'es';
let lobPrefix = 'TF';
let salesOrCare = 'sales';
let entryPointType = 'sticky';
let includeSubdomain = true;
let includeSpanish = true;
let behaviorAutoOpen = false;
let behaviorTimeOnPage = false;


const init = function () {
    textarea = document.getElementById("url2sectionsTextArea");
    textarea.addEventListener("paste", handlePaste);

    const toSectionValuesBtn = document.getElementById("url2sectionsBtn");
    toSectionValuesBtn.addEventListener("click", convertUrlToSectionValues);

    const toEntryPointsBtn = document.getElementById("url2entryPointsBtn");
    toEntryPointsBtn.addEventListener("click", convertUrlToEntryPoints);

    const toEngagementsBtn = document.getElementById("url2engagementsBtn");
    toEngagementsBtn.addEventListener("click", convertUrlToEngagements);

    const toBehaviorsBtn = document.getElementById("url2behaviorsBtn");
    toEngagementsBtn.addEventListener("click", convertUrlToEngagements);
//TODO
    const toEngagementWindowsBtn = document.getElementById("url2EngagementWindowBtn");
    toEngagementsBtn.addEventListener("click", convertUrlToEngagements);

    const clearBtn = document.getElementById("clearBtn");
    clearBtn.addEventListener("click", clearResults);

    bindLobDropdownBtn();
    bindSaleOrCareDropdownBtn();
    bindEntryPointTypeDropdownBtn();

    $('#includeSubdomainCheckbox').change(function() {
        includeSubdomain = $(this).prop('checked');
    })
    $('#includeSpanishCheckbox').change(function() {
        includeSpanish = $(this).prop('checked');
    })
    $('#behaviorAutoOpen').change(function() {
        behaviorAutoOpen = $(this).prop('checked');
    })
    $('#behaviorTimeOnPage').change(function() {
        behaviorTimeOnPage = $(this).prop('checked');
    })
}


const bindLobDropdownBtn = function (){
    let $lobDropDownBtn = $('#lobDropDownBtn');
    $lobDropDownBtn.html('TF <span class="caret"></span>');
    $('#lobDropDownMenu').find("li a").click( function(){
        let entryPointPrefix = $(this).text();
        $lobDropDownBtn.html(entryPointPrefix + ' <span class="caret"></span>');
        // console.log(`entry point prefix: ${entryPointPrefix}`);
    });
    //$lobDropDownBtn.trigger('click');
}


const bindSaleOrCareDropdownBtn = function (){
    let $salesOrCareBtn = $('#salesOrCareDropdownBtn');
    $salesOrCareBtn.html('Sales <span class="caret"></span>');
    $('#salesOrCareDropdownMenu').find("li a").click( function(){
        salesOrCare = $(this).text();
        $salesOrCareBtn.html(salesOrCare + ' <span class="caret"></span>');
        // console.log(`sales or care: ${salesOrCare}`);
    });
}


const bindEntryPointTypeDropdownBtn = function (){
    let entryPointTypeBtn = $('#entryPointTypeDropdownBtn');
    entryPointTypeBtn.html('sticky <span class="caret"></span>');
    $('#entryPointTypeDropdownMenu').find("li a").click( function(){
        entryPointType = $(this).text();
        entryPointTypeBtn.html(entryPointType + ' <span class="caret"></span>');
        // console.log(`sales or care: ${salesOrCare}`);
    });
}



let handlePaste = function (event) {
    // Prevent the default paste behavior
    event.preventDefault();

    // Get the pasted text from the clipboard
    const clipboardData = event.clipboardData || window.clipboardData;
    const pastedText = clipboardData.getData("text");

    // Insert the pasted text at the current cursor position
    const startPos = textarea.selectionStart;
    const endPos = textarea.selectionEnd;
    const currentText = textarea.value;
    const updatedText = currentText.slice(0, startPos) + pastedText + currentText.slice(endPos);

    // Update the textarea value with the new content
    textarea.value = updatedText;

    // Adjust the cursor position after the paste
    const newCursorPos = startPos + pastedText.length;
    textarea.setSelectionRange(newCursorPos, newCursorPos);

    const newlineCount = updatedText.split(/\r\n|\r|\n/).length - 1;
    textarea.rows = newlineCount;
}


let convertUrlToSectionValues = function () {
    const textarea = document.getElementById("url2sectionsTextArea");
    const updatedContent = textarea.value;
    const updatedRowCount = textarea.rows;
    console.log(`Number of rows: ${updatedRowCount}`);

    let rows = updatedContent.split(/\r\n|\r|\n/);
    for (let row of rows) {
        row = row.replace("https://www.", "");
        row = row.replace(".com", "");
        row = splitIntoSections(row);
        result.innerHTML += `<br>${row}`;
    }
}


let convertUrlToEntryPoints = function () {
    const textarea = document.getElementById("url2sectionsTextArea");
    const updatedContent = textarea.value;
    const updatedRowCount = textarea.rows;
    console.log(`Number of rows: ${updatedRowCount}`);

    let rows = updatedContent.split(/\r\n|\r|\n/);
    for (let row of rows) {
        row = row.replace("https://www.", "");
        row = row.replace(".com", "");
        row = createEntryPointNames(row);
        result.innerHTML += `<br>${row}`;
    }
}


let convertUrlToEngagements = function () {
    const textarea = document.getElementById("url2sectionsTextArea");
    const updatedContent = textarea.value;
    const updatedRowCount = textarea.rows;
    console.log(`Number of rows: ${updatedRowCount}`);

    let rows = updatedContent.split(/\r\n|\r|\n/);
    for (let row of rows) {
        row = row.replace("https://www.", "");
        row = row.replace(".com", "");
        row = createEngagementNames(row);
        result.innerHTML += `<br>${row}`;
    }
}


const splitIntoSections = function (row){
    const spanishVal = 'es';
    let newRow = '[ ';

    let foundSpanishElement = false;
    let sections = row.split('\/');

    let currentIdx = 0;
    for (let elem of sections) {
        if (elem === spanishVal)
            foundSpanishElement = true;
        else {
            currentIdx += 1;
            newRow = newRow.concat( `"l${currentIdx}:${elem}", ` );
        }
    }

    if (foundSpanishElement)
        newRow = newRow.concat( `"${spanishVal}", ` );

    newRow = newRow.substring(0, newRow.length - 2); // remove last comma
    newRow = newRow.concat(' ]');

    return newRow;
}


/*
Naming convention base name

LobInitials  +  division  +  (language)  +  urlPathLevel-1 to urlPathLevel-n

Add language when not default - English
*/
const createNamingConventionBaseName = function (row, delimiter){
    // new row starts with the LOB prefix
    let newRow = lobPrefix.concat(delimiter);
    let sections = row.split('\/');

    // remove first array element
    if (!includeSubdomain)
        sections.shift();

    // check for remove spanish
    if (!includeSpanish) {
        const index = sections.indexOf(SPANISH_IDENTIFIER);
        if (index > -1)
            sections.splice(index, 1);
    }

    // add the LOB division - insert into the beginning of the array
    if (salesOrCare !== 'none')
        sections.unshift(salesOrCare);

    for (let elem of sections) {
        newRow = newRow.concat( `${elem}${delimiter}` );
    }

    return newRow
}


/*
 ---Name---------------------Syntax-------------------------------------------Example-------------------------------
 Entry Point			<<BASE>>(-language)									TF-sales-accessories-audio-es
*/
const createEntryPointNames = function (row){
/*
    // new row starts with the LOB prefix
    let newRow = lobPrefix.concat('-');
    let sections = row.split('\/');

    // remove first array element
    if (!includeSubdomain)
        sections.shift();

    // check for remove spanish
    if (!includeSpanish) {
        const index = sections.indexOf(SPANISH_IDENTIFIER);
        if (index > -1)
            sections.splice(index, 1);
    }

    // add the LOB division - insert into the beginning of the array
    if (salesOrCare !== 'none')
        sections.unshift(salesOrCare);

    for (let elem of sections) {
        newRow = newRow.concat( `${elem}-` );
    }
*/
    let newRow = createNamingConventionBaseName(row, '-');

    return newRow.substring(0, newRow.length - 1); // remove last dash
}




/* ---Name---------------------Syntax-------------------------------------------Example-------------------------------
 Enagement Name 		<<BASE>>(_language)_entryPointType_behavior1-N		TF_sales_accessories_audio_es_S_AO-30s
*/
const createEngagementNames = function (row){
    let baseName = createNamingConventionBaseName(row, '_');
    let newRow = baseName.concat( getEntryPointType('_') );
    newRow = newRow.concat( getBehaviors() );

    return newRow.substring(0, newRow.length - 1); // remove last underscore
}


const getEntryPointType = function (delimiter = '-') {
    let entryPointExtension = '';
    switch (entryPointType) {
        case 'sticky':
            entryPointExtension = `S${delimiter}`; break;
        case 'overlay':
            entryPointExtension = `O${delimiter}`; break;
        case 'embedded':
            entryPointExtension = `E${delimiter}`; break;
        default:
            console.log('No match for entry point type');
    }


    return entryPointExtension;
}


const getBehaviors = function (){
    let behaviors = '';
    if (behaviorAutoOpen) {
        if (behaviorTimeOnPage)
            behaviors = 'AO-30s_';
        else
            behaviors = 'AO_';
    }
    else {
        if (behaviorTimeOnPage)
            behaviors = '30s_';
    }
    return behaviors;
}


const clearResults = function () {
    result.innerHTML = '';
}


$(function() {
    init();
});
