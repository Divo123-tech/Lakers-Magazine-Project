//gets the news footer template from the html file
var newsFooterTemplateScript = document.getElementById(
  "news-footer-template"
).innerHTML;

//compiles the template
var newsFooterTemplate = Handlebars.compile(newsFooterTemplateScript);

//news footer data
var newsFooterData = [
  {
    articleLink: "article4(sampletype1).html",
    imgSrc: "img/article4Images/article4-main-image(1).webp",
    title: "Lakers Fall to Boston in OT Thriller",
    desc: "The Lakers fall to the Boston Celtics at the Garden. The Lakers fanbase, team and staff are at odds with the referees.",
  },
  {
    articleLink: "article3(sampletype2).html",
    imgSrc: "img/news3.jpeg",
    title: "Who will be Traded For The Lakers",
    desc: "The trade deadline is getting closer and closer, and the Lakers are in desperate need of help, who will stay and who will go?",
  },
  {
    articleLink: "article2(sampletype2).html",
    imgSrc: "img/news2.jpg",
    title: "Will The Lakers Keep Their Big 3?",
    desc: "With the Lakers continuing to struggle, will Pelinka pull the trigger on a Westbrook trade despite having to put in their first round picks?....",
  },
  {
    articleLink: "article1(sampletype1).html",
    imgSrc: "img/article1Images/article1-main-image(1).jpg",
    title: "Lakers Fall to Nets in Failed Comeback",
    desc: "After the controversial loss against Boston, the Lakers continue their roadtrip against a short-handed Nets team without Lebron and AD...",
  },
  {
    articleLink: "article5(sampletype1).html",
    imgSrc: "img/article5Images/article5-main-image(1).jpg",
    title: "How will The Lakers match up Against Boston?",
    desc: "As the Lakers come off a 2 day rest after their win against the Spurs, they look to win against Boston....",
  },
];

//uses the for loop to iterate through the news footer array
for (var i = 0; i < 3; i++) {
  //gets a random index for the news footer array
  let randomNews = Math.abs(Math.floor(Math.random() * newsFooterData.length));

  //compiles the news footer data
  var compiledNewsFooterData = newsFooterTemplate(newsFooterData[randomNews]);

  //removes the news footer data that was used to avoid duplication
  newsFooterData.splice(randomNews, 1);

  // stores the specific news footer id into a reusable variable
  let newsFooterDivId = `news-footer-article${i}`
  //creates a new div
  let newsFooterDiv = document.createElement("div");

  //gives classes and ids for the new div
  newsFooterDiv.className = "news-footer-container";
  //addopted bootstrap classes
  newsFooterDiv.classList.add("col-md-4", "col-sm-12", "col-xs-12");
  newsFooterDiv.id = newsFooterDivId;

  //appends the new div to the news footer div
  document.getElementsByClassName("news-footer")[0].appendChild(newsFooterDiv);

  //changes the html of the newly made news footer div
  document.getElementById(newsFooterDivId).innerHTML =
    compiledNewsFooterData;
}
