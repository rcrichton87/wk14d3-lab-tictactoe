import React from 'react'
import Board from './Board'
import Square from '../models/Square'
import WinChecker from '../models/WinChecker'

class TTTContainer extends React.Component {
  constructor (props) {
    super(props)

    const squaresArray = []

    for (var i = 0; i < 9; i++) {
      squaresArray.push(new Square(i))
    }
    this.winChecker = new WinChecker()
    this.state = {
      squares: squaresArray,
      player: 'X',
      winner: null
    }
  }

  playSquare (player, index) {
    // console.log('index', index)
    // console.log('squares', this.state.squares)
    // console.log('square', this.state.squares[index])
    const square = this.state.squares[index]
    if (!square.played) {
      square.value = this.state.player
      square.played = true

      if (this.winChecker.checkAll(this.state.squares)) {
        // player has won, game over
        console.log('winner found')
        this.setState({winner: player})
        // do some win logic / messaging here
      } else {
        // continue game
        if (this.state.player === 'X') {
          this.setState({player: 'O'})
        } else {
          this.setState({player: 'X'})
        }
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
