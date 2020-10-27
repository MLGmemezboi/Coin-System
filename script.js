var coins = 0;

//payment function
let buy2 = document.createElement("button");
buy2.textContent = "pay";
buy2.addEventListener("click", () => {
  if (coins === 50) {
    let coingenerator2 = document.createElement("button");
    coingenerator2.textContent = "+1 coins";
    coingenerator2.addEventListener("click", () => {
      coins + 2;
    });
  }
});
document.body.appendChild(buy2);
//Click this to get more coins in the minigame thing
let coingenerator = document.createElement("button");
coingenerator.textContent = "+1 coin";
coingenerator.addEventListener("click", () => {
  coins + 1;
});
document.body.appendChild(coingenerator);

//shows the amount of coins you farmed
let coinamt = document.createElement("p");
coinamt.textContent = coins + " coins";
document.body.appendChild(coinamt);
