var maletaEstaAberta = false;

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

