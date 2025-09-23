// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

// Array para guardar amigos
let listaDeAmigos = [];

// Expresión regular para validar nombres (solo letras, espacios y tildes)
const regexNombre = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s]+$/;

// Función agregar amigos
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let amigo = inputAmigo.value.trim(); // elimina espacios en blanco

    if (amigo === "") {
        alert("Por favor, ingresa el nombre de un amigo.");
        return;
    }

       // Validar que no se repitan nombres
    if (listaDeAmigos.includes(amigo)) {
        alert("Ese nombre ya fue agregado.");
        inputAmigo.value = "";
        return;
    }

    // Validar caracteres permitidos
    if (!regexNombre.test(amigo)) {
        alert("El nombre solo puede contener letras y tildes, sin números ni símbolos.");
        inputAmigo.value = "";
        return;
    }

    // Validar que no se repitan nombres (sin importar mayúsculas/minúsculas)
    if (listaDeAmigos.some(n => n.toLowerCase() === amigo.toLowerCase())) {
        alert("Ese nombre ya fue agregado.");
        inputAmigo.value = "";
        return;
    }



    listaDeAmigos.push(amigo);

    // Limpiar input
    inputAmigo.value = "";

    // Actualizar lista en pantalla
    actualizarLista();
}

// Función para actualizar la lista de amigos en el HTML
function actualizarLista() {
    let listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = ""; // limpiar antes de volver a escribir

    for (let i = 0; i < listaDeAmigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = listaDeAmigos[i];
        listaHTML.appendChild(li);
    }
}

// Función para sortear un amigo aleatoriamente
function sortearAmigo() {
    let resultado = document.getElementById("resultado");

    if (listaDeAmigos.length === 0) {
        resultado.innerHTML = "<li>No hay amigos para sortear.</li>";
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSorteado = listaDeAmigos[indiceAleatorio];

    resultado.innerHTML = "<li>🎉 El amigo sorteado es: <b>" + amigoSorteado + "</b></li>";

 // Eliminar el amigo sorteado de la lista
    listaDeAmigos.splice(indiceAleatorio, 1);

    // Actualizar la lista en pantalla
    actualizarLista();

}


