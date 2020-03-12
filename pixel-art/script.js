(function() {
  "use strict";

  var spanCount = 1500;
  var spanContent = "";
  for (var i = 0; i < spanCount; i++) {
    spanContent += "<span></span>";
  }
  document.querySelector(".grid").innerHTML = spanContent;

  var hexCode = "#666666";

  // itera pela lista adicionando o evento de click
  // como funciona esses parametros sendo passados pra frente?
  document.querySelectorAll("li").forEach(function(element) {
    element.style.setProperty("--bk", element.innerText);
    element.addEventListener("click", function() {
      hexCode = this.innerText;
    });
  });

  // adiciona evento de click no grid
  document.querySelectorAll("span").forEach(function(element) {
    element.addEventListener("click", function() {
      element.style.setProperty("--bk", hexCode);
    });
  });
})();
