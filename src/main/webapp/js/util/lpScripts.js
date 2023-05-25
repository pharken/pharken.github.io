

/*  Activate the message button once LP scripts have been loaded    */
let timerId = null;
let checkLpScriptsLoaded = function () {
    try {
        let allEvents = lpTag.events.hasFired("*","*");
        let hasOnReady = allEvents.find( e => { return (e.eventName ==="ON_READY") || (e.eventName ==="ON_STARTED") } );
        if (hasOnReady) {
            console.log('LP scripts ready');
            clearInterval(timerId);

            //TODO  instead of this.  Publish message/event that scripts are loaded
            document.getElementById('launchTracfoneEngagementBtn').disabled = false;
            document.getElementById('launchDynamicRoutingEngagement').disabled = false;

        }
        else {
            startTimer();
            console.log('LP scripts not ready');
        }
    }
    catch (e) {
        console.log('checkLpScriptsLoaded failed');
        startTimer();
    }
}

let startTimer = function () {
    if (!timerId) {
        timerId = setInterval(timerFunction, 1000);
    }
}


let timerFunction = function () {
    console.log("checking again ...");
    checkLpScriptsLoaded();
}
