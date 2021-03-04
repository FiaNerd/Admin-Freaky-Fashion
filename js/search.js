"use strict";

const searchInput = document.getElementById("searchInput");

const tbodyProduct = document.querySelector("tbody");

const productTemplate = document.querySelector("#product-row-template");

let getProducts = JSON.parse(localStorage.getItem("Products")) ?? [];

searchInput.addEventListener("keyup", (event) => {
  event.preventDefault();
  tbodyProduct.innerHTML = "";
  const searchProducts = event.target.value.toUpperCase();

  const userSearchProducts = getProducts.filter((product) => {
    return product.Name.toUpperCase().startsWith(searchProducts);
  });

  userSearchProducts.forEach((search) => {
    let cloneTemplate = productTemplate.content.cloneNode(true);

    let td = cloneTemplate.querySelectorAll("td");
    td[0].textContent = search.ArtNumber.toUpperCase();
    td[1].textContent = search.Name.toUpperCase();
    td[2].textContent = search.Price;

    tbodyProduct.append(cloneTemplate);
  });

  console.log("Products", userSearchProducts);
});
