// Función para mostrar la alerta solicitada al hacer clic en los enlaces del menú
function mostrarAlerta(evento, pagina) {
    // Si el usuario hace clic en la página actual, prevenimos la recarga innecesaria (evita solicitud HTTP redundante)
    if (window.location.pathname.includes(evento.currentTarget.getAttribute('href'))) {
        evento.preventDefault();
    }
    alert("¡Has seleccionado e ingresado a la sección: " + pagina + "!");
}