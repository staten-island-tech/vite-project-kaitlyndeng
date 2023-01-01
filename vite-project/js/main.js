import "../styles/style.css";
import {candy} from "./candy";
import {DOMSelectors} from "./dom";

document.getElementById("theme").addEventListener("click", function () {
  if(document.body.classList.contains("pink")) {
    document.body.classList.add("blue");
    document.body.classList.remove("pink");
  } else {
    document.body.classList.add("pink");
    document.body.classList.remove("blue");
  }
});

function clear() {
  DOMSelectors.box.innerHTML = "";
};

function startPg(candy) {
  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `<div class = "card">
    <h2 class="name">${candy.name}</h2>
    <img class="image" src="${candy.img}"/> 
    <h3 class="price">${candy.price}</h3>
    <h4 class="desc"></h4>
    </div>`
  )};

function listAll() {
  candy.forEach((candy) => {
    startPg(candy);
  });
  };

  listAll();

document.getElementById("all").addEventListener("click", function all() {
  clear();
  candy.forEach((candy) => 
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `
      <div class="card">
      <h2 class="name">${candy.name}</h2>
      <img class="image" src="${candy.img}"/> 
      <h3 class="price">${candy.price}</h3>
      <h4 class="desc"></h4>
    </div> `
    ) 
  );
});

document.getElementById("chocolate").addEventListener("click", function chocolate() {
  clear();
  candy
    .filter(candy => candy.category === "chocolate")
    .forEach((candy) => 
      DOMSelectors.box.insertAdjacentHTML(
        "beforeend",
        `
        <div class="card">
        <h2>${candy.name}</h2>
        <img class="image" src="${candy.img}"/> 
        <h3>${candy.price}</h3>
        <h4 class="desc"></h4>
      </div> `
      ) 
    );
  });

document.getElementById("chewy").addEventListener("click", function chewy() {
  clear();
  candy
    .filter(candy => candy.category === "chewy")
    .forEach((candy) => 
      DOMSelectors.box.insertAdjacentHTML(
        "beforeend",
        `
        <div class="card">
        <h2>${candy.name}</h2>
        <img class="image" src="${candy.img}"/> 
        <h3>${candy.price}</h3>
        <h4 class="desc"></h4>
      </div> `
      ) 
    );
  });
  
  document.getElementById("hard").addEventListener("click", function hard() {
    clear();
    candy
      .filter(candy => candy.category === "hard")
      .forEach((candy) => 
        DOMSelectors.box.insertAdjacentHTML(
          "beforeend",
          `
          <div class="card">
          <h2>${candy.name}</h2>
          <img class="image" src="${candy.img}"/> 
          <h3>${candy.price}</h3>
          <h4 class="desc"></h4>
        </div> `
        ) 
      );
    });