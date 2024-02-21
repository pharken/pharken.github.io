
const closeConversation = async () => {
    document.querySelector('.lp_close').click();
    await sleep(500);
    document.querySelector('.lp_confirm_button').click();
}

const sleep = async (milliseconds) => {
    await new Promise(resolve => {
        return setTimeout(resolve, milliseconds)
    });
};


//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
// Same as above, but with comments

const closeConversation = async () => {
    document.querySelector('.lp_close').click();
    await sleep(500);
    document.querySelector('.lp_confirm_button').click();
    console.log("close convo");
}

const sleep = async (milliseconds) => {
    await new Promise(resolve => {
        return setTimeout(resolve, milliseconds)
    });
};



//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
//This needs to be added to the DOM to call the preceding func (which also needs to be added)

window.onbeforeunload = function() {
    return closeConversation();
};








