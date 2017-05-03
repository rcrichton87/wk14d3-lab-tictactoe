import React from 'react'
import Square from '../components/Square'

class Board extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const squares = this.props.squares.map((square, index) => {
      return (
        <Square square={square} />
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
