function changeButtonText() {
  var button = document.getElementById("myButton");
  button.innerHTML = "Learn More";
  var x = document.getElementById("myDIV");
  if (x.style.display == "block") {
    x.style.display = "none";
  } else {
      x.style.display = "block";
      button.innerHTML = "Learn Less";
  }
}
