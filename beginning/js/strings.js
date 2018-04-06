/*eslint-env browser*/

//STEP 1
//var name = window.prompt("Please provide your name.");
//window.alert(name.trim().replace(/\s/g, '').length);

//STEP 2
//var name = window.prompt("Please provide your name.");
//name = name.trim().replace(/\s/g, '');
//var index = parseInt(window.prompt("Please provide a number to find the letter in your name."), 0);
//if (index > 0 && index <= name.length) {
//    window.alert(name.charAt(index-1));
//} else {
//    window.alert("The number you provide is out of scope, please provide an positive number which is less or equal to your name's length");
//}

//STEP 3
//var firstName = window.prompt("Please provide your first name.");
//var lastName = window.prompt("Please provide your lasst name.");
//firstName = firstName.trim();
//firstName = firstName.charAt(0).toUpperCase() + firstName.substr(1).toLowerCase();
//lastName = lastName.trim();
//lastName = lastName.charAt(0).toUpperCase() + lastName.substr(1).toLowerCase();
//window.alert("Your name is: " + firstName.concat(" ").concat(lastName));

//STEP 4
//var text = "The quick brown fox jumps over the lazy dog";
//window.alert(text.indexOf("fox"));

//STEP 5
//var text = "The quick brown fox jumps over the lazy fox";
//window.alert(text.lastIndexOf("fox"));

//STEP 6
//var text = "The quick brown fox jumped over the lazy dog";
//var fullName = window.prompt("Please provide your full name");
//window.alert(text.replace("the lazy dog", fullName.trim()));

//STEP 7
//var text = "The quick brown fox jumped over the lazy dog";
//var searchWord = window.prompt("Please provide a word to search");
//if (text.search(searchWord) > 0) {
//   window.alert("Found it! " + searchWord + "is in position " + text.search(searchWord)); 
//} else {
//   window.alert("Sorry! No Entry!");
//}

//STEP 8
//var old_string = "The quick brown fox jumps over the lazy dog";
//var index = old_string.indexOf("the lazy dog");
//var length = "the lazy dog".length;
//var new_string = old_string.slice(index, index + length);
//window.alert(new_string.toUpperCase());

//STEP 9
//var text = "            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG         ";
//window.alert(text.trim().toLowerCase());

//STEP 10
//var text = "the quick brown fox jumps over the lazy dog";
//window.alert(text.charAt(0).toUpperCase() +  text.substr(1));
