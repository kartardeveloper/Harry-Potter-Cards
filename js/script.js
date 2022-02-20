const filterInput = document.querySelector(".filter-input");
const selectFilterOption = document.querySelector("#select-filter-option");

fetch("http://hp-api.herokuapp.com/api/characters")
  .then((response) => response.json())
  .then((data) => {
    addData(data);
  });

function addData(data) {
  data.forEach((element, index) => {
    if (index < 25) {
      createCard(element);
    }
  });
}

function createCard(mainElement) {
  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `<div class="card-content">
                      <h2 class="card-title">${mainElement.name}</h2>
                      <p class="data__wrapper">Role Played By: <span class="data">${mainElement.actor}</span></p>
                      <p class="data__wrapper">House: <span class="data">${mainElement.house}</span></p>
                      <p class="data__wrapper">Gender: <span class="data">${mainElement.gender}</span></p>
                      <p class="data__wrapper">Ancestry: <span class="data">${mainElement.ancestry}</span></p>
                      <p class="data__wrapper">Patronus: <span class="data">${mainElement.patronus}</span></p>
                      <p class="data__wrapper">Species: <span class="data">${mainElement.species}</span></p>
                    </div>`;
  document.querySelector(".container").appendChild(card);
  card.style.background = `url("${mainElement.image}") no-repeat top/cover`;
  cardFilters(mainElement, card);
  
}

function cardFilters(mainElement, card) {
  filterInput.addEventListener("input", () => {
    let cardName = mainElement.name.toLowerCase();
    let cardHouse = mainElement.house.toLowerCase();
    let cardAncestry = mainElement.ancestry.toLowerCase();
    let cardSpecies = mainElement.species.toLowerCase();

    if(selectFilterOption.value === 'name') {
      filterFunction (cardName, card)
    } else if(selectFilterOption.value === 'house') {
      filterFunction (cardHouse, card)
    } else if(selectFilterOption.value === 'ancestry') {
      filterFunction (cardAncestry, card)
    } else if(selectFilterOption.value === 'species') {
      filterFunction (cardSpecies, card)
    }
  });
}

function filterFunction (cardData, card) {
  if (!cardData.includes(filterInput.value.toLowerCase())) {
    card.style.display = "none";
  } else {
    card.style.display = "block";
  }
}
