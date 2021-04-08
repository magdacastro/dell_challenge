//Evita que a página mude de localização
Array.from(document.querySelectorAll('section#topcontent div.bottom-offset-small a')).map((el) => {
  el.addEventListener('click', (event) => {
    event.preventDefault();
  });
});

//Altera a cor de fundo da imagem principal de todas as seções de acordo com a posição horizontal do link
Array.from(document.querySelectorAll('section#topcontent div.bottom-offset-small a')).map((el, index) => {
  el.querySelector("i").style.color = getColor(index % 3);
});

function getColor(n) {
  switch (n) {
    case 0:
      return "purple";
    case 1:
      return "green";
    case 2:
      return "orange";

  }
}

//Troca todas as imagens dos Networkingprodutos por Cameras, Photo & Videoaqueles
var arrayChange = ["Networking", "Cameras, Photo & Video"];
var arrayTemp = [];
var allImgs = document.querySelectorAll("img");

for (var i = 0; i < arrayChange.length; i++) {
  var h2 = Array.from(document.querySelectorAll("h2")).find((el) => { return el.innerText == arrayChange[i]; });

  var imgs = h2.parentElement.parentElement.parentElement.querySelectorAll("div.half-modules-inner-container img");

  var addresses = Array.from(imgs).map((el) => { return el.src; });
  arrayTemp.push(addresses);
}

for (var i = 0; i < 4; i++) {
  var img1 = Array.from(allImgs).find((el) => { return el.src == arrayTemp[0][i]; });
  var img2 = Array.from(allImgs).find((el) => { return el.src == arrayTemp[1][i]; });

  img1.src = arrayTemp[1][i];
  img2.src = arrayTemp[0][i];
}

//Cria uma função de auto-chamada que calcula a soma de todos os produtos listados na Power, Batteries & Adaptersseção e dispara um alerta com o resultado.
(function () {
  var h2 = Array.from(document.querySelectorAll("h2")).find((el) => { return el.innerText == "Power, Batteries & Adapters"; });

  var findPrices = h2.parentElement.parentElement.parentElement.querySelectorAll("div.half-modules-inner-container div.half-hero-pricing");

  var prices = Array.from(findPrices).map((el) => {

    return parseInt(el.innerText.replace(/[^0-9]/g, ""));
  });

  var sum = 0;
  for (var i = 0; i < prices.length; i++) {
    sum += prices[i];
  }

  var priceFormat = sum / 100;
  priceFormat = `$${priceFormat}`.replace('.', ',');
  alert("A soma dos itens que estão a venda na seção 'Power, Batteries & Adapters' é " + priceFormat);
})();
