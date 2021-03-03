"use strict";

const productTable = document.getElementById("product-table");

const searchInput = document.getElementById("searchInput");

const productTBody = document.querySelectorAll("tbody");

const productTemplate = document.querySelector("#product-row-template");

delete productTable.querySelector("tr");

let products = JSON.parse(localStorage.getItem("Products")) ?? [];

searchInput.addEventListener("keyup", (event) => {
  event.preventDefault();

  const searchProducts = event.target.value.toUpperCase();

  // productTBody.textContent = "";

  const userSearchProducts = products.filter((product) => {
    return product.Name.toUpperCase().startsWith(searchProducts);
  });

  userSearchProducts.forEach((search) => {
    let clone = template.content.cloneNode(true);

    let td = clone.querySelectorAll("td");
    td[0].textContent = search.ArtNumber.toUpperCase();
    td[1].textContent = search.Name.toUpperCase();
    td[2].textContent = search.Price;

    tbody.appendChild(clone);
  });

  console.log("Products", userSearchProducts);
});
