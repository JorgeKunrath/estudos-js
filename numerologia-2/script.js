// 1 2 3 4 5 6 7 8 9

// a b c d e f g h i
// j k l m n o p q r
// s t u v w x y z


let name = "Jorge Kunrath Santin"

// get the name (...and the date, latter)
// document.getElementById("calculate").addEventListener("click", function calcClick() {
//   name = document.forms["form"]["name"].value.toLowerCase()

//   console.log("NAME:", name)
// })




// ==================================================
// CONSTRUCT THE LETTER'S ARRAYS
console.log("=============== FILTER ===================");

// treat the name
  // lowercase for compairison
  // desconstruct "á" to "a" + "´" -> they are removed after the convert function because they have become "undefined"
const nameTreated = name
  .toLowerCase()
  .normalize("NFD")
  // .replace(/[\u0300-\u036f]/g, "") // regex character class to match the U+0300 → U+036F range (the accents etc)

// make a array
const fullName = nameTreated.split("")

// filter the vowels
const vowels = fullName.filter(char => (
  char == "a" ||
  char == "e" ||
  char == "i" ||
  char == "o" ||
  char == "u"
))
  
// remove the vowels from full name
const consonants = fullName.filter(x => !vowels.includes(x))

// debug
console.log("name:", name)
console.log("fullName:", fullName)
console.log("vowels:", vowels)
console.log("consonants:", consonants)

// 🍰




// ==================================================
// MAP THE LETTERS TO NUMBERS
console.log("=============== MAP ===================");

// used for conversion
const table = {
  a:1, j:1, s:1,
  b:2, k:2, t:2,
  c:3, l:3, u:3,
  d:4, m:4, v:4,
  e:5, n:5, w:5,
  f:6, o:6, x:6,
  g:7, p:7, y:7,
  h:8, q:8, z:8,
  i:9, r:9
}

// takes the letter and pass as key to table returning the numeric value
const convert = char => table[char]

// remove anything that is not present in table
  // "undefined" is false by default (I guess)
const removeUndefined = num => num

// make the arrays
const vowelsNum = vowels.map(convert).filter(removeUndefined)
const consonantsNum = consonants.map(convert).filter(removeUndefined)
const fullNameNum = fullName.map(convert).filter(removeUndefined)

// debug
console.log("vowelsNum:", vowelsNum)
console.log("consonantsNum:", consonantsNum)
console.log("fullNameNum:", fullNameNum)

// wonderfull 🥳




// ==================================================
// NOW IT'S TIME TO REDUCE, SPLIT AND REPEAT
console.log("=============== REDUCE ===================");


function reducer(obj) {

  // receives obj and reduce it
  let reduced = obj.reduce((acc, num) => acc + num)
  // initialize variable with first result
  let htmlOutput = `${reduced}`
  
  // if result is not a single digit, do it again
  while(reduced > 10){
    // make the object
    let reducedObject = reduced.toString(10).split("").map(Number)
    // reduce
    reduced = reducedObject.reduce((acc, num) => acc + num)
    // update the variable
    htmlOutput += ` ➤ ${reduced}`
  }

  // return the variable
  return htmlOutput
}


// debug
console.log("RESULT vowels:", reducer(vowelsNum));
console.log("RESULT consonants:", reducer(consonantsNum));
console.log("RESULT full:", reducer(fullNameNum));

// 😤👌





// OOOOOOOOOOLLLLLLLLLDDDDDDDDD
// // pega as infos dos inputs
// document.getElementById("get").addEventListener("click", numerology);

// // main function
// function numerology() {
// 	// reset
// 	vowels = [];
// 	consonants = [];
// 	all = [];
// 	var cleanHtml = document.getElementsByClassName("result");
// 	for (var i = 0; i < cleanHtml.length; i++) {
// 		cleanHtml[i].innerHTML = "";
// 	}

// 	// define
// 	name = document.forms["form"]["name"].value.toLowerCase();
// 	// date = document.forms["form"]["date"].value;

// 	// test
// 	console.log("nome:", name);
// 	// console.log("nascimento:", date);

// 	// atribute values to letters
// 	for (var i = 0; i < name.length; i++) {
// 		var isVowel = false;
// 		attrVowel(name[i]);
// 		if (!isVowel) {
// 			attrConsonant(name[i]);
// 		}
// 	}

// 	// unite vowels and consonants
// 	attrAll(vowels);
// 	attrAll(consonants);

// 	// test
// 	console.log("vogais", vowels);

// 	console.log("consoantes", consonants);
// 	console.log("todos", all);

// 	// run somatory and print in screen each result
// 	soma(vowels, "vowels");
// 	// var vow1 = soma(vowels, "vowels");
// 	// console.log("vow1:", vow1);

// 	soma(consonants, "consonants");
// 	soma(all, "all");

// 	console.log("----end-----");
// }

// function soma(input, type) {
// 	var somatory = [];

// 	for (var i = 0, len = input.length; i < len; i++) {
// 		somatory = +somatory + +input[i];
// 	}

// 	console.log(type, somatory);
// 	document.getElementById(type).innerHTML +=
// 		somatory + "<span class='separator'> → </span>";

// 	if (somatory > 9) {
// 		var somatoryString = somatory.toString();
// 		var nextInput = [];
// 		for (var i = 0, len = somatoryString.length; i < len; i++) {
// 			nextInput.push(+somatoryString.charAt(i));
// 		}
// 		// console.log("nextInput inside soma:", nextInput);

// 		// recursive
// 		soma(nextInput, type);
// 	}

// 	// return nextInput;
// }

// // verifica a letra e atribui um valor
// function attrVowel(input) {
// 	if (input == "a") {
// 		vowels.push(1);
// 		isVowel = true;
// 	} else if (input == "e") {
// 		vowels.push(5);
// 		isVowel = true;
// 	} else if (input == "i") {
// 		vowels.push(9);
// 		isVowel = true;
// 	} else if (input == "o") {
// 		vowels.push(6);
// 		isVowel = true;
// 	} else if (input == "u") {
// 		vowels.push(3);
// 		isVowel = true;
// 	}
// }
// function attrConsonant(input) {
// 	if (input == "j" || input == "s") {
// 		consonants.push(1);
// 	} else if (input == "b" || input == "k" || input == "t") {
// 		consonants.push(2);
// 	} else if (input == "c" || input == "l") {
// 		consonants.push(3);
// 	} else if (input == "d" || input == "m" || input == "v") {
// 		consonants.push(4);
// 	} else if (input == "n" || input == "w") {
// 		consonants.push(5);
// 	} else if (input == "f" || input == "x") {
// 		consonants.push(6);
// 	} else if (input == "g" || input == "p" || input == "y") {
// 		consonants.push(7);
// 	} else if (input == "h" || input == "q" || input == "z") {
// 		consonants.push(8);
// 	} else if (input == "r") {
// 		consonants.push(9);
// 	}
// }
// // junta vogal e consoante
// function attrAll(input) {
// 	for (var j = 0; j < input.length; j++) {
// 		all.push(input[j]);
// 	}
// }
