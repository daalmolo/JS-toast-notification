"use strict";

const toastBox = document.getElementsByClassName("toastBox")[0];

const msgSuccess =
  '<i class="fa-solid fa-circle-check"></i> Successfully submitted!';
const msgError =
  '<i class="fa-solid fa-circle-exclamation"></i> Please fix the error';
const msgInvalid =
  '<i class="fa-solid fa-triangle-exclamation"></i> The input is invalid';

function sendNotification(msg) {
  const toast = document.createElement("div");
  toast.classList.add("toast");

  const toastMessage = document.createElement("p");
  toastMessage.innerHTML = msg;

  toast.appendChild(toastMessage);
  toastBox.appendChild(toast);

  if (msg.includes("error")) {
    toast.classList.add("error");
  }

  if (msg.includes("invalid")) {
    toast.classList.add("invalid");
  }

  setTimeout(() => {
    toast.remove();
  }, 6000);
}
