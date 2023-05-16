
/*

LP Tag commands
There are numerous commands that can be entered in the console window in Chrome Dev Tools:

	lpTag.external.convInfo.getData()
	lpTag.sections
	lpTag.device.familyName()			returns “Mobile”  or  “Desktop”
	lpTag.getDomain()					Ex:  (verizon)  va-e.c.liveperson.net
	lpTag.getEnv()						Ex:  prod
	lpTage.getTagDomain()					lptag.liveperson.net
	lpTag.lpUtils.getCurrentUrlWithoutParams:		https://secure.verizon.com/signin
	lpTag.newPage(document.URL, { section: ['simple'] });	This is an amazing command that allows the section values to be updated and a Liveperson refresh

This is similar :
    lpTag.section = [ ‘simple’ ]
lpTag.newPage( document.URL );


	/info  	Try this in the engagement window


Display the current engagement.
lpTag.events.hasFired("RENDERER_STUB","AFTER_CREATE_ENGAGEMENT_INSTANCE").forEach( e => {console.log(e.data.eng.conf.name)});


To prevent a redirect of the customer site,  run this code in the dev tools console



// Run this in the F12 javascript console in chrome
// if a redirect happens, the page will pause
// this helps because chrome's network tab's
// "preserve log" seems to technically preserve the log
// but you can't actually LOOK at it...
// also the "replay xhr" feature does not work after reload
// even if you "preserve log".

window.addEventListener("beforeunload", function() { debugger; }, false);



*/


















