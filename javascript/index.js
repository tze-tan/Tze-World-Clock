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
  let selectedCityFormatted = event.target.value
    .replace("_", " ")
    .split("/")[1];

  if (selectedCityFormatted === "Queensland") {
    selectedCityFormatted = "Goldcoast";
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
        </div>;`;
}
