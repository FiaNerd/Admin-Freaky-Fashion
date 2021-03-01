"use strict";
const searchInput = document.getElementById("searchInput");

let products = JSON.parse(localStorage.getItem("Products")) ?? [];

searchInput.addEventListener("keyup", (event) => {
  event.preventDefault();
  let searchProducts = event.target.value.toLowerCase();
  if (searchProducts.length) {
    products = products.filter((product) => {
      return product.Name.toLowerCase().startsWith(
        searchProducts.toLowerCase()
      );
    });
    console.log(products);
  }
  const productTable = document.querySelector("tbody");

  delete productTable.querySelector("tr");

  // products.forEach((product) => {
  //   if (product !== "") {
  //   }
  // });

  // products.forEach((product) => {
  //   let name = product.Name;
  //   console.log(name);
  // });
  // console.log(products);
});
