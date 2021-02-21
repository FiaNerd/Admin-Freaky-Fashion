"use strict";

const form = document.querySelector(".form-register");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let registerProduct = {
    Name: form.productName.value,
    ArtNumber: form.artNumber.value,
    Description: form.description.value,
    Price: form.price.value,
    Picture: form.picture.value,
  };

  const addProducts = JSON.parse(localStorage.getItem("Products")) ?? [];

  addProducts.push(registerProduct);

  localStorage.setItem("Products", JSON.stringify(addProducts));
  console.log(localStorage);
});
