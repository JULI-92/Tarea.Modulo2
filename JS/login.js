const userLogin = (event) => {
    event.preventDefault()
    const emailInput =document.getElementById("useremail").value.toLowerCase();
    const passwordInput = document.getElementById("contrasena").value;
    const emailValidatin = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if (!emailValidatin.test(emailInput)) {
    alert('El email no tiene un formato correcto');
    return;
    }
    const Email = localStorage.getItem("email");
    const Password = localStorage.getItem("pars");
 
  
    if(emailInput == Email && passwordInput == Password){
    alert('Bienvenido');
    
    window.location = '../PAGES/homepage.html';
     
    }else
    {
        alert('Usuario o contraseña incorrecto.');
    }
};





