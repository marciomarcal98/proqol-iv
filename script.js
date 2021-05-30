let partOne = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let partTwo = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let partThree = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

const values = {
  updateArrayOne(value, key) {
    partOne[key] = parseInt(value)
    this.updateTotalOne()
  },

  updateArrayTwo(value, key) {
    partTwo[key] = parseInt(value)
    this.updateTotalTwo()
  },

  updateArrayThree(value, key) {
    partThree[key] = parseInt(value)
    this.updateTotalThree()
  },

  updateTotalOne() {
    let total = partOne.reduce((accumulator, currentValue) => accumulator + currentValue)
    document.querySelector('.first-total span').innerHTML = `Total: ${total}`
  },

  updateTotalTwo() {
    let total = partTwo.reduce((accumulator, currentValue) => accumulator + currentValue)
    document.querySelector('.second-total span').innerHTML = `Total: ${total}`
  },

  updateTotalThree() {
    let total = partThree.reduce((accumulator, currentValue) => accumulator + currentValue)
    document.querySelector('.third-total span').innerHTML = `Total: ${total}`
  },
}