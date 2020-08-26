function validateName(name, lastName) {
  let flag = true;
  const regexName = new RegExp(/^[\w]+$/);

  if (name.length >= 20) {
    console.log("El nombre contiene más de 20 caracteres");
  }

  if (lastName.length >= 20) {
    console.log("El apellido contiene más de 20 caracteres");
  }

  if (!regexName.test(name)) {
    console.log("El nombre contiene caracteres invalidos");
  }

  if (!regexName.test(lastName)) {
    console.log("El apellido contiene caracteres invalidos");
  }
}

function validateAge(age) {
  if (isNaN(age)) {
    console.log("La edad solo puede ser numeros");
  }
}

function validatePassword(password) {
  const regexPassword = new RegExp(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
  );
  if (!regexPassword.test(password)) {
    console.log("Password no cumple los requerimientos");
  }
}

function validateEmail(email) {
  const regexEmail = new RegExp(
    /^[\w.+\-]+@+((Google)|(Outlook)|(Icloud))+\.com$/
  );
  if (!regexEmail.test(email)) {
    console.log("Email no cumple los requerimientos");
  }
}
