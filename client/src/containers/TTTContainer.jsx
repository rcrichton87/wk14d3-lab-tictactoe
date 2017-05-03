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
      squares: squaresArray,
      player: 'X'
    }
  }

  playSquare (player, index) {
    console.log('index', index)
    console.log('squares', this.state.squares)
    console.log('square', this.state.squares[index])
    const square = this.state.squares[index]
    if (!square.played) {
      square.value = this.state.player
      square.played = true
      if (this.state.player === 'X') {
        this.setState({player: 'O'})
      } else {
        this.setState({player: 'X'})
      }
    }
  }

  render () {
    return (
      <div>
        <Board state={this.state} onSquareClick={this.playSquare.bind(this)} />
      </div>
    )
  }
}

export default TTTContainer
