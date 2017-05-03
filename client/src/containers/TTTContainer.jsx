import React from 'react'
import Board from './Board'
import Square from '../models/Square'

class TTTContainer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      squares: []
    }
  }

  render () {
    return (
      <div>
        <Board />
      </div>
    )
  }
}

export default TTTContainer
