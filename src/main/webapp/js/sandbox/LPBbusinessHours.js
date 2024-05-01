/***
 *  DO NOT USE THIS
 *  This is leftover code from when I was trying to test the
 *  logic for comparing the LP WorkingHours object to the actual date
 *
 *  INSTEAD OF USING THIS FOR TESTING, SEE LP_FAAS WEBSTORM PROJECT.
 *  That project is setup to run the lambda outside of LP environment
 *  and makes debugging much faster.
 *
 *  Also, the code here isnt up-to-date either.
 *
 *  Note:  I was not able to get the code to make the HTTP call successfully
 *         and so I had to manually set the response to a known good
 *         response and then was able to run the code as normal.
 */


'use strict';

// import * as url2section from "../util/urlToSectionValues.js";

const acct = '49985427';

const businessHours = [
    {
        "id": 3923804438,
        "name": "Business hours",
        "isDefault": false,
        "deleted": false,
        "description": "",
        "events": [
            {
                "recurrence": ["RRULE:FREQ=WEEKLY"],
                "start": {
                    "dateTime": "2024-02-28",
                    "timeZone": "America/Chicago"
                },
                "end": {
                    "dateTime": "2024-02-29",
                    "timeZone": "America/Chicago"
                }
            },
            {

                "recurrence": ["RRULE:FREQ=WEEKLY"],
                "start": {
                    "dateTime": "2024-02-29T09:00:00",
                    "timeZone": "America/Chicago"
                },
                "end": {
                    "dateTime": "2024-02-29T22:45:00",
                    "timeZone": "America/Chicago"
                }
            },
            {
                "recurrence": ["RRULE:FREQ=WEEKLY"],
                "start": {
                    "dateTime": "2024-03-01",
                    "timeZone": "America/Chicago"
                },
                "end": {
                    "dateTime": "2024-03-02",
                    "timeZone": "America/Chicago"
                }
            },
            {
                "recurrence": ["RRULE:FREQ=WEEKLY"],
                "start": {
                    "dateTime": "2024-03-02T09:00:00",
                    "timeZone": "America/Chicago"
                },
                "end": {
                    "dateTime": "2024-03-03T22:00:00",
                    "timeZone": "America/Chicago"
                }
            },
            {
                "recurrence": ["RRULE:FREQ=WEEKLY"],
                "start": {
                    "dateTime": "2024-03-01T14:00:00",
                    "timeZone": "America/Chicago"
                },
                "end": {
                    "dateTime": "2024-03-01T15:00:00",
                    "timeZone": "America/Chicago"
                }
            }
        ]
    }
];

/**

 create campaign - working hours map
        If there is not mapped,  default to 'Business Hours'

 ideally, i would want to get this info dynamically, but i have not figured out how to do it yet
         Get Campaign ID from payload
         Use campaign to get the working hours selection
         If there is no select,  default to 'Business Hours'

 Get Working Hours from API
 Get 'working hours selection' from the json response
 Find todays date in the business hours
     if not found, then it is implied that the business is closed -->  system message / close conv
     if found, check start and end time
     check if current time is outside of business hours
     if yes, system message / close
     if no, do nothing

 */
