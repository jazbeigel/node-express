const getHour = () =>{
    const horas = new Date().getHours();
    const minutos = new Date().getMinutes();
    const segundos = new Date().getSeconds();
    return horas + ":" + minutos + ":" + segundos
}


export default getHour