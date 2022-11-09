const form = document.querySelector("form");
const name = document.querySelector("#username");
const hideicon = document.querySelector(".form-icon--hide");
const password = document.querySelector("#password");

hideicon.addEventListener("click", function () {
  hideicon.classList.toggle("fa-eye-slash");
  hideicon.classList.toggle("fa-eye");

  if (hideicon.classList.contains("fa-eye")) {
    password.type = "text";
  } else {
    password.type = "password";
  }
});

form.addEventListener("submit", formHandle);

function formHandle(e) {
  e.preventDefault();
  const Loginfo = {
    name: name.value,
    password: password.value,
  };
  console.log(Loginfo);
  name.value = "";
  password.value = "";
}
