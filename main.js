

let jelly = 30000



//#region --STATE----


const clickUpgrades = [
  {
    name: 'small net',
    price: 50,
    quantity: 1,
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
    name: 'beat drop',
    price: 1000,
    quantity: 0,
    bonus: 10
  },
  {
    name: 'house party',
    price: 3500,
    quantity: 0,
    bonus: 100
  }
]
// #endregion



// #region LOGIC----


function mineJelly() {
  jelly += 0
  let totalBonus = 0
  for (let i = 0; i < clickUpgrades.length; i++) {
    let upgrade = clickUpgrades[i]
    totalBonus += upgrade.bonus * upgrade.quantity
  }
  jelly += totalBonus
  updateJellyCount()
}

function mineAutoJelly() {
  jelly += 0
  let totalBonus = 0
  for (let i = 0; i < autoUpgrades.length; i++) {
    let auto = autoUpgrades[i]
    totalBonus += auto.bonus * auto.quantity
  }
  jelly += totalBonus
  updateJellyCount()
}

function buyNet() {
  let net = clickUpgrades[0]
  if (jelly >= net.price) {
    jelly -= net.price
    net.quantity++
    net.price = net.quantity * net.price // this is the SOLE location of math for our price
    let purchasedNetElm = document.getElementById('net')
    purchasedNetElm.innerText = net.quantity.toString()
    updateJellyCount()
    displayClickBonus()
    upgradeNetIncrease()
  }
}

function buyScooper() {
  let net = clickUpgrades[1]
  if (jelly >= net.price) {
    jelly -= net.price
    net.quantity++
    net.price = net.quantity * net.price + 25
    let purchasedScooper = document.getElementById('scooper')
    purchasedScooper.innerText = net.quantity.toString()
    updateJellyCount()
    displayClickBonus()
    upgradeScooperIncrease()
  }
}

function upgradeNetIncrease() {
  let upgrade = clickUpgrades[0]
  if (upgrade.quantity >= 1) {
    let increaseElm = document.getElementById('upgrade-net')
    increaseElm.innerText = upgrade.price.toString()

  }
}

function upgradeScooperIncrease() {
  let upgrade = clickUpgrades[1]
  if (upgrade.quantity >= 1) {
    let increaseElm = document.getElementById('upgrade-scooper')
    increaseElm.innerText = upgrade.price.toString()
  }
}

function buyBeatDrop() {
  let upgrade = autoUpgrades[0]
  if (jelly >= upgrade.price) {
    jelly -= upgrade.price
    upgrade.quantity++
    upgrade.price = upgrade.price * upgrade.quantity + 25
    let purchasedBeatElem = document.getElementById('beat')
    purchasedBeatElem.innerText = upgrade.quantity.toString()
  }
  updateJellyCount()
  mineAutoJelly()
  displayAutoBonus()
  upgradeBeatIncrease()
}

function buyHouseParty() {
  let upgrade = autoUpgrades[1]
  if (jelly >= upgrade.price) {
    jelly -= upgrade.price
    upgrade.quantity++
    upgrade.price = upgrade.price * upgrade.quantity + 25
    let purchasedPartyElm = document.getElementById('house')
    purchasedPartyElm.innerText = upgrade.quantity.toString()
  }
  updateJellyCount()
  mineAutoJelly()
  displayAutoBonus()
  upgradeHouseIncrease()
}

function upgradeBeatIncrease() {
  let upgrade = autoUpgrades[0]
  if (upgrade.quantity >= 1) {
    let increaseElm = document.getElementById('upgrade-beat')
    increaseElm.innerText = upgrade.price.toString()
  }
}

function upgradeHouseIncrease() {
  let upgrade = autoUpgrades[1]
  if (upgrade.quantity >= 1) {
    let increaseHouseElem = document.getElementById('upgrade-house')
    increaseHouseElem.innerText = upgrade.price.toString()
  }

}


setInterval(mineAutoJelly, 2000)



// #endregion



// #region GRAPHICS ----



function updateJellyCount() {
  let updateJellyElm = document.getElementById('current-jelly')
  updateJellyElm.innerText = jelly.toString()
}

function displayClickBonus() {
  let totalBonus = 0
  for (let i = 0; i < clickUpgrades.length; i++) {
    let upgrade = clickUpgrades[i]
    totalBonus += upgrade.bonus * upgrade.quantity
    let dispayBonusElm = document.getElementById('display-bonus')
    dispayBonusElm.innerText = `+ ${totalBonus}`
  }
}
displayClickBonus()

function displayAutoBonus() {
  let totalBonus = 0
  for (let i = 0; i < autoUpgrades.length; i++) {
    let upgrade = autoUpgrades[i]
    totalBonus += upgrade.bonus * upgrade.quantity
    let displayAutoElm = document.getElementById('auto-bonus')
    displayAutoElm.innerText = `+ ${totalBonus}`
  }
}




// #endregion
