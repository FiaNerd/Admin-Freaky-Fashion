"use strict";

const form = document.querySelector(".form");

const formRegister = document.querySelector(".form-register");
const productName = document.querySelector(".name");
const artNr = document.querySelector(".artNr");
const description = document.querySelector(".textArea");
const price = document.querySelector(".price");

function showError(input, message) {
  const formRegister = input.parentElement;
  formRegister.className = "form-register error";

  const errorMessage = formRegister.querySelector("span");
  errorMessage.innerText = message;
}

function showValid(input) {
  const formRegister = input.parentElement;
  formRegister.className = "form-register valid";
}

function checkInput(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getField(input)} is requeired`);
    } else {
      showValid(input);
    }
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkInput([productName, artNr, price]);

  if (productName.value.trim() && artNr.value.trim() && price.value.trim()) {
    checkArtNum(productName.value, artNr.value, price.value);
  }
});

function getField(input) {
  return input.name.charAt(0).toUpperCase() + input.name.slice(1);
}

function checkArtNum(productName, artNr, price) {
  let registerProduct = {
    Name: productName,
    ArtNumber: artNr,
    Price: price,
  };
  const addProducts = JSON.parse(localStorage.getItem("Products")) ?? [];

  if (
    !addProducts.some(
      (regProducts) => regProducts.ArtNumber === registerProduct.ArtNumber
    )
  ) {
    addProducts.push(registerProduct);

    localStorage.setItem("Products", JSON.stringify(addProducts));

    form.reset();
  }
}
