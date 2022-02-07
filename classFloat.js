

var eidLon = document.getElementById('idLon');
var eidLat = document.getElementById('idLat');

function verificarValor() {
    if (eidLon.value != "") {
        eidLon.classList.add('float');
    }
    
    if (eidLat.value != "") {
        eidLat.classList.add('float');
    }
    
}

function adicionarClasseFloatLon() {
    eidLon.classList.add('float');
}

function removerClasseFloatLon() {
    eidLon.classList.remove('float');
    verificarValor()
}

function adicionarClasseFloatLat() {
    eidLat.classList.add('float');
}

function removerClasseFloatLat() {
    eidLat.classList.remove('float');
    verificarValor()
}
onload = () => {
    verificarValor();
}


