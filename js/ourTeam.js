//gets the our team template from the html file
var ourTeamTemplateScript =
  document.getElementById("our-team-template").innerHTML;

//compiles the team template
var ourTeamTemplate = Handlebars.compile(ourTeamTemplateScript);

ourTeamData = [
  {
    imgSrc: "headshot1.jpg",
    role: "Writer",
    name: "Peter Henderson",
  },
  {
    imgSrc: "headshot2.webp",
    role: "Writer",
    name: "John Peters",
  },
  {
    imgSrc: "headshot3.webp",
    role: "Reporter",
    name: "Thomas Aquinas",
  },
  {
    imgSrc: "headshot4.jpg",
    role: "Social Media Manager",
    name: "David Wood",
  },
  {
    imgSrc: "headshot5.jpg",
    role: "Reporter",
    name: "Mike Winger",
  },
  {
    imgSrc: "headshot6.jpg",
    role: "Writer",
    name: "Michelle Jones",
  },
  {
    imgSrc: "headshot7.jpg",
    role: "Writer",
    name: "Mark Marson",
  },
  {
    imgSrc: "headshot8.jpg",
    role: "Web developer",
    name: "Trevor Lane",
  },
];

//uses the for loop to iterate through the Our team Data array
for (member of ourTeamData) {

  // compiles the template with the data
  var compiledOurTeamData = ourTeamTemplate(member);

  //creates the div 
  profileContainer = document.createElement("div");

  //gives classes to the div
  profileContainer.className = "headshot-container";

  // adopted bootstrap layout classes
  profileContainer.classList.add("col-xs-12", "col-sm-6", "col-md-3");

  //adds data to the container
  profileContainer.innerHTML = compiledOurTeamData

  //appends the div to the team shots div
  document.getElementById("team-shots").appendChild(profileContainer);

}
