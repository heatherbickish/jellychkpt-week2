

let jelly = 2000



//#region --STATE----


const clickUpgrades = [
  {
    name: 'small net',
    price: 50,
    quantity: 0,
    bonus: 1
  },
  {
    name: 'giant scooper',
    price: 500,
    quantity: 0,
    bonus: 5
  }
]

const autoUpgrades = [
  {
    name: 'bass drops',
    price: 1000,
    quantity: 0,
    bonus: 10
  },
  {
    name: 'house party',
    price: 50000,
    quantity: 0,
    bonus: 100
  }
]
// #endregion



// #region LOGIC----


function mineJelly() {
  jelly += 1

  let totalBonus = 0
  for (let i = 0; i < clickUpgrades.length; i++) {
    let upgrade = clickUpgrades[i]
    totalBonus += upgrade.bonus * upgrade.quantity
  }
  jelly += totalBonus
  updateJellyCount()
}

function buyNet() {
  let net = clickUpgrades[0]
  if (jelly >= net.price) {
    jelly -= net.price
    net.quantity++
    let purchasedNetElm = document.getElementById('net')
    purchasedNetElm.innerText = net.quantity.toString()
    updateJellyCount()
    displayBonus()
  }
}

function buyScooper() {
  let net = clickUpgrades[1]
  if (jelly >= net.price) {
    jelly -= net.price
    net.quantity++
    let purchasedScooper = document.getElementById('scooper')
    purchasedScooper.innerText = net.quantity.toString()
    updateJellyCount()
    displayBonus()
  }
}




// #endregion



// #region GRAPHICS ----



function updateJellyCount() {
  let updateJellyElm = document.getElementById('current-jelly')
  updateJellyElm.innerText = jelly.toString()
}

function displayBonus() {
  let totalBonus = 1
  for (let i = 0; i < clickUpgrades.length; i++) {
    let upgrade = clickUpgrades[i]
    totalBonus += upgrade.bonus * upgrade.quantity

    console.log(totalBonus);
    // instead of drawing, add this total to the jelly
    let dispayBonusElm = document.getElementById('display-bonus')
    dispayBonusElm.innerText = `+ ${totalBonus}`
  }
}





// #endregion
