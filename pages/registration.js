const form = document.querySelector(".form");
const email = document.querySelector(".mail");
const pass = document.querySelector(".pass");

form.addEventListener("submit", passdata);

function passdata(e) {
  e.preventDefault();

  const sygnInfo = {
    email: email.value,
    password: pass.value,
  };
  console.log(sygnInfo);
  email.value = "";
  pass.value = "";
}
