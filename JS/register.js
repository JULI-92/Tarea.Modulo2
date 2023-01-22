let  userRegister = () => {

  let usr   = document.getElementById("use").value;
  let email = document.getElementById("email").value;
  let pass  = document.getElementById("password").value

  localStorage.setItem("user",usr);
  localStorage.setItem("email",email);
  localStorage.setItem("password",pass);
  window.location = '../index.html';
}
