'use strict';


var lpUtils = {
    hideInput: function hideInput() {
        // Let DOM render
        setTimeout(function hideInputField() {
            document.getElementsByClassName('lpview_bottom_container')[0].style.display = 'none';
        }, 100);
    },
    showInput: function showInput() {
        setTimeout(function showInputField() {
            document.getElementsByClassName('lpview_bottom_container')[0].style.display = 'block';
        }, 100);
    }
}
function hideShowInputField() {
    // Bind event
    window.lpTag.hooks.push({
        name: 'AFTER_GET_LINES',
        callback: function(options) {
            // Filter every line, look for welcome message or not current skill and hide/show input
            options.data.lines.forEach(function(line) {
                // Filter out every line that is sent by the system or is part of previous history
                if (line.source === 'system' || line.history) return;
                //Check if the user need input box
                if (line.text.includes('[:::showinput:::]')) {
                    var dialog = line.text.split('[:::showinput:::]')
                    console.log(dialog);
                    // line.text = dialog.length > 0 && dialog[1] ? dialog[1] : 'Please provide some additional information';
                    line.text = dialog.length > 0 && dialog[1] ? dialog[1] : '';
                    lpUtils.showInput();
                }
                // Hide input if line is welcome message and show if not current skill
                if ((line.isWelcomeMessage && line.quickReplies)) {
                    lpUtils.hideInput();cl
                }
            });
        },
    });
}


export  {
    hideShowInputField
}

