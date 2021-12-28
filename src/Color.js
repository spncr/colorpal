import React from 'react'
import './Color.css'
const randomColor = () => {
    let rando = Math.random() * 0xFFFFFF
    rando = Math.floor(rando)
    rando = rando.toString(16);
    return '#' + rando.padStart(6,0)
  }

class Color extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      displayColorPicker: false,
      color : randomColor()
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleRemove = this.handleRemove.bind(this)

  }

  handleClick = () => {
    this.setState({ displayColorPicker: true})
  }

  handleClose = () => {
    this.setState({ displayColorPicker: false})
  }

  handleChange = (e) => {
    this.setState({ color: e.target.value })
  }

  handleRemove = () => {
    this.props.onRemoveColor(this.props.id)
  }

  render(props) {
    return (
      <label
        className="color"
        onClick={ this.handleClick }
        onChange={ this.handleChange }
        style={{ background: this.state.color }}
      > { this.state.color }
        { this.state.displayColorPicker &&
          <input
            type="color"
            className="hidden"
            value={this.state.color}
            onChange={this.handleChange}
          />
        }
        <p>{this.props.id}</p>
        <button onClick={this.handleRemove}>🗑</button>
      </label>
    )
  }
}

export default Color
