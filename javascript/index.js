let timeFormat = "h:mm:ss A";
let dateFormat = "D MMMM YYYY";

// Part 1: display 3 location times by default - Munich, Melbourne, Kuala Lumpur
function displayTime() {
  // display Munich time
  let currentMunichTime = moment().tz("Europe/Berlin");
  let munichTimeElement = document.querySelector("#munich #time");
  let munichDateElement = document.querySelector("#munich #date");
  munichTimeElement.innerHTML = currentMunichTime.format(timeFormat);
  munichDateElement.innerHTML = currentMunichTime.format(dateFormat);

  // display Melbourne time
  let currentMelbourneTime = moment().tz("Australia/Melbourne");
  let melbourneTimeElement = document.querySelector("#melbourne #time");
  let melbourneDateElement = document.querySelector("#melbourne #date");
  melbourneTimeElement.innerHTML = currentMelbourneTime.format(timeFormat);
  melbourneDateElement.innerHTML = currentMelbourneTime.format(dateFormat);

  // display Kuala Lumpur time
  let currentKLTime = moment().tz("Asia/Kuala_Lumpur");
  let klTimeElement = document.querySelector("#kualalumpur #time");
  let klDateElement = document.querySelector("#kualalumpur #date");
  klTimeElement.innerHTML = currentKLTime.format(timeFormat);
  klDateElement.innerHTML = currentKLTime.format(dateFormat);
}

displayTime();
setInterval(displayTime, 1000);

// Part 2: Display time for selected cities from the dropdown, which has 3 options, London, Gold Coast, New York,
let selectElement = document.querySelector("#cities");
selectElement.addEventListener("change", displayNewLocation);

function displayNewLocation(event) {
  let selectedCity = event.target.value;
  if (selectedCity === "current-city") {
    selectedCity = moment.tz.guess();
  }

  // this is formatting the city name so that they can be used to display in the UI so it doesn't appear as Timezone name
  // e.g. America/New_York will be displayed as New York
  let selectedCityFormatted = selectedCity.replace("_", " ").split("/")[1];

  // to display Goldcoast as goldcoast, and not queensland, which is its timezone
  if (selectedCityFormatted === "Queensland") {
    selectedCityFormatted = "Gold Coast";
  }

  let selectedCityDatetime = moment().tz(selectedCity);

  let htmlBlock = document.querySelector("#date-content");
  console.log(htmlBlock);
  htmlBlock.innerHTML = `
        <div class="locations" id="${selectedCityFormatted}">
          <div>
            <h2>${selectedCityFormatted}</h2>
            <div class="date" id="date">${selectedCityDatetime.format(
              dateFormat
            )}</div>
          </div>
          <h2 id="time">${selectedCityDatetime.format(timeFormat)}</h2>
        </div>
        
        <a href="/">Return home </a>`;
}