const checkBusinesshours = function () {

    let isBusinessHours = false;

    const BUSINESS_HOURS = 'Business hours';
    //const businessHours = [{"id":3923804438,"name":"Business hours","isDefault":false,"deleted":false,"description":"","events":[{"recurrence":["RRULE:FREQ=WEEKLY"],"start":{"dateTime":"2024-02-28","timeZone":"America/Chicago"},"end":{"dateTime":"2024-02-29","timeZone":"America/Chicago"}},{"recurrence":["RRULE:FREQ=WEEKLY"],"start":{"dateTime":"2024-02-29T09:00:00","timeZone":"America/Chicago"},"end":{"dateTime":"2024-02-29T22:00:00","timeZone":"America/Chicago"}},{"recurrence":["RRULE:FREQ=WEEKLY"],"start":{"dateTime":"2024-03-01","timeZone":"America/Chicago"},"end":{"dateTime":"2024-03-02","timeZone":"America/Chicago"}},{"recurrence":["RRULE:FREQ=WEEKLY"],"start":{"dateTime":"2024-03-02T09:00:00","timeZone":"America/Chicago"},"end":{"dateTime":"2024-03-03T22:00:00","timeZone":"America/Chicago"}},{"recurrence":["RRULE:FREQ=WEEKLY"],"start":{"dateTime":"2024-03-01T14:00:00","timeZone":"America/Chicago"},"end":{"dateTime":"2024-03-01T15:00:00","timeZone":"America/Chicago"}}]}];

    // const businessHours = accountWorkingHours.find( (aryElem) => aryElem.name === campaignHoursObj.name );
    const days = businessHours[0].events;
    let todayDate = null;

    /* ===================== TESTS ===================== */
    //let d = new Date();
    //console.log( `The current date/time: ${d},   date.getTime:  ${d.getTime()}` );

    // todayDate = new Date(2024, 2, 7,  2,  0, 0);    //  3:00 AM EST
    // todayDate = new Date(2024, 2, 7, 20, 15, 0);    //  9:15 PM EST
    // todayDate = new Date(2024, 2, 7, 22, 15, 0);    // 11:15 PM EST
    // todayDate = new Date(2024, 2, 7, 22, 59, 0);    // 11:59 PM EST

    /* =================== END TESTS =================== */

    todayDate = new Date();
    let nowTime = todayDate.getTime();

    const dayOfWeek = todayDate.toLocaleString("en-US", {
        timeZone: "America/New_York", weekday: 'long'
    }).toLowerCase();

    let todayDayOfWeek = null;
    switch (dayOfWeek) {
        case 'sunday':    todayDayOfWeek = 0; break;
        case 'monday':    todayDayOfWeek = 1; break;
        case 'tuesday':   todayDayOfWeek = 2; break;
        case 'wednesday': todayDayOfWeek = 3; break;
        case 'thursday':  todayDayOfWeek = 4; break;
        case 'friday':    todayDayOfWeek = 5; break;
        case 'saturday':  todayDayOfWeek = 6; break;
    }
    console.log(`todayDayOfWeek: ${todayDayOfWeek} (${dayOfWeek})`);
    console.log( 'todayDate converted to locale (EST): ' + todayDate.toLocaleString("en-US", {timeZone: "America/New_York"}));

    days.some(function(day) {

        let startDayStr = day.start.dateTime;
        let endDayStr   = day.end.dateTime;

        // check if the start and end date strings contain hh:mm:ss
        if ( !startDayStr.includes('T') )
            startDayStr = startDayStr + " GMT-0600";
        if ( !endDayStr.includes('T') )
            endDayStr = endDayStr + " GMT-0600";

        console.log(`--------------------------------------------`);
        console.log(`|startGmtStr: ${startDayStr}`);
        console.log(`|endGmtStr:   ${endDayStr}`);

        // convert the date string to Date object to get the Day of Week and the hours, min, and seconds
        let sd = new Date(startDayStr);
        let ed = new Date(endDayStr);
        let startDayOfWeek = sd.getDay();
        let endDayOfWeek   = ed.getDay();

        console.log(`startDayOfWeek: ${startDayOfWeek}`);

        // console.log(`sd.getDate():   ${sd.getDate()}`);     // day of month







        // var options2 = { day: 'numeric' };
        // console.log(todayDate.toLocaleDateString('en-US', options2));

        let todaysDayOfMonthByLocale = todayDate.toLocaleDateString('en-US', { day: 'numeric' } )
        console.log(`|today by locale: ${todaysDayOfMonthByLocale}, today GMT: ${todayDate.getDate()}`);






        /*
            The time cannot be gathered from the start date because the date could be in the past and
            so that time would be very low
            So, we need to extract the hours
                and then get today's date and combine in it with Start Time hh:mm:ss to create
                a new updated start date
            Same procedure for the end day, except the end day is a little different because it could
                be the next day. See comments below
        */
        if ( todayDayOfWeek === startDayOfWeek ) {

            console.log(`WorkingHours start date: YYYY/MM/DD HH:MM:SS - ${todayDate.getFullYear()}/${todayDate.getMonth()+1}/${todayDate.getDate()} ${sd.getHours()}:${sd.getMinutes()}:${sd.getSeconds()}`);

            let startDate = new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate(), sd.getHours(), sd.getMinutes(), sd.getSeconds());
            console.log( `startDate: ${startDate}` );
            // console.log( `startDate (locale): ${startDate.toLocaleString("en-US", {timeZone: "America/New_York"})}` );


            // if the end day is greater than the start day, this is indicating a full day of business hours
            // The end day could be set to the start day and then incremented by 1, but there is no way to know if
            // it is the end of the month and could end up with an invalid date.
            //      An example would be:  start day is 31.  Incrementing that would give an invalid day
            // For this case, keep the day the same but make the hh:mm:ss set to 23:59:59
            //
            // If end date, not greater than start day (they are equal) then just use the end date hours, min, and sec
            // along with the updated month and day
            //
            // if todayDayOfWeek is 6, this is saturday.  The next day resets to 0 (sunday)
            let endDate = null;
            if ( (todayDayOfWeek < endDayOfWeek) || ((todayDayOfWeek == 6) && (endDayOfWeek == 0)) )
                endDate = new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate(), 23, 59, 59);
            else
                endDate = new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate(), ed.getHours(), ed.getMinutes(), ed.getSeconds());

            console.log( `endDate:   ${endDate}` );
            console.log( `endDate locale:   ${endDate.toLocaleString("en-US", {timeZone: "America/New_York"})}` );

            let startTime = startDate.getTime();
            let endTime   = endDate.getTime();

            console.log( `start time: ${startTime},  ${nowTime - startTime}` );
            console.log( `now time:   ${nowTime}` );
            console.log( `end time:   ${endTime},  ${endTime - nowTime}` );

            if ( (startTime < nowTime) && (nowTime < endTime) ) {
                isBusinessHours = true;
                return true;
            }
        }

        return false;
    });

    console.log(`|---------------------------------`);
    console.log(`|business hours: ${isBusinessHours}`);
    console.log(`|---------------------------------`);
    // console.info('|accountWorkingHours: ' + JSON.stringify(accountWorkingHours, null, 2));
    // console.info('|accountWorkingHours: ' + JSON.stringify(accountWorkingHours));

}


$(function() {

    getBearerToken();
    // getConversationsByTimeRange();
    checkBusinesshours();

});