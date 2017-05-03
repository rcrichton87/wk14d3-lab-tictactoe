import React from 'react'

class Square extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      square: this.props.square
    }
  }

  render () {
    return (
      <span className='square' >
        {this.state.square.value}
      </span>
    )
  }
}

export default Square
