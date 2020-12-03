let coins = 0;

let coinClicker = document.getElementById('+1')
coinClicker.addEventListener('click', () => {
  coins++
  coinAmt.textContent = coins + ' coins'
})

let coinAmt = document.getElementById('amt')
coinAmt.textContent = coins + ' coins'
