"use strict";

let searchable = [
  "Evergrey",
  "Architects",
  "Amon Amarth",
  "Amorphis",
  "Behemot",
  "Mercenary",
];

// const searchContainer = document.querySelector(".search-container");
const searchInput = document.getElementById("searchInput");
const searchBox = document.querySelector(".search-box");
const resultsWrapper = document.querySelector(".result-list");

searchInput.addEventListener("keyup", (event) => {
  event.preventDefault();
  let userData = event.target.value;
  let resultList = [];
  if (userData.length) {
    resultList = searchable.filter((data) => {
      return data.toLowerCase().startsWith(userData.toLowerCase());
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
      return `<li>${data}</li>`;
    })
    .join("");

  searchBox.classList.add("show");
  resultsWrapper.innerHTML = `<ul>${contentText}</ul>`;
}
