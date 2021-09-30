
// codigo Lukas Rocha

let etanol, gasolina;
function calcular() {
    etanol = parseFloat(frmFlex.txtEtanol.value.replace(",", "."));
    gasolina = parseFloat(frmFlex.txtGasolina.value.replace(",", "."));
    if (gasolina > etanol) {
        document.getElementById("status").src = "imagens/etanol.png";
    } else {
        document.getElementById("status").src = "imagens/gasolina.jpg";
    }
}
function resetar() {
    document.getElementById("status").src = "imagens/neutro.png";
}

