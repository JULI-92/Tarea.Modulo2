let  userRegister = () => {
  
  const usr   = document.getElementById("usua").value;
  const email = document.getElementById("email").value;
  const pass  = document.getElementById("password").value;
   emailValidation = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  

  localStorage.setItem("user",usr);
  localStorage.setItem("email",email);
  localStorage.setItem("pars",pass);
  if (usr == "" && email =="" && pass=="") {
    alert ("Debe completar el formulario para continuar");
  } else if (usr.length <6) {
    alert("Nombre de usuario deber tener almenos 6 caracteres");
    
  } else if (!emailValidation.test(email)){
    alert("El email no tiene un formato correcto");
  } else if (pass.length<4) {
    alert('La contraseña es muy corta');
  } else {
    alert('Bienvenido');
    window.location = '../index.html';
  } 
  
 
  
};

