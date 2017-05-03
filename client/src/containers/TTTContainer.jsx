import React from 'react'
import Board from './Board'
import Square from '../models/Square'
import WinChecker from '../models/WinChecker'
import InfoBox from '../components/InfoBox'

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
    if (this.state.winner) {
      // reset the game
      const squaresArray = this.state.squares
      for (var i = 0; i < 9; i++) {
        squaresArray[i].played = false
        squaresArray[i].value = null
      }
      this.setState({
        squares: squaresArray,
        player: 'X',
        winner: null
      })
      this.setState({squares: squaresArray})
      console.log('reset', this.state.squares)
      return
    }

    const square = this.state.squares[index]
    console.log('play', this.state.squares)
    if (!square.played) {
      square.value = this.state.player
      square.played = true

      if (this.winChecker.checkAll(this.state.squares)) {
        // player has won, game over
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
        <Board squares={this.state.squares} player={this.state.player} onSquareClick={this.playSquare.bind(this)} />
        <InfoBox player={this.state.player} winner={this.state.winner} />
      </div>
    )
  }
}

export default TTTContainer
