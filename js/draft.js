//gets the draft picks template from the html file
var draftPicksTemplateScript = document.getElementById("draft-picks-template").innerHTML;

//compiles the draft picks template
var draftPicksTemplate = Handlebars.compile(draftPicksTemplateScript);

draftPicksData = [
  {
    year: "2023",
    picks: ["First round: Pelicans have the right to swap picks"],
  },
  {
    year: "2024",
    picks: [
      "First round: Owned by Pelicans and have the rights to receive 2025 pick instead",
      "Second round: Lakers Own Draft Pick",
    ],
  },
  {
    year: "2025",
    picks: [
      "First round: Own but Pelicans have the rights to this pick if they forego 2024 pick",
      "Second round: Lakers Own Draft Pick",
    ],
  },
  {
    year: "2026",
    picks: [
      "First round: Own but Untradeable due to Steppien rule",
      "Second round: Lakers Own Draft Pick",
    ],
  },
  {
    year: "2027",
    picks: [
      "First round: Lakers Own Draft Pick",
      "Second round: Lakers Own Draft Pick",
    ],
  },
  {
    year: "2028",
    picks: [
      "First round: Lakers Own Draft Pick",
      "Second round: Lakers Own Draft Pick",
    ],
  },
  {
    year: "2029",
    picks: [
      "First round: Lakers Own Draft Pick",
      "Second round: Lakers Own Draft Pick",
    ],
  },
  {
    year: "2030",
    picks: [
      "First round: Lakers Own Draft Pick",
      "Second round: Lakers Own Draft Pick",
    ],
  },
];

//use of closures to create a function factory
var seeMorePicks = (year) => {
  return () => {
    var picks = document.getElementById(`picks-${year}-list-container`);
    picks.classList.toggle("none");
  };
};

//uses the for loop to iterate through the draft picks data array
for (draft of draftPicksData) {
  //compiles the draft Pick data
  var compiledDraftData = draftPicksTemplate(draft);

  //creates the picks container div
  let picksContainer = document.createElement("div");

  //current year for further use
  let currentYear = draft.year;

  //gives unique class to the container
  picksContainer.className = `picks-${currentYear}-container`;

  picksContainer.innerHTML = compiledDraftData;

  //appends the container to the lakers picks container
  document.getElementById("Lakers-picks-container").appendChild(picksContainer);

  //nested for loop that iterates through the picks array
  for (draftPick of draft.picks) {
    //creates a list element
    let pick = document.createElement("li");

    //writes the pick data to the list element
    pick.textContent = draftPick;

    // creates a break between the picks
    let br = document.createElement("br");

    //appends the list node to current year's pick list
    document.getElementById(`picks-${currentYear}-list`).appendChild(pick);

    // doesn't put a break if its the last pick
    if (draft.picks.indexOf(draftPick) < draft.picks.length - 1) {
      document.getElementById(`picks-${currentYear}-list`).appendChild(br);
    }
  }

  // to give each see more button specific functinoality to toggle their respective year's pick list
  seepicksButton =
    document.getElementsByClassName("see-picks")[draftPicksData.indexOf(draft)];

  seepicksButton.addEventListener("click", seeMorePicks(currentYear));
}
