let textarea = null;
const result = document.getElementById("url2sectionsResultSection");
const ENTRY_POINT_PREFIX = 'TF-sales-';


const init = function () {
    textarea = document.getElementById("url2sectionsTextArea");
    textarea.addEventListener("paste", handlePaste);

    const toSectionValuesBtn = document.getElementById("url2sectionsBtn");
    toSectionValuesBtn.addEventListener("click", convertUrlToSectionValues);

    const toEntryPointsBtn = document.getElementById("url2entryPointsBtn");
    toEntryPointsBtn.addEventListener("click", convertUrlToEntryPoints);

    const toEngagementsBtn = document.getElementById("url2engagementsBtn");
    toEngagementsBtn.addEventListener("click", convertUrlToEngagements);

    const clearBtn = document.getElementById("clearBtn");
    clearBtn.addEventListener("click", clearResults);
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


const createEntryPointNames = function (row){
    let newRow = ENTRY_POINT_PREFIX;
    let sections = row.split('\/');
    for (let elem of sections) {
        newRow = newRow.concat( `${elem}-` );
    }
    return newRow.substring(0, newRow.length - 1); // remove last dash
}


const createEngagementNames = function (row){
    let newRow = ENTRY_POINT_PREFIX;
    let sections = row.split('\/');
    for (let elem of sections) {
        newRow = newRow.concat( `${elem}_` );
    }
    return newRow.substring(0, newRow.length - 1); // remove last underscore
}

const clearResults = function () {
    result.innerHTML = '';
}


$(function() {
    init();
});
