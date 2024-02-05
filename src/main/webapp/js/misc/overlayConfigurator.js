'use strict';


let textarea;
let lineNumber;
let currentLine;
let overlayContainer;


const init = function () {

    lineNumber = 1;
    currentLine = document.getElementById('line' + lineNumber);

    textarea = document.getElementById("overlayLineText");
    textarea.addEventListener("paste", handleTextareaPaste);

    bindSelectLineBtn();
    bindAddLineBtn();
    bindDeleteLineBtn();
    bindFontSizeDropDownBtn();
    bindFontColorDropDownBtn();
    bindBoldSelector();
    bindItalicSelector();
    bindPaddingInputs();
}


const bindSelectLineBtn = function (){
    let $selectLineDropDownBtn = $('#selectLineDropDownBtn');
    $selectLineDropDownBtn.html('Line 1 <span class="caret"></span>');
    $('#selectLineDropDownMenu').find("li a").click( function(){
        lineNumber = $(this).text();
        $selectLineDropDownBtn.html('Line ' + lineNumber + ' <span class="caret"></span>');

        let $selectedLine = $('#line'+ lineNumber);
        let lineText = $selectedLine[0].outerText;
        textarea.value = lineText;

        currentLine = document.getElementById('line' + lineNumber);
/*
*
*   TODO   set the controls with the current values
*
*/
       overlayContainer = document.getElementById('overlayContainer').style;
       console.log(overlayContainer);

        document.getElementById("linePaddingTop").value    = overlayContainer['padding-top'].slice(0, -2);
        document.getElementById("linePaddingBottom").value = overlayContainer['padding-bottom'].slice(0, -2);
        document.getElementById("linePaddingLeft").value   = overlayContainer['padding-left'].slice(0, -2);
        document.getElementById("linePaddingRight").value  = overlayContainer['padding-right'].slice(0, -2);

    });
}


/*
let paddingUpdated = function (e){
    let ev = e;
    console.log('padding updated');
}
*/

const textareaKeyPressEvent = function (event) {
    let cursorPosition = $('#overlayLineText').prop("selectionStart");
    let keyCode = event.hasOwnProperty('which') ? event.which : event.keyCode;
    //console.log(`${event.key} : ${keyCode} : cursor position: ${cursorPosition}`);

    $('#line'+ lineNumber).text(textarea.value);
}



let handleTextareaPaste = function (event) {
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

    // const newlineCount = updatedText.split(/\r\n|\r|\n/).length - 1;
    // textarea.rows = newlineCount;
}


const bindAddLineBtn = function(){

}

const bindDeleteLineBtn = function(){

}

const bindFontSizeDropDownBtn= function(){

    let $fontSizeDropDownBtn = $('#fontSizeDropDownBtn');
    // $fontSizeDropDownBtn.html('Line 1 <span class="caret"></span>');
    $fontSizeDropDownBtn.html('Font <span class="caret"></span>');
    $('#fontSizeDropDownMenu').find("li a").click( function(){
        let fontSize = $(this).text();
        let fontStyle = fontSize + 'px';
        $fontSizeDropDownBtn.html('Font ' + fontStyle + ' <span class="caret"></span>');
        currentLine.style.fontSize = fontStyle;
    });
}

const bindFontColorDropDownBtn = function(){
    let $fontColorDropDownBtn = $('#fontColorDropDownBtn');
    $fontColorDropDownBtn.html('Color <span class="caret"></span>');
    $('#fontColorDropDownMenu').find("li a").click( function(){
        let fontColor = $(this).text();
        $fontColorDropDownBtn.html( fontColor + ' <span class="caret"></span>' );
        currentLine.style.color = fontColor;
    });
}


const bindBoldSelector = function(){

    let $boldSelector = $('#boldSelector');
    $boldSelector.on('click', () => {
        if ($boldSelector.hasClass('isOn')) {
            $boldSelector.removeClass('isOn');
            $boldSelector.addClass('isOff fa-rotate-180');
            currentLine.style.fontWeight = "normal";
        }
        else {
            $boldSelector.removeClass('isOff fa-rotate-180');
            $boldSelector.addClass('isOn');
            currentLine.style.fontWeight = "bold";
        }
    });
}

const bindItalicSelector = function(){

    let $italicSelector = $('#italicSelector');
    $italicSelector.on('click', () => {
        if ($italicSelector.hasClass('isOn')) {
            $italicSelector.removeClass('isOn');
            $italicSelector.addClass('isOff fa-rotate-180');
            currentLine.style.fontStyle = "normal";
        }
        else {
            $italicSelector.removeClass('isOff fa-rotate-180');
            $italicSelector.addClass('isOn');
            currentLine.style.fontStyle = "italic";
        }
    });
}

const bindPaddingInputs = function(){
    overlayContainer = document.getElementById('overlayContainer').style;
    const linePaddingTop    = document.getElementById("linePaddingTop");
    const linePaddingBottom = document.getElementById("linePaddingBottom");
    const linePaddingLeft   = document.getElementById("linePaddingLeft");
    const linePaddingRight  = document.getElementById("linePaddingRight");

    linePaddingTop.value    = overlayContainer['padding-top'].slice(0, -2);
    linePaddingBottom.value = overlayContainer['padding-bottom'].slice(0, -2);
    linePaddingLeft.value   = overlayContainer['padding-left'].slice(0, -2);
    linePaddingRight.value  = overlayContainer['padding-right'].slice(0, -2);

    linePaddingTop.addEventListener("change", (e)=>{
        overlayContainer['padding-top'] = linePaddingTop.value + 'px';
    });
    linePaddingBottom.addEventListener("change", (e)=>{
        overlayContainer['padding-bottom'] = linePaddingBottom.value + 'px';
    });
    linePaddingLeft.addEventListener("change", (e)=>{
        overlayContainer['padding-left'] = linePaddingLeft.value + 'px';
    });
    linePaddingRight.addEventListener("change", (e)=>{
        overlayContainer['padding-right'] = linePaddingRight.value + 'px';
    });
}


$(function() {
    init();
});