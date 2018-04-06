/*eslint-env browser*/

//STEP 1
var sortAlphabets = function (text) {
    "use strict";
    return text.split('').sort().join('');
};
window.console.log(sortAlphabets("webmaster"));

//STEP 2
function capitalize(str) {
    "use strict";
    var array = str.split(' '), newarray = [], x;
    
    for (x = 0; x < array.length; x = x + 1) {
        newarray.push(array[x].charAt(0).toUpperCase() + array[x].slice(1));
    }
    return newarray.join(' ');
}
window.console.log(capitalize("the quick brown fox"));

//STEP 3
function vowelCount(str) {
    "use strict";
    var vowelList = 'aeiouAEIOU', vCount = 0, i;
  
    for (i = 0; i < str.length; i = i + 1) {
        if (vowelList.indexOf(str[i]) !== -1) {
            vCount += 1;
        }
    }
    return vCount;
}
window.console.log(vowelCount("The quick brown fox"));

//STEP 4
function makeid(l) {
    "use strict";
    var text = "", i, charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (i = 0; i < l; i = i + 1) {
        text += charList.charAt(Math.floor(Math.random() * charList.length));
    }
    return text;
}
window.console.log(makeid(8));

//STEP 5
function longestCountryName(country_name) {
    "use strict";
    return country_name.reduce(function (lname, country) {
        return lname.length > country.length ? lname : country;
    }, "");
}
window.console.log(longestCountryName(["Australia", "Germany", "United States of America"]));
