//Variables - переменные

/*alert ("It's testing site JS");*/ 
var message; 
var myMessage;
myMessage = "message"; //оператор присваивания и значение

var myNumber = 10.124; 
var myString = "Hello JS Wolrd"; //"10.484" --dвоспринимается как строка
var myBoolean = true; ///false
var myNull = null;
var myUndefined = undefined;
var myObject = {
	name: "Vladimir",
	age: 17
};

//Numbers

/*var result = 40 + 10;
alert (result);*/

/*alert(40 + 10);*/
/*   console.log(40 + myNumber);//	+
console.log(40 - myNumber);//	-
console.log(40 * myNumber);//	*
console.log(40 / myNumber);//	/
myNumber = myNumber + 1;
console.log(myNumber);
console.log(Math.round(5.632));
console.log(Math.ceil(5.632)); // округление в большую сторону
console.log(Math.floor(5.632)); // округление в меньшую сторону

var newNumber = 2.624;
console.log(newNumber.toFixed(1));     */ //кол-во знаков после "."

//СТРОКИ

/*  console.log("40" + myNumber);
console.log(myString + " WOW");
console.log(myString.toLowerCase()); // все маленькими буквами
console.log(myString.toUpperCase()); */ // все большими буквами

//МАССИВЫ

/*var names = ["Hello", "JS", "World"];
console.log(names[1].toLowerCase());

names[0] = "WOW";
console.log(names[0]);

names.push("TEST");
console.log(names[3]);

console.log(names);*/ // раскрытие всего массива

//УСЛОВИЯ

if (10 >= 5) {
	console.log("Complete")
}
if ('5' == 5) {
	console.log("Complete")
}

if ("TESTING" !== "WORS" && myNumber < 20) {  // проверяется не только значение, но и типы аргументов
	console.log("Complete")
}