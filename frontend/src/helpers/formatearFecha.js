export function formatearFecha(fecha) {
    const fechaObjeto = new Date(fecha);
    const mes = fechaObjeto.getMonth() + 1; // Los meses en JavaScript van de 0 a 11, por eso se suma 1
    const dia = fechaObjeto.getDate();
    const año = fechaObjeto.getFullYear();
    const hora = fechaObjeto.getHours();
    const minutos = fechaObjeto.getMinutes();
    const segundos = fechaObjeto.getSeconds();
    const milisegundos = fechaObjeto.getMilliseconds();
    
    return `${mes}/${dia}/${año} ${hora}:${minutos}:${segundos}.${milisegundos} ms`;
  }
  
  