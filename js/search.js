"use strict";

// let searchable = [
//   "Evergrey",
//   "Architects",
//   "Amon Amarth",
//   "Amorphis",
//   "Behemot",
//   "Mercenary",
// ];

let getProducts = JSON.parse(localStorage.getItem("Products")) ?? [];

// const searchContainer = document.querySelector(".search-container");
const searchInput = document.getElementById("searchInput");
const searchBox = document.querySelector(".search-box");
const resultsWrapper = document.querySelector(".result-list");

searchInput.addEventListener("keyup", (event) => {
  event.preventDefault();
  let searchProducts = event.target.value;
  let resultList = [];
  if (searchProducts.length) {
    resultList = getProducts.filter((data) => {
      return data.toLowerCase().startsWith(searchProducts.toLowerCase());
    });
  }
  showResults(resultList);
});

function showResults(resultList) {
  if (!resultList.length) {
    return searchBox.classList.remove("show");
  }
  let contentText = resultList
    .map((data) => {
      return `<tr>${data}</tr>`;
    })
    .join("");

  searchBox.classList.add("show");
  resultsWrapper.innerHTML = `<td>${contentText}</td>`;
}
