// gets the card template from the html file
var cardTemplateScript = document.getElementById(
  "card-players-template"
).innerHTML;

// uses handlebars to compile the template script
var cardTemplate = Handlebars.compile(cardTemplateScript);

// card players data for both article 2 and 3
cardPlayersData = {
  Big3: [
    {
      name: "LeBron James",
      imgSrc: "LebronCardImg.jpg",
      profile: "6'9 | Small Forward | 250lb",
      boxscore: "30.0 PPG | 8.5 RPG | 7.1 APG",
      splits: "50.5% FG | 30.8% 3PT | 76.3 FT%",
      games: "38",
      contract: "44.4",
    },
    {
      name: "Russell Westbrook",
      imgSrc: "WestbrookCardImg.webp",
      profile: "6'3 | Point Guard | 200lb",
      boxscore: "15.7 PPG | 6.2 RPG | 7.5 APG",
      splits: "41.4% FG | 28.6% 3PT | 65.9 FT%",
      games: "51",
      contract: "47.0",
    },
    {
      name: "Anthony Davis",
      imgSrc: "DavisCardImg.webp",
      profile: "6'10 | Power Forward | 250lb",
      boxscore: "27.1 PPG | 12.0 RPG | 2.6 APG",
      splits: "57.5% FG | 28.3% 3PT | 83.0 FT%",
      games: "30",
      contract: "37.9",
    },
  ],
  Tradeable: [
    {
      name: "Russell Westbrook",
      imgSrc: "WestbrookCardImg.webp",
      profile: "6'3 | Point Guard | 200lb",
      boxscore: "15.7 PPG | 6.2 RPG | 7.5 APG",
      splits: "41.4% FG | 28.6% 3PT | 65.9 FT%",
      games: "51",
      contract: "47.0",
    },
    {
      name: "Patrick Beverley",
      imgSrc: "PatrickCardImg.png",
      profile: "6'1 | Point Guard | 180lb",
      boxscore: "6.4 PPG | 3.2 RPG | 2.6 APG",
      splits: "39.9% FG | 34.2% 3PT | 79.2 FT%",
      games: "44",
      contract: "13.0",
    },
    {
      name: "Lonnie Walker IV",
      imgSrc: "WalkerCardImg.webp",
      profile: "6'4 | Shooting Guard | 204lb",
      boxscore: "13.9 PPG | 2.2 RPG | 1.3 APG",
      splits: "45.7% FG | 37.2% 3PT | 87.8 FT%",
      games: "37",
      contract: "6.5",
    },
    {
      name: "Austin Reaves",
      imgSrc: "ReavesCardImg.png",
      profile: "6'5 | Shooting Guard | 206lb",
      boxscore: "10.8 PPG | 3.1 RPG | 2.2 APG",
      splits: "48.8% FG | 36.0% 3PT | 89.6 FT%",
      games: "36",
      contract: "1.5",
    },
    {
      name: "Max Christie",
      imgSrc: "MaxCardImg.webp",
      profile: "6'6 | Shooting Guard | 190lb",
      boxscore: "3.8 PPG | 2.2 RPG | 0.5 APG",
      splits: "43.0% FG | 42.6% 3PT | 85.7 FT%",
      games: "33",
      contract: "1.1",
    },
  ],
};

var generatecard = (dataArray) => {
  return () => {
    for (var info of dataArray) {
      compiledCardData = cardTemplate(info);
      cardDiv = document.createElement("div");
      cardDiv.className = "flip-card";
      cardDiv.innerHTML = compiledCardData
      document.getElementsByClassName("card-container")[0].appendChild(cardDiv);
    }
  }
}

// generate article 2
var article2CardGenerate = generatecard(cardPlayersData.Big3)

// generate article 3
var article3CardGenerate = generatecard(cardPlayersData.Tradeable)
