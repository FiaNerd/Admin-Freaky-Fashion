"use strict";
const searchInput = document.getElementById("searchInput");

const productTable = document.querySelectorAll("tbody tr");

const productTemplate = document.querySelector("#product-row-template");

// delete productTable.querySelector("tr");

let products = JSON.parse(localStorage.getItem("Products")) ?? [];

searchInput.addEventListener("keyup", (event) => {
  event.preventDefault();
  const searchProducts = event.target.value.toLowerCase();
  productTemplate.textContent = "";
  const userSearchProducts = products.filter((product) => {
    return product.Name.toLowerCase().startsWith(searchProducts);
  });
  console.log("Products", userSearchProducts);

  userSearchProducts.forEach((search) => {
    const tdProduct = document.createElement("td");
    tdProduct.textContent = search.Name;
    productTemplate.appendChild(tdProduct);
  });
  if (searchProducts === "") {
    productTemplate.textContent = "";
  }
});
