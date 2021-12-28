import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Palette from './Palette'

class App extends React.Component {
  render = () => {
    return (
        <Palette />
    )
  }
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
