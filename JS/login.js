
const login = document.querySelector('.login');

const userLogin = (event) => {
  event.preventDefault()
  const emailInput =document.getElementById("useremail").value.toLowerCase();
  const passwordInput = document.getElementById("contrasena").value;
  console.log(emailInput);
  console.log(passwordInput);
  const Email = localStorage.getItem("email");
  const PassWord = localStorage.getItem("pars");
  console.log(Email);
  console.log(PassWord) ;
  if( emailInput == "" && passwordInput == ""){
    alert("opp")
}
else
{
    if(emailInput == Email && passwordInput == PassWord){
        alert("si")
        
    }else
    {
        alert("no")
    }
};


};





