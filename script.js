var cardContainer = document.getElementById("container");
var btns = cardContainer.getElementsByClassName("cardItem");


// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current[0] == null) {
    this.className += " active";
      }
  else {
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  }
});
}


var ApGroup = document.getElementById("ApGroup");
var ApController = document.getElementById("ApExpandBtn");

ApController.addEventListener("click", function() {
  ApGroup.classList.toggle("Expand");
});


//ExpandList of Elements
// 1) Make All of them Expandable\
//      1.1 DoubleAllOfTheElements
//      1.2 HideAllOfTheElements. 
// 2) OnClickOfExpand toogleClass Expand
// 



//get list of elements
//check its textContent
// if its 00 then style - grey
// if its other then style - normal
/*
var counterElements = document.getElementsByClassName("AP-counter");
var chevronUp = document.getElementsByClassName("chevron-up-10");
var chevronDown = document.getElementsByClassName("chevron-down-10");
for (i=0; i < counterElements.length;i++) {
  current = counterElements[i];
  currentChevronUp = chevronUp[i];
  currentChevronDown = chevronDown[i];
  if (current.textContent == 00) {
    current.style.color = "var(--midGrey)";
    current.style.fontWeight = "400";
    currentChevronUp.style.opacity = "0.3";
    currentChevronDown.style.opacity = "0.3";
  }
  else {
    current.style.color = "var(--black)";
  }
}
*/