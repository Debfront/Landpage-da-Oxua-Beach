var MaletaAberta = false;
function mostrarMaleta() {
    if (MaletaAberta == false) {
        $('#maleta').show();
        return MaletaAberta = true;
    }
    if (MaletaAberta == true) {
        $('#maleta').hide();
        return MaletaAberta = false;
    }
}


