import { tiposError, mensajes } from "./customErrors.js";

const camposDeFormulario = document.querySelectorAll("[required]");
const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const listaRespuestas = {
    nombre: e.target.elements["nombre"].value,
    apellido: e.target.elements["apellido"].value,
    email: e.target.elements["email"].value,
    telefono: e.target.elements["telefono"].value,
    contraseña: e.target.elements["contraseña"].value,
  
  };
  localStorage.setItem("registro", JSON.stringify(listaRespuestas));
  window.location.href = "./inicioSesion.html";
});

camposDeFormulario.forEach((campo) => {
  campo.addEventListener("blur", () => verificarCampo(campo));
  campo.addEventListener("invalid", (evento) => evento.preventDefault());
});

function verificarCampo(campo) {
  let mensaje = "";
  campo.setCustomValidity("");
 
  //campos validity
  tiposError.forEach((error) => {
    if (campo.validity[error]) {
      mensaje = mensajes[campo.name][error];
    }
  });

  const mensajeError = campo.parentNode.querySelector(".mensaje-error");
  const validarInputCheck = campo.checkValidity();

  if (!validarInputCheck) {
    mensajeError.textContent = mensaje;
  } else {
    mensajeError.textContent = "";
  }
}
