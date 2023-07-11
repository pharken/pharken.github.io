/**
 *
 * MANDATORY FUNCTIONS:
 *      init
 *      start
 */
function basicTaglet () {
    let version = '1.0',
        name = 'basicTaglet';

    /*
        Runs on Taglet load
    */
    function init(config) {

    }

    /*
        Runs after all taglets have been loaded and initialized
    */
    function start(config) {
        console.log('taglet start');
    }

    let foo = function () {
        console.log('in foo');

    }

    return {
        version: version,
        name: name,
        init: init,
        start: start,
        foo: foo
    };
}

