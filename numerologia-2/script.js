// 1 2 3 4 5 6 7 8 9

// a b c d e f g h i
// j k l m n o p q r
// s t u v w x y z

let name = "Jorge Kunrath Santin"

// get the name (...and the date, latter)
// document.getElementById("calculate").addEventListener("click", function calcClick() {
//   name = document.forms["form"]["name"].value.toLowerCase();

//   console.log("NAME:", name)
// })


// clean the name and make a array
const fullName = name.toLowerCase().split("").filter(spaces => spaces !== " ")

// filter the vowels
const vowels = fullName.filter(l => (
  l == "a" ||
  l == "e" ||
  l == "i" ||
  l == "o" ||
  l == "u"
  ))
  
// remove the vowels
const consonants = fullName.filter(x => !vowels.includes(x))


// debug
console.log("NAME:", name)
console.log("FULLNAME:", fullName)
console.log("VOWELS:", vowels)
console.log("CONSONANTS:", consonants)






// NOW MAP THE LETTERS TO NUMBERS










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
