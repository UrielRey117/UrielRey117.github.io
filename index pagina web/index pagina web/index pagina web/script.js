document.querySelector(`h1`).addEventListener(`click`,()=>{
document.body.style.background = `white`;
})


//est es el script funciona sin base de datos las guarda temporalment ene la cache del navegador
function handleSubmit(event) {
    event.preventDefault(); // Previene que el formulario se envíe y la página se recargue
    const email = document.querySelector('.box[type="email"]').value; // Obtiene el valor del campo de correo electrónico
    const password = document.querySelector('.box[type="password"]').value; // Obtiene el valor del campo de contraseña

    // Validación sencilla
    if (email && password) { // Verifica que ambos campos no estén vacíos
        window.location.href = 'index.html'; // Redirige al usuario a 'index.html'
    } else {
        alert('Por favor ingresa tu correo y contraseña.'); // Muestra una alerta si los campos están vacíos
    }
}
