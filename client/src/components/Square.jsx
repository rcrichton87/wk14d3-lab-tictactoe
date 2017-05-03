import React from 'react'

class Square extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      square: this.props.square,
      index: this.props.index
    }
  }

  render () {
    return (
      <span id={this.props.index} className='square' onClick={this.props.handleClick}>
        {this.state.square.value}
      </span>
    )
  }
}

export default Square
