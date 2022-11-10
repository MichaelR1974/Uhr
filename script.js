'use strict'
const secondsHand = document.querySelector('#second-hand')
const minutesHand = document.querySelector('#min-hand')
const hoursHand = document.querySelector('#hour-hand')

function startTime() {
  const today = new Date()
  let h = today.getHours()
  let m = today.getMinutes()
  let s = today.getSeconds()
  m = checkTime(m)
  s = checkTime(s)
  document.querySelector('#clock').innerHTML = h + ':' + m + ':' + s
  setTimeout(startTime, 1000)
}

function checkTime(i) {
  if (i < 10) {
    i = '0' + i
  }
  return i
}

function getTime() {
  const timeInterval = 6
  const now = new Date()

  const seconds = now.getSeconds()
  secondsHand.style.transform = 'rotate(' + seconds * timeInterval + 'deg)'

  const minutes = now.getMinutes()
  minutesHand.style.transform = `rotate(${
    minutes * timeInterval + seconds / 10
  }deg)`
  const hours = now.getHours()
  hoursHand.style.transform = 'rotate(' + (hours * 30 + minutes / 2) + 'deg)'
}
setInterval(getTime, 1000)
startTime()
