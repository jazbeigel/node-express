const date = () => {
    const ahora = new Date();
    let fechaCompleta = "";

    const opciones = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
    };

    return fechaCompleta = ahora.toLocaleString("es-AR", opciones);
}

export default fechaCompleta