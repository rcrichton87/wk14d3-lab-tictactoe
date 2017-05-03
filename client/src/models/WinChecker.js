
class WinChecker {
  constructor () {

  }

  checkAll (array) {
    // console.log(array)
    console.log('checking', this.checkRows(array), this.checkColumns(array), this.checkDiagonals(array))
    return this.checkRows(array) || this.checkColumns(array) || this.checkDiagonals(array)
  }

  checkColumns (array) {
    for (var i = 0; i < 8; i += 3) {
        // check for nulls, return if any
      if (array[i].value !== null && array[i + 1].value !== null && array[i + 2].value !== null) {
        // check all equal, if so then return true
        if (array[i].value === array[i + 1].value && array[i].value === array[i + 2].value) {
          return true
        }
      }
    }
    return false
  }

  checkRows (array) {
    for (var i = 0; i < 3; i++) {
        // check for nulls, return if any
      if (array[i].value !== null && array[i + 3].value !== null && array[i + 6].value !== null) {
        // check all equal, if so then return true
        if (array[i].value === array[i + 3].value && array[i].value === array[i + 6].value) {
          return true
        }
      }
    }
    return false
  }

  checkDiagonals (array) {
    if (array[0].value !== null && array[4].value !== null && array[8].value !== null) {
      if (array[0].value === array[4].value && array[0].value === array[8].value) {
        return true
      }
    }
    if (array[2].value !== null && array[4].value !== null && array[6].value !== null) {
      if (array[2].value === array[4].value && array[2].value === array[6].value) {
        return true
      }
    }
    return false
  }
}
export default WinChecker
