let amigos = [];

function agregarAmigo() {
    amigoAgregado = document.getElementById('amigo').value;

    if (amigoAgregado == "") {
        alert("Por favor, agregue a un amigo.");
    } else {
        amigos.push(amigoAgregado);
        limpiarCaja();
        actualizarLista();
        //console.log(amigos);
    }
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

function actualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let indice = 0; indice < amigos.length; indice++) {
        const elementoLista = amigos[indice];
        let lista = document.createElement("li");
        lista.textContent = elementoLista;
        listaAmigos.appendChild(lista);
    } 
}