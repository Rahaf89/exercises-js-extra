function getPosition() {
  const apikey = "a75595ec0a1e42379ec6d18c703db66a";
  let userLat = document.getElementById("latitude").value;
  let userLon = document.getElementById("longitude").value;

  if (userLat == "" || userLon == "") {
    alert("Input fields can not be empty");
  } else {
    const get = fetch(
      "https://api.weatherbit.io/v2.0/current?" +
        "lat=" +
        userLat +
        "&lon=" +
        userLon +
        "&key=" +
        apikey
    );
    get
      .then((response) => response.json())
      .then((get) => {
        const temp = get.data[0].temp.toFixed(1);
        const tempHtmlElement = document.getElementById("temperature");
        tempHtmlElement.innerHTML =
          "<p>" + "Temperature: " + temp + "°<span>C</span></p>";
        const humidity = get.data[0].rh;
        const humidityHtmlElement = document.getElementById("humidity");
        humidityHtmlElement.innerHTML =
          "<p>" + "Humidity: " + humidity + "<span>%</span></p>";
      });
  }
}
let button = document.getElementById("get");
button.addEventListener("click", getPosition);
