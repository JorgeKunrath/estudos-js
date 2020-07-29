// 1 2 3 4 5 6 7 8 9

// a b c d e f g h i
// j k l m n o p q r
// s t u v w x y z


let name = "Jorge Kunrath Santin"



// ==================================================
console.log("=============== TREAT NAME ===================")

// treat the name
  // lowercase for compairison
  // desconstruct "á" to "a" + "´"
  const nameTreated = name
  .toLowerCase()
  .normalize("NFD")
  .replace(/[^a-z]/g, "") // remove anything that is not a to z lowercase
  // .replace(/[\u0300-\u036f]/g, "") // regex character class to match the U+0300 → U+036F range (the accents etc) ->not enough (but don't needed)


// get the name (...and the date, latter)
// document.getElementById("calculate").addEventListener("click", function calcClick() {
//   name = document.forms["form"]["name"].value.toLowerCase()

  console.log("NAME:", name, name.length)
  console.log("NAME Treated:", nameTreated, nameTreated.length)





// ==================================================
// CONSTRUCT THE LETTER'S ARRAYS
console.log("=============== MAKE ARRAYS ===================")


// const fullName = nameTreated.split("")
const vowels = nameTreated.replace(/[^aeiou]/g, "").split("")
const consonants = nameTreated.replace(/[^bcdfghjklmnpqrstvwxyz]/g, "").split("")


// debug
// console.log("name:", name)
// console.log("fullName:", fullName)
console.log("vowels:", vowels)
console.log("consonants:", consonants)

// 🍰




// ==================================================
// MAP THE LETTERS TO NUMBERS
console.log("=============== SET VALUES ===================")

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

// make the numbers arrays
const vowelsNum = vowels.map(convert)
const consonantsNum = consonants.map(convert)
const fullNameNum = [...vowelsNum, ...consonantsNum]

// debug
console.log("vowelsNum:", vowelsNum)
console.log("consonantsNum:", consonantsNum)
console.log("fullNameNum:", fullNameNum)

// wonderfull 🥳





// ==================================================
// SUM ALL NUMBERS TO SINGLE ALGARISMS
console.log("=============== SUM ===================")

function somatory(arr) {
  
  // if is a empty array or not a array at, return
  if(arr.length == 0 || !Array.isArray(arr)) return

  let sum = (acc, num) => acc + num

  // receives arr and reduce it
  let step = arr.reduce(sum)
  // initialize variable with first result
  let htmlOutput = `${step}`
  
  // while result is not a single digit
  while(step > 9){
    // remakes an array from it
    let stepArray = [...`${step}`].map(Number)
    // reduce again
    step = stepArray.reduce(sum)
    // update the variable
    htmlOutput += ` ➤ ${step}`
  }

  // return the variable
  return htmlOutput
}

let vowelsRes = somatory(vowelsNum)
let consonantsRes = somatory(consonantsNum)
let fullNameRes = somatory(fullNameNum)


// debug
console.log("RESULT vowels:", vowelsRes)
console.log("RESULT consonants:", consonantsRes)
console.log("RESULT full name:", fullNameRes)

// 😤👌