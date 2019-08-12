var maletaEstaAberta = false;
var buscaEstaAberta = false;

$(document).ready(function () {
  $('.slide-principal').slick({
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: '.bolaNext',
    prevArrow: '.bolaPrev',
  });
})

function mostrarMaleta() {
  if (maletaEstaAberta == false) {
    $(".menumaleta").show("slow");
    maletaEstaAberta = true;
  }
 else if (maletaEstaAberta == true) {
    $(".menumaleta").hide("slow");
    maletaEstaAberta = false;
  }
}

function mostrarBusca() {
  if (buscaEstaAberta == false) {
    $(".barraBusca").show("slow");
    buscaEstaAberta = true;
  }
 else if (buscaEstaAberta == true) {
    $(".barraBusca").hide("slow");
    buscaEstaAberta = false;
  }
}
