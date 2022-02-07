

var eidLon = document.getElementById('idLon');
var eidLat = document.getElementById('idLat');

function verificarValor() {
    if (eidLon.value != 0) {
        eidLon.classList.add('float');
    }
    console.log(eidLat.value);
    if (eidLat.value != 0) {
        eidLat.classList.add('float');
    }
    
}

function adicionarClasseFloat() {
    eidLon.classList.add('float');
    eidLat.classList.add('float');
}

function removerClasseFloat() {
    eidLon.classList.remove('float');
    eidLat.classList.remove('float');
    verificarValor()
}
onload = () => {
    verificarValor();
}


