'use strict';

// import * as common from "../util/common.js";

let textarea;
let lineNumber;
let currentLine;
let overlayContainer;


const init = function () {
    lineNumber = 1;
    currentLine = document.getElementById('line' + lineNumber);
    textarea = document.getElementById("overlayLineText");
    textarea.addEventListener("paste", handleTextareaPaste);
    setOverlayTextarea(lineNumber);
    bindSelectLineBtn();
    bindAddLineBtn();
    bindDeleteLineBtn();
    bindDropDownButton('fontColor', 'color', 'Color');
    bindDropDownButton('fontSize',  'fontSize', 'Font Size', 'px');
    bindDropDownButton('alignment', 'textAlign', 'Alignment');
    bindBoldSelector();
    bindItalicSelector();
    bindPaddingInputs();
}


const bindSelectLineBtn = function (){
    let $selectLineDropDownBtn = $('#selectLineDropDownBtn');
    $selectLineDropDownBtn.html('Line 1 <span class="caret"></span>');
    $('#selectLineDropDownMenu').find("li a").click( function(){
        lineNumber = $(this).text();
        setOverlayTextarea(lineNumber);
    });
}


const setOverlayTextarea = function (lineNumber){
    $('#selectLineDropDownBtn').html('Line ' + lineNumber + ' <span class="caret"></span>');

    let $selectedLine = $('#line'+ lineNumber);
    let lineText = $selectedLine[0].outerText;

    textarea.value = lineText;
    currentLine = document.getElementById('line' + lineNumber);

    setControlsWithCurrentValues();
}


const setControlsWithCurrentValues = function (){
    let lines = $('.overlay');
    $.each(lines, (idx,value) => {

        if (idx != (lineNumber - 1) )
            return true;

        /*
                    console.log(`line${idx}
                        color: ${value.style.color},
                        font size: ${value.style.fontSize}
                        alignment: ${value.style.textAlign},
                        font weight: ${value.style.fontWeight},
                        font style: ${value.style.fontStyle}`);
        */

        if (value.style.fontSize)
            $('#fontSizeDropDownBtn').html(value.style.fontSize + ' <span class="caret"></span>');
        else
            $('#fontSizeDropDownBtn').html('Font Size <span class="caret"></span>');

        if (value.style.color)
            $('#fontColorDropDownBtn').html(value.style.color + ' <span class="caret"></span>');
        else
            $('#fontColorDropDownBtn').html('Color <span class="caret"></span>');

        if (value.style.textAlign)
            $('#alignmentDropDownBtn').html(value.style.textAlign + ' <span class="caret"></span>');
        else
            $('#alignmentDropDownBtn').html('Alignment <span class="caret"></span>');


        let $boldSelector = $('#boldSelector');
        $boldSelector.removeClass('isOn isOff fa-rotate-180');

        let fontWeight = value.style.fontWeight;
        if (fontWeight) {
            if (fontWeight === 'normal') {
                $boldSelector.addClass('isOff fa-rotate-180');
                currentLine.style.fontWeight = "normal";
            }
            else {
                $boldSelector.addClass('isOn');
                currentLine.style.fontWeight = "bold";
            }
        }
        else {
            $boldSelector.addClass('isOff fa-rotate-180');
            currentLine.style.fontWeight = "normal";
        }


        let $italicSelector = $('#italicSelector');
        $italicSelector.removeClass('isOn isOff fa-rotate-180');

        let fontStyle = value.style.fontStyle;
        if (fontStyle) {
            if (fontStyle === 'normal') {
                $italicSelector.addClass('isOff fa-rotate-180');
                currentLine.style.fontStyle = "normal";
            }
            else {
                $italicSelector.addClass('isOn');
                currentLine.style.fontStyle = "italic";
            }
        }
        else {
            $italicSelector.addClass('isOff fa-rotate-180');
            currentLine.style.fontStyle = "normal";
        }
    });


    overlayContainer = document.getElementById('overlayContainer').style;
    // console.log(overlayContainer);
    document.getElementById("linePaddingTop").value    = overlayContainer['padding-top'].slice(0, -2);
    document.getElementById("linePaddingBottom").value = overlayContainer['padding-bottom'].slice(0, -2);
    document.getElementById("linePaddingLeft").value   = overlayContainer['padding-left'].slice(0, -2);
    document.getElementById("linePaddingRight").value  = overlayContainer['padding-right'].slice(0, -2);
}


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


const bindDropDownButton = function(domId, styleElement, buttonTitle, selectionExtension = '') {
    let $dropDownBtn = $('#' + domId + 'DropDownBtn');
    $dropDownBtn.html(buttonTitle + ' <span class="caret"></span>');
    $('#' + domId + 'DropDownMenu').find("li a").click( function(){
        let selection = $(this).text();
        if (selectionExtension)
            selection += selectionExtension;
        $dropDownBtn.html( selection + ' <span class="caret"></span>' );
        currentLine.style[styleElement] = selection;
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