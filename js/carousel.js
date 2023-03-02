// gets the carousel template from the html
var carouselTemplateScript =
  document.getElementById("carousel-template").innerHTML;

// uses handlebars to compiles the carousel template script
var carouselTemplate = Handlebars.compile(carouselTemplateScript);

// carousel data with multiple articles
carouselData = {
  article1: [
    {
      imgSrc: "article1Images/article1-main-image(1).jpg",
      alt: "Rui driving on Royce O neale",
    },
    {
      imgSrc: "article1Images/article1-main-image(2).webp",
      alt: "Russ driving the ball",
    },
    {
      imgSrc: "article1Images/article1-main-image(3).jpg",
      alt: "Seth Curry Laying up the ball",
    },
  ],
  article4: [
    {
      imgSrc: "article4Images/article4-main-image(1).webp",
      alt: "Lebron in distress at the end of regulation",
    },
    {
      imgSrc: "article4Images/article4-main-image(2).webp",
      alt: "Lebron being hacked on the arm by Tatum at the end of regulation",
    },
    {
      imgSrc: "article4Images/article4-main-image(3).webp",
      alt: "Lebron running around in anger at the end of regulation",
    },
  ],
  article5: [
    {
      imgSrc: "article5Images/article5-main-image(1).jpg",
      alt: "Lebron being guarded by Tatum",
    },
    {
      imgSrc: "article5Images/article5-main-image(2).jpg",
      alt: "Jaylen Brown being contested at the rim by Hachimura and Troy Brown",
    },
    {
      imgSrc: "article5Images/article5-main-image(3).jpeg",
      alt: "Marcus Smart and Jayson Tatum celebrating together after their victory in their first match up this season",
    },
  ],
};

// closure function to make a function factory to generate carousel
var generateCarousel = (article) => {
  return () => {
    for (picInfo of article) {
      var compiledCarouselData = carouselTemplate(picInfo);
      carouselitemDiv = document.createElement("div");
      carouselitemDiv.className = "carousel-items";
      carouselitemDiv.innerHTML = compiledCarouselData;
      document
        .getElementsByClassName("carousel-container")[0]
        .appendChild(carouselitemDiv);
    }
  };
};

// generate article 1 carousel
var article1CarouselGenerate = generateCarousel(carouselData.article1);
// generate article 4 carousel
var article4CarouselGenerate = generateCarousel(carouselData.article4);
// generate article 5 carousel
var article5CarouselGenerate = generateCarousel(carouselData.article5);



// sets the position to 0
var position = 0;

window.onload = () => {
  carousel(position);
};

// subtracts the position of the carousel array
var prevItem = () => {
  position--;
  carousel(position);
};
// adds the position of the carousel array
var nextItem = () => {
  position++;
  carousel(position);
};

var carousel = (param_position) => {
  // returns an array of the carousel items in the html page
  let carousel_items = document.getElementsByClassName("carousel-items");

  // turns the carousel around if param position gets to negative
  if (param_position < 0) {
    param_position = carousel_items.length - 1;
    position = carousel_items.length - 1;
  }
  // turns the carousel around if param position gets too high
  if (param_position >= carousel_items.length) {
    param_position = 0;
    position = 0;
  }
  // makes all the carousel items disappear
  for (var i = 0; i < carousel_items.length; i++) {
    carousel_items[i].style.display = "none";
  }
  // makes the carousel item that is currently on display appear
  carousel_items[param_position].style.display = "block";
};

// defines a function that gives the arrows an event listener
var giveArrowEventListeners = () => {
  for (var i = 0; i < 3; i++) {
    prevArrow = document.getElementsByClassName("prev")[i];
    nextArrow = document.getElementsByClassName("next")[i];
    prevArrow.addEventListener("click", prevItem);
    nextArrow.addEventListener("click", nextItem);
  }
};



