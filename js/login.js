function datos() {
  let nombre = document.getElementById("nombre").value;
  let email = document.getElementById("email").value;
  let contraseña = document.getElementById("contraseña").value;

  if (nombre == "" || email == "" || contraseña == "") {
    alert("Rellena todos los campos para ingresar");
  }else{
    alert(`Bienvenido: ${nombre} \nGracias por haberte registrado`)
    alert(`Estas siendo redireccionado a nuestra pagina principal`)
    window.location.href = "/index.html";
  }
}
