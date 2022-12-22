import "../styles/style.css";
import candy from "./candy";

const DOMSelectors = {
  card: document.getElementById("cards"),
};

candy.forEach((element) =>
  DOMSelectors.card.insertAdjacentHTML(
    "beforeend",
    `<div class="option">
    <h3 class="name">${element.name}</h3>
    <img class="image" src="${element.url}">
    <h4 class="desc">${element.desc}</h4>
    <h5 class="price">${element.price}</h5>
    <h6></h6>
  </div> `
  )
);

const chewy = document.querySelectorAll(`.btn`);
chewy.forEach((button) => {
  button.addEventListener("click", function (e) {});
  document.querySelectorAll(candy.category);
  candy.filter((element) => candy.category === "Chewy");
  console.log(candy.category);
});
document.querySelectorAll(".btn").addEventListener("click".function(chewy));
