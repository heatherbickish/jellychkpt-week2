

let jelly = 70000



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
  jelly += 1
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
    let priceIncrease = net.quantity * net.price
    jelly -= priceIncrease
    net.quantity++
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
    let priceIncrease = net.quantity * net.price
    jelly -= priceIncrease
    net.quantity++
    let purchasedScooper = document.getElementById('scooper')
    purchasedScooper.innerText = net.quantity.toString()
    updateJellyCount()
    displayClickBonus()
    upgradeScooperIncrease()
  }
}

function upgradeNetIncrease() {
  let upgrade = clickUpgrades[0]
  let increase = 0
  if (upgrade.quantity >= 1) {
    increase += upgrade.quantity * upgrade.price
    increase
    let increaseElm = document.getElementById('upgrade-net')
    increaseElm.innerText = increase.toString()

  }
}

function upgradeScooperIncrease() {
  let upgrade = clickUpgrades[1]
  let increase = 0
  if (upgrade.quantity >= 1) {
    increase += upgrade.quantity * upgrade.price
    let increaseElm = document.getElementById('upgrade-scooper')
    increaseElm.innerText = increase.toString()
  }
}

function buyBeatDrop() {
  let upgrade = autoUpgrades[0]
  if (jelly >= upgrade.price) {
    jelly -= upgrade.price
    let priceIncrease = upgrade.quantity * upgrade.price
    jelly -= priceIncrease
    upgrade.quantity++
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
    let priceIncrease = upgrade.quantity * upgrade.price
    jelly -= priceIncrease
    upgrade.quantity++
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
    let increase = upgrade.quantity * upgrade.price * 2
    let increaseElm = document.getElementById('upgrade-beat')
    increaseElm.innerText = increase.toString()
    console.log(increase)
  }
}

function upgradeHouseIncrease() {
  let upgrade = autoUpgrades[1]
  if (upgrade.quantity >= 1) {
    let increaseHouse = upgrade.quantity * upgrade.price * 2
    let increaseHouseElem = document.getElementById('upgrade-house')
    increaseHouseElem.innerText = increaseHouse.toString()
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
  let totalBonus = 1
  for (let i = 0; i < clickUpgrades.length; i++) {
    let upgrade = clickUpgrades[i]
    totalBonus += upgrade.bonus * upgrade.quantity
    let dispayBonusElm = document.getElementById('display-bonus')
    dispayBonusElm.innerText = `+ ${totalBonus}`
  }
}

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
