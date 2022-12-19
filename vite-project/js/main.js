import "../styles/style.css";
import { candy } from "./candy";

candy.forEach((card) =>
  DOMSelectors.option.insertAdjacentHTML(
    "beforeend",
    `<div class="option">
    <h3 class="name">${card.name}</h3>
    <img class="image" src="${card.url}">
    <h4 class="desc">${card.desc}</h4>
    <h5 class="price">${card.price}</h5>
    <h5>In Stock</h5>
  </div> `
  )
);
let outOfStock = 0;

function filterByID(candy) {
  if (Number.isFinite(candy.id) && candy.id !== 0) {
    return true;
  }
  outOfStock++;
  return false;
}
