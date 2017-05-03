import React from 'react'
import Board from './Board'
import Square from '../models/Square'

class TTTContainer extends React.Component {
  constructor (props) {
    super(props)

    const squaresArray = []

    for (var i = 0; i < 9; i++) {
      squaresArray.push(new Square(i))
    }

    this.state = {
      squares: squaresArray
    }
  }

  render () {
    return (
      <div>
        <Board squares={this.state.squares} />
      </div>
    )
  }
}

export default TTTContainer
