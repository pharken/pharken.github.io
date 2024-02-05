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
const sectionCounts = document.getElementById("url2sectionsCounts");
const SPANISH_IDENTIFIER = 'spa';
/*
The engagement name character limit is 50.
The TF_sales_ prefix, 2 digit language, entry point identifier,  and behavior identifiers can be up to 21 characters.
That leaves 32 characters for the URL path items.

If the path is over 29 characters, it's going to need to be compressed somehow

Example values:
        TF_sales_es
        /activate/phones/esimnewact/simselection
        _S
        _AO-30s
*/
const URL_PATH_CHAR_COUNT_LIMIT = 29;
let lobPrefix = 'TF';
let salesOrCare = 'sales';
let platform = 'DT';
let entryPointType = 'sticky';
let includeSubdomain = false;
let includeSpanish = true;
let behaviorAutoOpen = false;
let behaviorTimeOnPage = false;


const generateLPNamingConventionsInit = function () {
    textarea = document.getElementById("url2sectionsTextArea");
    textarea.addEventListener("paste", handlePaste);

    const toSectionValuesBtn = document.getElementById("url2sectionsBtn");
    toSectionValuesBtn.addEventListener("click", convertUrlToSectionValues);

    const toEngagementsBtn = document.getElementById("url2engagementsBtn");
    toEngagementsBtn.addEventListener("click", convertUrlToEngagements);

    const toEntryPointsBtn = document.getElementById("url2entryPointsBtn");
    toEntryPointsBtn.addEventListener("click", convertUrlToEntryPoints);

    const toBehaviorsBtn = document.getElementById("url2behaviorsBtn");
    toBehaviorsBtn.addEventListener("click", convertUrlToBehaviors);

    const toEngagementWindowsBtn = document.getElementById("url2EngagementWindowBtn");
    toEngagementWindowsBtn.addEventListener("click", convertUrlToEngagementWindows);

    const clearBtn = document.getElementById("clearBtn");
    clearBtn.addEventListener("click", clearResults);

    bindLobDropdownBtn();
    bindPlatformDropdownBtn();
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
        lobPrefix = $(this).text();
        $lobDropDownBtn.html(lobPrefix + ' <span class="caret"></span>');
    });
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


