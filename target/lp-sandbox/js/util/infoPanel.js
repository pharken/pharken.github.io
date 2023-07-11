
const $infoList = $('#infoList');
const infoList = document.getElementById('infoList');


let displayInfo = function (info) {

    const li = document.createElement('li');

    // ✅ Check if multi-line info  ( has a new line tag )
    if (info.includes('\n')) {
        let textarea = document.createElement("textarea");
        textarea.name = "muhTextArea";
        textarea.disabled = true;
        textarea.cols = "1";

        li.append(textarea);
        infoList.appendChild(li);

        resizeTextAreaBasedOnContentSize(textarea, info);
    }
    else {
        li.innerHTML = info;
        infoList.appendChild(li);
    }

    scrollToBottom();
};


let resizeTextAreaBasedOnContentSize = function ( textarea, info ) {
    textarea.value = info;

    // Reset the height to the default value
    textarea.setAttribute('rows', '1');
    // Calculate the required number of rows based on scroll height and line height
    var scrollHeight = textarea.scrollHeight;
    var lineHeight = parseInt(window.getComputedStyle(textarea).lineHeight, 10);
    var rows = Math.ceil(scrollHeight / lineHeight);
    textarea.setAttribute('rows', rows);
}



let scrollToBottom = function () {
    $infoList.animate({scrollTop: $infoList.prop("scrollHeight")}, 500);
}
