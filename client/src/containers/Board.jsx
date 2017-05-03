import React from 'react'
import Square from '../components/Square'

class Board extends React.Component {
  constructor (props) {
    super(props)
  }

  handleClick (event) {
    const index = event.target.id
    this.props.onSquareClick(this.props.state.player, index)
  }

  render () {
    const squares = this.props.state.squares.map((square, index) => {
      return (
        <Square square={square} index={index} handleClick={this.handleClick.bind(this)} />
      )
    })

    return (
      <div className='board'>
        <div className='column'>
          {squares[0]}
          {squares[1]}
          {squares[2]}
        </div>
        <div className='column'>
          {squares[3]}
          {squares[4]}
          {squares[5]}
        </div>
        <div className='column'>
          {squares[6]}
          {squares[7]}
          {squares[8]}
        </div>
      </div>
    )
  }
}

export default Board
