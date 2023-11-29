document.getElementById('Boton').addEventListener('click', function(event) {
    event.stopPropagation(); // Evita la propagación del evento
    console.log('clic en el botón');
});

document.getElementById('Div').addEventListener('click', function() {
    console.log('clic en el div');
});
