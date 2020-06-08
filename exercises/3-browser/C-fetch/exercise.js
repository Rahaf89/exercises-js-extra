/*
================

Create an HTML file that uses this javascript file.
The HTML file should contain a form with 2 inputs: (latitude and longitude), and a button with the text GET.
When you click in the button, you should use fetch function to get information from the URL https://fcc-weather-api.glitch.me/api/current?lat=35&lon=160 with 
user latitude and longitude.
When you get the response from the server, print the current temperature in an <h3> marker.
Validate the form when you click on the button, if the inputs are empty or ar not numeric, show a warning message
If you can, show the humidity and the image link given by the API object.

================
*/

function getPosition() {
  let userLat = document.getElementById("latitude").value;
  let userLon = document.getElementById("longitude").value;
  
  if (userLat=="" || userLon==""){
      alert ("Input fields can not be empty")
  } 
  else{
  const get = fetch(
    "https://fcc-weather-api.glitch.me/api/current?" +
      "lat=" +
      userLat +
      "&lon=" +
      userLon
  );
  get
    .then((response) => response.json())
    .then((get) => {
      const temp = get.main.temp;
      const tempHtmlElement = document.getElementById("temperature");
      tempHtmlElement.innerHTML = "<p>" + "Temperature: " + temp + "°<span>C</span></p>";
      const humidity = get.main.humidity;
      const humidityHtmlElement = document.getElementById("humidity");
      humidityHtmlElement.innerHTML = "<p>" +"Humidity: " + humidity + "</p>";
    }
    )
  }
}
let button = document.getElementById("get");
button.addEventListener("click", getPosition);
