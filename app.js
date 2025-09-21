//Se crea un array de amigos
let amigos = [];


//Función para agregar un amigo al array "amigos"
//Primero verifica que el input no esté vacío
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

//Función para limpiar el input
function limpiarCaja() {
    document.getElementById('amigo').value = '';
}


//Función para actualizar y mostrar la lista en HTML
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

//Función para elegir un amigo aleatorio del array como amigo secreto
function elegirAmigoAleatorio() {
    if (amigos.length != 0) {
        let amigoAleatorio =  Math.floor(Math.random()*amigos.length+1);
        let resultadoAmigo = document.getElementById("resultado");
        resultadoAmigo.innerHTML = amigos[amigoAleatorio];
    } else {
        alert("Por favor, agregue a un amigo.");
    }

}