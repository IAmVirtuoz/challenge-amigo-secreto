// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
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
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(function(amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    })
}