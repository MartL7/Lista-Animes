// Pronto Habrá más Novedades. Gracias por esperar.
function Agregar() {
    Swal.fire({
        title: "Advertencia",
        text: "Pronto Estará Disponible",
        icon: "warning",
        confirmButtonText: "Volver",
        footer:
        '<span class="Texto-Rojo"> Estoy trabajando en ello :( </span>',
        background: "#000",
        allowOutsideClick: false,
        buttonsStyling: false,
        customClass: {
            popup: "Contenedor-Alerta",
            confirmButton: "Boton"
        },
    })
}
