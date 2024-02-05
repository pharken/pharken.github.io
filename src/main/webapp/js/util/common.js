
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

const bindSliderBtnAnimation = function (domId){
    let $selector = $('#' + domId);
    $selector.on('click', () => {
        if ($selector.hasClass('isOn')) {
            $selector.removeClass('isOn');
            $selector.addClass('isOff fa-rotate-180');
        }
        else {
            $selector.removeClass('isOff fa-rotate-180');
            $selector.addClass('isOn');
        }
    });
}

export  {
    copyToClipboard,
    bindSliderBtnAnimation
}