// Array para almacenar los nombres de los amigos.
let amigos = [];

// Añadir un event listener para que la tecla "Enter" también agregue al amigo.
document.getElementById('amigo').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Evita el comportamiento por defecto del Enter (ej: recargar la página)
        adicionar();
    }
});

function adicionar() {
    // Obtener el campo de texto y la lista de amigos del DOM.
    const amigoInput = document.getElementById('amigo');
    const listaAmigos = document.getElementById('listaAmigos');
    const nombreAmigo = amigoInput.value.trim();

    // Validar entrada: Si el campo está vacío, mostrar alerta.
    if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre válido.');
        return; // Detiene la ejecución de la función.
    }

    // Validación extra: Evitar nombres duplicados (insensible a mayúsculas/minúsculas).
    if (amigos.map(amigo => amigo.toLowerCase()).includes(nombreAmigo.toLowerCase())) {
        alert('Este nombre ya ha sido agregado. Por favor, ingresa un nombre diferente.');
        amigoInput.value = '';
        return;
    }

    // Agregar nombres: Añadir el nombre a la lista.
    amigos.push(nombreAmigo);

    // Visualizar la lista: Actualizar la lista visible en la página.
    listaAmigos.textContent = amigos.join(', ');

    // Limpiar el campo de texto para el siguiente nombre.
    amigoInput.value = '';
}

function sortear() {
    // Validación: Asegurarse de que hay al menos 2 amigos para el sorteo.
    if (amigos.length < 2) {
        alert('Agrega al menos 2 amigos para poder realizar el sorteo.');
        return;
    }

    // Sorteo aleatorio: Elegir un índice aleatorio del array de amigos.
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];
    // Mostrar el resultado del sorteo.
    const elementoResultado = document.getElementById('resultado');
    elementoResultado.textContent = `El amigo secreto sorteado es: ${amigoSorteado}`;
}

function reiniciar() {
    // Reiniciar el juego: limpiar el array y los elementos del DOM.
    amigos = [];
    document.getElementById('listaAmigos').textContent = '';
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('amigo').value = '';
}
