import "../styles/style.css";
import {candy} from "./candy";
import {DOMSelectors} from "./dom";

function card (candy) {
  DOMSelectors.display.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
    <h2 class="name">${candy.name}</h2>
    <div class="img"> <img class="image" src="${candy.img}"/> </div>
    <h3 class="desc">${candy.desc}</h3>
    <h4 class="price">${candy.price}</h4>
  </div> `
  );
}

function all() {
  candy.forEach((e) => {
    card(e);
  });
}

all();

function choco() {
  DOMSelectors.display.innerHTML = "";
  candy
  .filter((e) => e.category === "Chocolate Candy")
  .forEach((e) => {
    card(e);
  });
}

DOMSelectors.chocoFilter.addEventListener("click", function () {
  choco();
});

function hard() {
  DOMSelectors.display.innerHTML = "";
  candy
  .filter((e) => e.category === "Hard Candy")
  .forEach((e) => {
    card(e);
  });
}

DOMSelectors.hardFilter.addEventListener("click", function () {
  hard();
});

function chewy() {
  DOMSelectors.display.innerHTML = "";
  candy
  .filter((e) => e.category === "Chewy Candy")
  .forEach((e) => {
    card(e);
  });
}


const DOMSelectors = {
  card: document.getElementById("cards"),
};

DOMSelectors.chewyFilter.addEventListener("click", function () {
  chewy();
});

DOMSelectors.theme.addEventListener("click", function () {
  if(document.body.classList.contains("pink")){
    document.body.classList.add("yellow");
    document.body.classList.remove("pink");
    DOMSelectors.theme.innerHTML = "pink";
  } else {
    document.body.classList.add("pink");
    document.body.classList.remove("yellow");
    DOMSelectors.theme.innerHTML = "yellow";
  }
  });
