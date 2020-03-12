
var squares = document.getElementsByClassName("square");

var s0 = squares[0];
var s1 = squares[1];
var s2 = squares[2];
var s3 = squares[3];
var s4 = squares[4];
var s5 = squares[5];
var s6 = squares[6];
var s7 = squares[7];
var s8 = squares[8];


s0.addEventListener('click', function() {input(s0);})
s1.addEventListener('click', function() {input(s1);})
s2.addEventListener('click', function() {input(s2);})
s3.addEventListener('click', function() {input(s3);})
s4.addEventListener('click', function() {input(s4);})
s5.addEventListener('click', function() {input(s5);})
s6.addEventListener('click', function() {input(s6);})
s7.addEventListener('click', function() {input(s7);})
s8.addEventListener('click', function() {input(s8);})


var player = "x";

var nextPlayer = document.getElementsByTagName('span');

nextPlayer[0].innerHTML = player;

function input(square) {
  if (player == "x") {
    square.innerHTML = "x";
    player = "o";
  } else {
    square.innerHTML = "o";
    player = "x";
  }
  nextPlayer[0].innerHTML = player;

  checkWin();
}

function checkWin() {

  var line1 = s0.innerText + s1.innerText + s2.innerText;
  var line2 = s3.innerText + s4.innerText + s5.innerText;
  var line3 = s6.innerText + s7.innerText + s8.innerText;
  // console.log("linha 1:", line1);
  // console.log("linha 2:", line2);
  // console.log("linha 3:", line3);

  var row1 = s0.innerText + s3.innerText + s6.innerText;
  var row2 = s1.innerText + s4.innerText + s7.innerText;
  var row3 = s2.innerText + s5.innerText + s8.innerText;
  // console.log("coluna 1:", row1);
  // console.log("coluna 2:", row2);
  // console.log("coluna 3:", row3);

  var diagdec = s0.innerText + s4.innerText + s8.innerText;
  var diagcres = s2.innerText + s4.innerText + s6.innerText;
  // console.log("diagonal decrescente:", diagdec);
  // console.log("diagonal crescente:", diagcres);

  var full = s0.innerText + s1.innerText + s2.innerText + s3.innerText + s4.innerText + s5.innerText + s6.innerText + s7.innerText + s8.innerText;
  // console.log("completo:", full, full.length);

  // console.log("---------------------------------");

  if (line1 === "xxx" || line2 === "xxx" || line3 === "xxx" || row1 === "xxx" || row2 === "xxx" || row3 === "xxx" || diagdec === "xxx" || diagcres === "xxx")
    alert("winner: x");
  
  if (line1 === "ooo" || line2 === "ooo" || line3 === "ooo" || row1 === "ooo" || row2 === "ooo" || row3 === "ooo" || diagdec === "ooo" || diagcres === "ooo")
    alert("winner: o");

  if (full.length === 9) {
    if (line1 != "xxx" && line2 != "xxx" && line3 != "xxx" && row1 != "xxx" && row2 != "xxx" && row3 != "xxx" && diagdec != "xxx" && diagcres != "xxx" && line1 != "ooo" && line2 != "ooo" && line3 != "ooo" && row1 != "ooo" && row2 != "ooo" && row3 != "ooo" && diagdec != "ooo" && diagcres != "ooo")
      alert("old lady");
  }
}