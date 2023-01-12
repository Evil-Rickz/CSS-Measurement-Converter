// NAVIGATION
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navElements = document.getElementById('nav-menu', 'nav-toggle', 'nav-close', 'nav-container');

function toggleMenu() {
  navMenu.classList.toggle('hide-menu');
  navClose.classList.toggle('hide-menu');
  navToggle.classList.toggle('hide-menu');
}

navElements.addEventListener('click', function(event) {
  if (event.target === navToggle || event.target === navClose || event.target.classList.contains('nav_link')) {
    toggleMenu();
  }
});

const navLinks = document.querySelectorAll('.nav_link');

navLinks.forEach(link => link.addEventListener('click', toggleMenu));


// MEANSUREMENT CONVERT

function convertMeasurement(event) {
    // prevent the form from submitting
    event.preventDefault();
  
    // get the input value and units
    var inputValue = document.getElementById("input-value").value;
    var inputUnit = document.getElementById("input-unit").value;
    var outputUnit = document.getElementById("output-unit").value;
  
    // convert the input value to the output unit
    var outputValue;
    if (inputUnit === "px" && outputUnit === "rem") {
      outputValue = inputValue / 16;
    } else if (inputUnit === "rem" && outputUnit === "px") {
      outputValue = inputValue * 16;
    } else if (inputUnit === "em" && outputUnit === "px") {
      outputValue = inputValue * 16;
    } else if (inputUnit === "px" && outputUnit === "em") {
      outputValue = inputValue / 16;
    } else {
      outputValue = inputValue;
    }
  
    // display the output value
    document.getElementById("output").innerHTML = outputValue + " " + outputUnit;
  }
  
  // attach the event listener to the form's submit event
  document.getElementById("conversion-form").addEventListener("submit", convertMeasurement);
  
// STORE FEEDBACKS

document.getElementById("feedback-form").addEventListener("submit", function(event) {
    // prevent the form from submitting
    event.preventDefault();
  
    // get the form data
    var email = document.getElementById("email").value;
    var title = document.getElementById("title").value;
    var comments = document.getElementById("comments").value;
  
    // send the form data to the API
    fetch("https://example.com/api/feedback", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        title: title,
        comments: comments
      })
    })
    .then(function(response) {
      // handle the response from the API
    })
    .catch(function(error) {
      // handle any errors
    });
  });

  
  