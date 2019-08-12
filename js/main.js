var maletaEstaAberta = false;
var buscaEstaAberta = false;
var Xestaaberto  = false;
var lupaEscondida = false;

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
    $(".close").show("slow");
    $(".lupaBusca").hide("slow");
    buscaEstaAberta = true; // Quando eu clicar na lupa eu vou mostrar a busca
    Xestaaberto = true;    // Quando eu clicar na lupa Vou mostrar o X
    lupaEscondida = true; // quando eu clicar na lupa eu vou esconder ela
  }
 else if (buscaEstaAberta == true) {
    $(".barraBusca").hide("slow");
    $(".close").hide("slow");
    $(".lupaBusca").show("slow");
    buscaEstaAberta = false;
    Xestaaberto = false;
    lupaEscondida = true; 
  }
}