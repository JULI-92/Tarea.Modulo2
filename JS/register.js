let  userRegister = () => {
  
  const usr   = document.getElementById('usua').value;
  const email = document.getElementById('email').value;
  const pass  = document.getElementById('password').value;
        emailValidation = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        usuario = /^[a-zA-ZÀ-ÿ\s]{5,20}$/; 
	      password = /^.{4,12}$/; 

  localStorage.setItem('user',usr);
  localStorage.setItem('email',email);
  localStorage.setItem('pars',pass);

  if (usr == '' && email =='' && pass=='') {
    alert ('Debe completar el formulario para continuar');

  } else if (!usuario.test(usr)) {
    alert('Nombre de usuario deber tener Letras y espacios y no menor de 5 digitos.');
    
  } else if (!emailValidation.test(email)){
    alert('El email no tiene un formato correcto');

  } else if (!password.test(pass)) {
    alert(' La contraseña debe tener 4 a 12 digitos');

  } else {
    alert('Registrado correctamente');
    window.location = '../index.html';
  } 
  
};


