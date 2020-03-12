// seleciona a lista de itens q tem as cores
var color = document.querySelectorAll("li");
var hexCode;

// itera pela lista adicionando o evento de click
  // como funciona esses parametros sendo passados pra frente?
color.forEach(function(element, j) {
  element.addEventListener("click", function() {
    selectColor(this.innerText, j);
  });
});

// retorna o valor hex para cada vez que pego uma amostra de cor
function selectColor(hex, j) {
  console.log("hex:::", hex);
  color[j].style.setProperty("--bk", hex);
  hexCode = hex;
  return hexCode;
}

var pixel = document.querySelectorAll("span");

// adiciona evento de click no grid
pixel.forEach(function(element, j) {
  element.addEventListener("click", function() {
    setColor(hexCode, j);
  });
});

// insere a cor no grid
function setColor(hex, j) {
  console.log("hex:::", hex);
  pixel[j].style.setProperty("--bk", hex);
  hexCode = hex;
  return hexCode;
}