//Question 2

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=f3adac9148014502b0ed0b4c79eb99a7";
const resultsContainer = document.querySelector(".results");

async function getGamesFacts() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    const facts = results.results;

    resultsContainer.innerHTML = "";

    for (let i = 0; i < facts.length; i++) {
      if (i === 8) {
        break;
      }

      resultsContainer.innerHTML += `<div class="name">${facts[i].name}</div>
                                     <div>Rating: ${facts[i].rating}</div>
                                     <div class="tags">Number of tags: ${facts[i].tags.length} </div>`;
    }
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = displayError("Oh no, something isn't working...");
  }
}

getGamesFacts();
