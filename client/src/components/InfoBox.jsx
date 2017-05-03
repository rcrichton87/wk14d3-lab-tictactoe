import React from 'react'

class InfoBox extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    let textToShow = ''
    if (this.props.winner) {
      textToShow = `${this.props.winner} has won the game!  Click to reset`
    } else {
      textToShow = `${this.props.player}'s turn to play, click on a blank square`
    }

    return (
      <div id='info-box'>
        <p> {textToShow} </p>
      </div>
    )
  }
}

export default InfoBox
