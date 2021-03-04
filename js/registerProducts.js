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

function checkArticle(inputArt) {
  inputArt.forEach(function (input) {
    if (input.value.trim() === input.ArtNumber) {
      showError(input, "Article is occupied");
    } else {
      showValid(input);
    }
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkInput([productName, artNr, price]);
  // checkArticle(artNr);

  if (productName.value.trim() && artNr.value.trim() && price.value.trim()) {
    checkArtNum(productName.value, artNr.value, price.value);
  }

  if (checkRequired(productName, artNr, price)) {
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

  let products = fetchProducts();

  if (
    !products.some(
      (regProducts) => regProducts.ArtNumber === registerProduct.ArtNumber
    )
  ) {
    products.push(registerProduct);

    localStorage.setItem("Products", JSON.stringify(products));

    form.reset();
  } else if (registerProduct.value.trim() === registerProduct.ArtNumber) {
    showError(input, "Article is occupied");
  }
}

function fetchProducts() {
  let addProducts = JSON.parse(localStorage.getItem("Products")) ?? [];
  return addProducts;
}
