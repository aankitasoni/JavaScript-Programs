/** Changing Casing in Text so that it converts the first character of the name in Upper Case and rest character of the name in Lower Case. **/
//1 Create a variable that stores the name that user enters via prompt.

var name= prompt("What is your name?");

//2 Captalise the first letter of their name.
//a Isolate the first character.

var firstChar = name.slice(0,1);

//b Turn the first character to upper case.

var upperCaseFirstChar = firstChar.toUpperCase();

//c Isolate the rest of the name.

var restOfName = name.slice(1,name.length);

//d Change the rest of the name to lower case.

restOfName = restOfName.toLowerCase();

//e Concactenate the first character with the rest of the character.

var capitalisedName = upperCaseFirstChar + restOfName;

//3 Use the capitalised version of their name to greet them using an alert.

alert("Hello, "+ capitalisedName);

