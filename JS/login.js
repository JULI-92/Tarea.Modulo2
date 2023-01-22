// simulando db
const users = [
  {
    name: 'juli',
    email: 'juli@gmail.com',
    password: '123',
  },
  
];
const userJson = JSON.stringify(users);
window.localStorage.setItem('users', userJson);

const userLogin = (event) => {
  event.preventDefault()
  const emailInput = document.login.email.value.toLowerCase();
  const passwordInput = document.login.password.value;
  const emailValidation = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  if (!emailValidation.test(emailInput)) {
    alert('El email no tiene un formato correcto');
    return;
  }

  let userLog;
  let trueUserFlag;
  users.map((user) => {
    if (emailInput === user.email.toLowerCase() && passwordInput === user.password) {
    trueUserFlag = true;
    userLog = user;
    }
  });
  if (trueUserFlag) {  
    alert('Bienvenido');
    delete userLog.password;
    localStorage.setItem('userLog', JSON.stringify(userLog));
    window.location = '../PAGES/homepage.html';
  } else {
    alert('Usuario o contraseña incorrecto.');
  }
};


