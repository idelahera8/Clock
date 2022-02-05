const btn = document.getElementById("btn")
const clock = document.getElementById("clock")

let date = null
let hr = 0
let min = 0
let sec = 0
let period = "AM"
let interval = null

function showTime() {
  // Obtain time of the moment
  date = new Date()
  hr = date.getHours()
  min = date.getMinutes()
  sec = date.getSeconds()

  // Check for the format of the hours, minutes and seconds
  if (hr < 10) {
    hr = "0" + hr
  }

  if (min < 10) {
    min = "0" + min
  }

  if (sec < 10) {
    sec = "0" + sec
  }

  // check if it is morning or afternoon
  if (hr > 12) {
    hr = hr - 12
    period = "PM"
  } else {
    period = "AM"
  }
  if (hr == 0) {
    hr = 12
  }

  // Create the time string
  time = hr + ":" + min + ":" + sec + " " + period

  // Display time
  clock.textContent = time

  // Repeat function every second
  interval = setInterval(showTime, 1000)

}
