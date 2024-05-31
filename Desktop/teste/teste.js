var senha = document.getElementById('senha');
var senhaC = document.getElementById('senhaC');

function validaPassword() {
  if (senha.value != senhaC.value) {
    senhaC.setCustomValidity("Senhas diferentes!");
    senhaC.reportValidity();
    return false;
  } else {
    senhaC.setCustomValidity("");
    return true;
  }
}
senhaC.addEventListener('input', validaPassword);