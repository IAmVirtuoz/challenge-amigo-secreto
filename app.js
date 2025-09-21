// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    amigoAgregado = document.getElementById('amigo').value;

    if (amigoAgregado == "") {
        alert("Por favor, agregue a un amigo.");
    } else {
        amigos.push(amigoAgregado);
        limpiarCaja();
        //console.log(amigos);
    }
}

function limpiarCaja() {
    let valorCaja = document.getElementById('amigo').value = '';
}