import React from 'react'
import '../styles/color.css'

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
      color: randomColor()
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
    const color = this.state.color
    return (
      <label
        className="color"
        onClick={ this.handleClick }
        onChange={ this.handleChange }
        style={{ background: color }}
      > { color }
        { this.state.displayColorPicker &&
          <input
            type="color"
            className="picker"
            value={this.state.color}
            onChange={this.handleChange}
          />
        }
        <div className="controls">
          <button
            className="trash"
            onClick={this.handleRemove}
          > 🗑
          <span className="visually-hidden">delete</span>
          </button>
        </div>
      </label>
    )
  }
}

export default Color
