//gets the readmore button
var readMoreButton = document.getElementsByClassName("read-more-button")[0];

//adds an event listener to the button
readMoreButton.addEventListener("click", () => {
  let readMoreArticles = document.getElementsByClassName("read-more-articles");

  for (article of readMoreArticles) {
    // makes the read more articles visible then invisible when clicked again
    article.classList.toggle("none");
  }

  //changes the readmore button from a downwards arrow to an upwards arrow
  readMoreButton.classList.toggle("fa-chevron-down");
  readMoreButton.classList.toggle("fa-chevron-up");
});

// gets the article template from the html file
var articleTemplateScript = document.getElementById(
  "articles-list-template"
).innerHTML;

//compiles the article template
var articleTemplate = Handlebars.compile(articleTemplateScript);

// data for the articles list
var articleData = [
  {
    articleLink: "article1(sampletype1).html",
    imgSrc: "img/article1Images/article1-main-image(1).jpg",
    title: "Lakers Fall to Nets in Failed Comeback",
    writer: "John Peters",
    date: "06/02/2023",
    time: "3",
    desc: "After the controversial loss against Boston, the Lakers continue their roadtrip against a short-handed Nets team without Lebron and Anthony Davis. Irving and the Nets got off to a hot start with some early 3-pointers to take a 15-6 lead. Outside of a couple of early buckets from Rui Hachimura, who was getting his first start since joining the team, the Lakers were very cold early. The Nets seemed to be in complete control of the game until a quick run by the Lakers gave them a small lead in the third quarter.....",
  },
  {
    articleLink: "article2(sampletype2).html",
    imgSrc: "img/news2.jpg",
    title: "Will the Lakers Keep Their Big 3 Past The Deadline?",
    writer: "Peter Henderson",
    date: "04/02/2023",
    time: "2",
    desc: "With the Lakers continuing to struggle, will Pelinka pull the trigger on a Russell Westbrook trade despite having to put in their first round picks? It has been no secret that the Lakers have been trying to shop Russell Westbrook ever since the trade deadline last season. While it may have not been an issue last season, the progress of Russ as a productive basketball player for the Lakers makes the price of two first round picks that much harder to swallow....",
  },
  {
    articleLink: "article3(sampletype2).html",
    imgSrc: "img/news3.jpeg",
    title: "Who will be Traded for The Lakers?",
    writer: "Michelle Jones",
    date: "04/02/2023",
    time: "4",
    desc: "The trade deadline is getting closer, and the Lakers are in desperate need of help, who will stay and who will go? The Lakers have contended with top teams in both conferences despite facing injuries and fit issues with their guard heavy lineups. While they have pulled the trigger on Rui Hachimura, its clear this team needs more help, and with those first round picks still being there, who will the Lakers trade before the deadline?....",
  },
  {
    articleLink: "article4(sampletype1).html",
    imgSrc: "img/article4Images/article4-main-image(1).webp",
    title: "Lakers Fall to Boston to OT Thriller",
    writer: "Mark Marson",
    date: "28/01/2023",
    time: "3",
    desc: "The Lakers fall to the Boston Celtics at the Garden. While it hurts more due to the well known rivalry between the two teams, the Los Angeles fanbase as well as members of the team and staff are more at odds with the calls of the referees. This contempt was especially directed towards the final play of the game, where there was a no call on Lebron's drive to the rim as Tatum proceded to hack him on the arm....",
  },
  {
    articleLink: "article5(sampletype1).html",
    imgSrc: "img/article5Images/article5-main-image(1).jpg",
    title: "Preview: How will The Lakers match up Against Boston?",
    writer: "John Peters",
    date: "27/01/2023",
    time: "2",
    desc: "As the Lakers come off a 2 day rest after their win against the San Antonio Spurs, they look to add to their win total against Boston. Anthony Davis will be playing a minutes restriction in this match up which will undoubtedly limit their defensive upside against such a talented offensive team. Their last match up did not go in favor of the Lakers despite having a 13 point lead late in the fourth quarter, will the Lakers be able to avenge their past defeat or will Boston sweep the season series?...",
  },
];

//uses the for loop to iterate through the Article Data array
for (article of articleData) {
  //compiles the article data
  var compiledArticleData = articleTemplate(article);

  //creates a new div each time to write the compiledArticleData
  articleDiv = document.createElement("div");

  //adds class and id to the div
  articleDiv.className = "articles";

  //for the read more articles
  if (articleData.indexOf(article) > 2) {
    articleDiv.classList.add("read-more-articles", "none");
  }

  //changes the html of the newly made and appended div
  articleDiv.innerHTML = compiledArticleData;

  //appends the div to the Latest on Lakers div
  document.getElementById("Latest-On-Lakers").appendChild(articleDiv);
}
