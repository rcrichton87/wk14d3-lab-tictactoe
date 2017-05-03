import React from 'react'
import ReactDOM from 'react-dom'
import TTTContainer from './containers/TTTContainer'

window.onload = function () {
  ReactDOM.render(
    <TTTContainer />
    ,
    document.getElementById('app')
  )
}
