import "../styles/style.css";
import { candy } from "./candy";

const DOMSelectors = {
  option: document.querySelector(".option"),
  name: document.querySelector(".name"),
  url: document.querySelector(".image"),
  desc: document.querySelector(".desc"),
  price: document.querySelector(".price"),
};


function insert () {
  DOMSelectors.option.insertAdjacentHTML {
    "beforeend",
    `<div class="option">
    <h3 class="name">${name}</h3>
    <img class="image" src="${url}">
    <h4 class="desc">${desc}</h4>
    <h5 class="price">${price}</h5>
    <h5>In Stock</h5>
  </div> `
  }
  
}
