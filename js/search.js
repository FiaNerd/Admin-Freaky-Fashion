"use strict";
const searchInput = document.getElementById("searchInput");
const searchBox = document.querySelector(".search-box");
let products = JSON.parse(localStorage.getItem("Products")) ?? [];

// let user = products[1];

searchInput.addEventListener("keyup", (event) => {
  event.preventDefault();
  let searchProducts = event.target.value;
  if (searchProducts.length) {
    products = products.filter((product) => {
      return product.Name.toLowerCase().startsWith(
        searchProducts.toLowerCase()
      );
    });
    // products = products.map((searchProducts) => {
    //   return (searchProducts = "<td>" + searchProducts + "</td>");
    // });
    console.log(products);
    // } else {
    // }
    // showProductSearch(searchProducts);

    // function showProductSearch(list) {
    //   let listProducts;
    //   if (!list.length) {
    //   } else {
    //     listProducts = list.join("product");
    //   }
    //   productTable.textContent = listProducts;
    // }

    const productTable = document.querySelector("tbody");

    delete productTable.querySelector("tr");

    products.forEach((product) => {
      let td = productTable.querySelector("td");
      // td[1].textContent = product.Name;
    });
  }
});
