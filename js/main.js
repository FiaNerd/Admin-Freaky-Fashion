"use strict";

const tbody = document.querySelector("tbody");

const template = document.querySelector("#product-row-template");

let products = JSON.parse(localStorage.getItem("Products")) ?? [];

products.forEach((product) => {
  let clone = template.content.cloneNode(true);

  let td = clone.querySelectorAll("td");
  td[0].textContent = product.ArtNumber;
  td[1].textContent = product.Name;
  td[2].textContent = product.Price;

  tbody.appendChild(clone);
});
