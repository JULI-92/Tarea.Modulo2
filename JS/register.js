function userRegister (){
  const usr = document.getElementById("use").value;
  const email = document.getElementById("email").value;
  const pass  = document.getElementById("password").value;
   
  
   let  user =localStorage.setItem("users",usr);
   let  ema =localStorage.setItem("email",email);
   let  pas =localStorage.setItem("password",pass)

  
  
}