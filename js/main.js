"use strict";

let addProducts = JSON.parse(localStorage.getItem("Products")) ?? [];

const tbody = document.querySelector("tbody");

const template = document.querySelector("#product-row-template");

addProducts.forEach((product) => {
  let clone = template.content.cloneNode(true);

  let td = clone.querySelectorAll("td");
  td[0].textContent = product.Name;
  td[1].textContent = product.ArtNumber;
  td[2].textContent = product.Description;
  td[3].textContent = product.Price;
  td[4].textContent = product.Picture;

  tbody.appendChild(clone);
});
