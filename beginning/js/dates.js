/*eslint-env browser*/

//STEP 1
//var d = new Date();
//window.console.log(daysInMonth(d.getMonth,d.getFullYear));
//
//function daysInMonth(month, year) {
//    var days;
//    switch (month) {
//        case 1: // Feb, our problem child
//            var leapYear = ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
//            days = leapYear ? 29 : 28;
//            break;
//        case 3: case 5: case 8: case 10: 
//            days = 30;
//            break;
//        default: 
//            days = 31;
//        }
//    return days;
//}

//STEP 2
//var monthNames = ["January", "February", "March", "April", "May", "June",
//  "July", "August", "September", "October", "November", "December"];
//var d = new Date();
//window.console.log("The current month is " + monthNames[d.getMonth()]);

//STEP 3
//var today = new Date();
//if(today.getDay() == 6 || today.getDay() == 0) {
//    window.console.log("Today is a weekend!")
//} else {
//    window.console.log("Today is a weekday!")
//}

//STEP 4
//var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
//var today = new Date();
//var yesterday;
//if(today.getDay() == 0) {
//    yesterday = dayNames[6];
//} else { 
//    yesterday = dayNames[today.getDay() - 1];
//}
//window.console.log("Yesterday is " + yesterday);

//STEP 5
//var dayNames = ["S", "M", "T", "W", "T", "F", "S"]
//var today = new Date();
//window.console.log("Today is " + dayNames[today.getDay()]);