const bindPlatformDropdownBtn = function (){
    let $platformBtn = $('#platformDropdownBtn');
    $platformBtn.html('DT <span class="caret"></span>');
    $('#platformDropdownMenu').find("li a").click( function(){
        platform = $(this).text();
        $platformBtn.html(platform + ' <span class="caret"></span>');
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
    convertUrlToNamingConventions('sections');
}

let convertUrlToEngagements = function () {
    convertUrlToNamingConventions('engagements');
}

let convertUrlToEntryPoints = function () {
    convertUrlToNamingConventions('entryPoints');
}

let convertUrlToBehaviors = function () {
    convertUrlToNamingConventions('behaviors');
}

let convertUrlToEngagementWindows = function () {
    convertUrlToNamingConventions('engagementWindows');
}


let convertUrlToNamingConventions = function (funcCall) {
    const textarea = document.getElementById("url2sectionsTextArea");
    const updatedContent = textarea.value;
    const updatedRowCount = textarea.rows;
    console.log(`Number of rows: ${updatedRowCount}`);

    let rows = updatedContent.split(/\r\n|\r|\n/);
    for (let row of rows) {
        row = row.replace("https://www.", "");
        row = row.replace(".com", "");
        // row = splitIntoSections(row);
        switch (funcCall) {
            case 'sections':
                row = splitIntoSections(row); break;
            case 'engagements':
                row = createEngagementNames(row); break;
            case 'entryPoints':
                row = createEntryPointNames(row); break;
            case 'behaviors':
                row = createBehaviors(row); break;
            case 'engagementWindows':
                row = createEngagementWindows(row); break;
            default:
                console.log('No match for function type');
        }
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

    sections = checkUrlPathCharLength_and_compressIfTooLong(sections);

    // add the LOB division - insert into the beginning of the array
    if (salesOrCare !== 'none')
        sections.unshift(salesOrCare);

    for (let elem of sections) {
        newRow = newRow.concat( `${elem}${delimiter}` );
    }

    return newRow
}


const createEngagementNames = function (row){
    let baseName = createNamingConventionBaseName(row, '_');
    baseName = removeLastChar(baseName);
    baseName = `${baseName}[`;      // add opening bracket

    let newRow = baseName.concat( getPlatform('_') );
    newRow = newRow.concat( getEntryPointType('_') );
    newRow = newRow.concat( getBehaviors() );
    newRow = removeLastChar(newRow);
    newRow = `${newRow}]`;        // add closing bracket

    return newRow;
}

const createEntryPointNames = function (row){
    let newRow = createNamingConventionBaseName(row, '-');
    return removeLastChar(newRow);
}

const createBehaviors = function (row){
    let newRow = createNamingConventionBaseName(row, '-');
    newRow = newRow.concat( getBehaviors() );

    return removeLastChar(newRow);
}

const createEngagementWindows = function (row){
    let delimiter = '-';
    // new row starts with the LOB prefix
    let newRow = lobPrefix.concat(delimiter);
    let sections = row.split('\/');

    // remove first array element.  Example:  this would be 'tracfone' from the string, www.tracfone.com
    sections.shift();

    // add the LOB division
    if (salesOrCare !== 'none')
        newRow = newRow.concat( `${salesOrCare}${delimiter}` );

    // check for add/remove spanish
    if (includeSpanish) {
        const index = sections.indexOf(SPANISH_IDENTIFIER);
        if (index > -1)
            newRow = newRow.concat( `${SPANISH_IDENTIFIER}${delimiter}` );
    }

    newRow = newRow.concat( '(uniqueIdPlaceholder)' );

    return newRow
}


// check the size of the URL in order to decide if the generated name needs to be compressed
// Do this check before sales or care is added
const checkUrlPathCharLength_and_compressIfTooLong = function (sections){
    let sectionCount = sections.length;
    let numberOfPathDelimiters = sectionCount - 1;
    let sectionCharCount = 0;
    for (let elem of sections) {
        sectionCharCount += elem.length;
    }
    sectionCharCount += numberOfPathDelimiters;

    console.log(`# of sections: ${sectionCount},  section char count: ${sectionCharCount}`);
    if (sectionCharCount > URL_PATH_CHAR_COUNT_LIMIT)
        sectionCounts.innerHTML += `<br>path cnt: ${sectionCount},  # of chars: <b style="color: blue;">${sectionCharCount}</b>`;
    else
        sectionCounts.innerHTML += `<br>path cnt: ${sectionCount},  # of chars: ${sectionCharCount}`;

    // this will start with the 4th item in the array.
    // It will take the first 3 letters of the path section and replace that array piece so that the
    //      engagement name can sufficiently be reduced in size
    if (sectionCharCount > URL_PATH_CHAR_COUNT_LIMIT) {
        if (sectionCount > 3) {
            for (let i=3; i<sectionCount; i++) {
                let thisArySection = sections[i];
                // only do this for longer names in the path  (longer than 3 characters anyway)
                if (thisArySection.length > 3) {
                    let firstThree = thisArySection.substring(0, 3);
                    sections[i] = firstThree;
                }
            }
        }
    }

    return sections;
}



const getPlatform = function (delimiter = '-') {
    let platformType = '';
    switch (platform) {
        case 'DT':
            platformType = `DT${delimiter}`; break;
        case 'SP':
            platformType = `SP${delimiter}`; break;
        case 'ALL':
            platformType = `A${delimiter}`; break;
        default:
            console.log('No match for entry point type');
    }
    return platformType;
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
            behaviors = 'TOL-30s_';
        else
            behaviors = 'TOL_';
    }
    else {
        if (behaviorTimeOnPage)
            behaviors = '30s_';
    }
    return behaviors;
}


const clearResults = function () {
    result.innerHTML = '';
    sectionCounts.innerHTML = '';
}


const removeLastChar = function (theString) {
    return theString.substring(0, theString.length - 1);
}


export {
    generateLPNamingConventionsInit
}