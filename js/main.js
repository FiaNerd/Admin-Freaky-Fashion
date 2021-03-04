"use strict";

const tbody = document.querySelector("tbody");

const template = document.querySelector("#product-row-template");

let products = JSON.parse(localStorage.getItem("Products")) ?? [];

products.forEach((product) => {
  let clone = template.content.cloneNode(true);

  let td = clone.querySelectorAll("td");
  td[0].textContent = product.ArtNumber.toUpperCase();
  td[1].textContent = product.Name.toUpperCase();
  td[2].textContent = product.Price;

  tbody.append(clone);
});
