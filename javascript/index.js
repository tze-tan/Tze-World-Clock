function displayTime() {
  // display Munich time
  let currentMunichTime = moment().tz("Europe/Berlin");
  let munichTimeElement = document.querySelector("#munich #time");
  let munichDateElement = document.querySelector("#munich #date");
  munichTimeElement.innerHTML = currentMunichTime.format("h:mm:ss A");
  munichDateElement.innerHTML = currentMunichTime.format("D MMMM YYYY");

  // display Melbourne time
  let currentMelbourneTime = moment().tz("Australia/Melbourne");
  let melbourneTimeElement = document.querySelector("#melbourne #time");
  let melbourneDateElement = document.querySelector("#melbourne #date");
  melbourneTimeElement.innerHTML = currentMelbourneTime.format("h:mm:ss A");
  melbourneDateElement.innerHTML = currentMelbourneTime.format("D MMMM YYYY");

  // display Kuala Lumpur time
  let currentKLTime = moment().tz("Asia/Kuala_Lumpur");
  let klTimeElement = document.querySelector("#kualalumpur #time");
  let klDateElement = document.querySelector("#kualalumpur #date");
  klTimeElement.innerHTML = currentKLTime.format("h:mm:ss A");
  klDateElement.innerHTML = currentKLTime.format("D MMMM YYYY");
}

displayTime();
//setInterval(displayTime, 1000);
