const btn = document.getElementById("change");
const sign = document.querySelector(".sign_up");
const success = document.querySelector(".success");
const email_main = document.querySelector("#main_email");
const txt = document.querySelector(".text");
btn.addEventListener("click", () => {
  sign.classList.add("hide");
  success.classList.add("remove");
});
email_main.addEventListener("keydown", () => {
  let val = email_main.value;
  if (!val.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    txt.innerHTML = "Valid email Required";
    email_main.style.backgroundColor = "#ffe8e6";
    email_main.style.borderColor = "red";
    email_main.style.color = "red";
  } else {
    txt.innerHTML = "";
    email_main.style.backgroundColor = "#ffffff";
    email_main.style.borderColor = "black";
    email_main.style.color = "black";
  }
});
