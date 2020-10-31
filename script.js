let coins = 0;


let coinamt = document.createElement('h1')
coinamt.textContent = coins
document.body.appendChild(coinamt)

let coin1 = document.createElement('button')
coin1.textContent = '+1'
coin1.addEventListener('click', () => {
coins++
coinamt.textContent = coins;
})

document.body.appendChild(coin1)
