function encriptar() {
    let mensaje = document.getElementById("texto").value;
  
    // Validamos que se haya ingresado un mensaje
    if (mensaje.trim().length === 0) {
      alert("Ingrese un mensaje para encriptar");
      return;
    }
  
    // Validamos que el mensaje no contenga mayúsculas o acentos
    if (/[A-ZÁÉÍÓÚÜ]/.test(mensaje)) {
      alert("El mensaje no puede contener mayúsculas o acentos");
      return;
    }
  
    // Encriptamos el mensaje
    mensaje = mensaje.replaceAll("e", "enter");
    mensaje = mensaje.replaceAll("i", "imes");
    mensaje = mensaje.replaceAll("a", "ai");
    mensaje = mensaje.replaceAll("o", "ober");
    mensaje = mensaje.replaceAll("u", "ufat");
  
    // Mostramos el mensaje encriptado y ocultamos la imagen del muñeco
    let encriptado = document.getElementById("encriptado");
    encriptado.style.display = "flex"; // Mostramos el contenedor "encriptado"
    let titulo = encriptado.querySelector(".titulo-mensaje");
    titulo.innerHTML = "Mensaje encriptado";
    let parrafo = encriptado.querySelector("#parrafo");
    parrafo.innerHTML = mensaje;
    let imagen = document.getElementById("munheco");
    imagen.style.display = "none";
  }
  
  function desencriptar() {
    let mensaje = document.getElementById("texto").value;
  
    // Validamos que se haya ingresado un mensaje
    if (mensaje.trim().length === 0) {
      alert("Ingrese un mensaje para desencriptar");
      return;
    }
  
    // Validamos que el mensaje no contenga mayúsculas o acentos
    if (/[A-ZÁÉÍÓÚÜ]/.test(mensaje)) {
      alert("El mensaje no puede contener mayúsculas o acentos");
      return;
    }
  
    // Desencriptamos el mensaje
    mensaje = mensaje.replaceAll("enter", "e");
    mensaje = mensaje.replaceAll("imes", "i");
    mensaje = mensaje.replaceAll("ai", "a");
    mensaje = mensaje.replaceAll("ober", "o");
    mensaje = mensaje.replaceAll("ufat", "u");
  
    // Mostramos el mensaje desencriptado y ocultamos la imagen del muñeco
    let encriptado = document.getElementById("encriptado");
    encriptado.style.display = "block"; // Mostramos el contenedor "encriptado"
    let titulo = encriptado.querySelector(".titulo-mensaje");
    titulo.innerHTML = "Mensaje desencriptado";
    let parrafo = encriptado.querySelector("#parrafo");
    parrafo.innerHTML = mensaje;
    let imagen = document.getElementById("munheco");
    imagen.style.display = "none"; 
  }


  function copiar() {
    const textoEncriptado = document.getElementById('parrafo').innerHTML;
    if (textoEncriptado == "Ingresa el texto que deseas encriptar o desencriptar") {
        alert('No hay texto encriptado para copiar');
        return;
    }
    const tempInput = document.createElement('input');
    tempInput.value = textoEncriptado;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('Texto encriptado copiado al portapapeles');
}