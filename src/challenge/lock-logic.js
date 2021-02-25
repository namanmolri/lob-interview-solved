const redirect = window.redirect

const SECRET_COMBO = [1, 3, 5, 1]

const lockState = window.mobx.observable({
  locked: true,
  wheels: [0, 0, 0, 0]
})

function changeDialValue (index, incrementBy) {
  
  currentWheel = this.lockState.wheels[index]
  if (currentWheel === 9 && incrementBy > 0) {
    currentWheel = 0
  } else if (currentWheel < 1 && incrementBy < 0) {
    currentWheel = 9
  } else {
    currentWheel += incrementBy
  }
  this.lockState.wheels[index] = currentWheel 

  this.lockState.locked = compare() 

  if (this.lockState.locked === false) {
    window.redirect('naman-molri') 
  }
}


function compare () {
  for (let i = 0; i < 4; i++) {
    if (this.lockState.wheels[i] !== SECRET_COMBO[i]) {
      return true
    }
  }
  return false
}

// let our other modules find our functions
window.lockState = lockState
window.changeDialValue = changeDialValue
