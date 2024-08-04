const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

// creo el objeto sustituciones
const sustituciones = {
  e: 'enter',
  i: 'imes',
  a: 'ai',
  o: 'ober',
  u: 'ufat'
};


function encriptar(stringEncriptada) {
  return stringEncriptada.toLowerCase().replace(/[eioua]/g, match => sustituciones[match]);
}

function descencriptar(stringDescencriptada) {
  const descifrado = Object.fromEntries(
    Object.entries(sustituciones).map(([key, value]) => [value, key])
  );
  return stringDescencriptada.toLowerCase().replace(/enter|imes|ai|ober|ufat/g, match => descifrado[match]);
}

// Función para validar la entrada (opcional)
function validarEntrada(texto) {
  return /^[a-zA-Z\s]+$/.test(texto);
}

function btnEncriptar() {
  if (!validarEntrada(textArea.value)) {
    alert("Por favor, ingrese solo letras y espacios.");
    return;
  }
  const textEncriptado = encriptar(textArea.value);
  mensaje.value = textEncriptado;
  textArea.value = "";
  mensaje.style.backgroundImage = "none";
}


function btnDescencriptar() {
  const textDescencriptado = descencriptar(textArea.value);
  mensaje.value = textDescencriptado;
  textArea.value = "";
  mensaje.style.backgroundImage = "none";
}

//funcion para copiar y crea alert
function btnCopiar() {
  navigator.clipboard.writeText(mensaje.value)
    .then(() => alert("Texto copiado al portapapeles!"))
    .catch(err => console.error('Error al copiar:', err));
}
