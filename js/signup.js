// stores the submit button as a variable
var submitButton = document.getElementById("submitbutton");

// check email function
var checkEmail = () => {
  // gets the user input on the email field
  emailInput = document.getElementById("emailInput").value;
  // gets the email error message
  emailError = document.getElementById("emailError");
  // if they fullfilled the requirements
  if (
    emailInput != "" &&
    emailInput.includes("@") &&
    emailInput.includes(".com")
  ) {
    // if they preveiously did not, but now they have, this makes the error message disappear
    if (!emailError.classList[1]) {
      emailError.classList.add("none");
    }
    return true;
  }
  // if they did not fulfill the requirements show the error message 
  else {
    emailError.classList.remove("none");
    return false;
  }
};

//check name function
var checkName = () => {
  // gets the user input on the name field
  nameInput = document.getElementById("nameInput").value;
  // gets the name error message
  nameError = document.getElementById("nameError");
   // if they fullfilled the requirements
  if (nameInput != "") {

    // if they preveiously did not, but now they have, this makes the error message disappear
    if (!nameError.classList[1]) {
      nameError.classList.add("none");
    }
    
    return true;
  } 
  // if they did not fulfill the requirements show the error message 
  else {
    nameError.classList.remove("none");
    return false;
  }
};

var checkTnc = () => {
  // gets the tnc checkbox input 
  tncInput = document.getElementById("tnc-checkbox").checked;
  // gets the tnc error message
  tncError = document.getElementById("tncError");
  // if the tnc checkbox is checked
  if (tncInput) {
    // if they preveiously did not, but now they have, this makes the error message disappear
    if (!tncError.classList[1]) {
      tncError.classList.add("none");
    }
    return true;
  } 
  // if they did not fulfill the requirements show the error message 
  else {
    tncError.classList.remove("none");
    return false;
  }
};

// combines all the check functions above
var checkForm = () => {
  // executes all the check functions
  checkEmail();
  checkName();
  checkTnc();

  // if all fulfilled the necessary requirements
  if (checkEmail() && checkName() && checkTnc()) {
    // gets the success message
    successMsg = document.getElementById("successMessage");
    // writes the success message with the name given by the user
    successMsg.innerHTML = `Thank You ${nameInput} for subscribing to our newsletter!`;
    // resets all the values of the fields
    document.getElementById("nameInput").value = "";
    document.getElementById("emailInput").value = "";
    document.getElementById("tnc-checkbox").checked = false;
    // disables all inputs and buttons
    document.getElementById("nameInput").disabled = true;
    document.getElementById("emailInput").disabled = true;
    document.getElementById("tnc-checkbox").disabled = true;
    document.getElementById("submitbutton").disabled = true;
    // makes success message visible
    successMsg.classList.remove("none");
  }
};

// adds an event listener to the submit button
submitButton.addEventListener("click", checkForm);
