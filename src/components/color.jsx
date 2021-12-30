import React from 'react'
import './color.css'

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

  handleClick = (e) => {
    this.setState({ displayColorPicker: true})
  }

  handleClose = (e) => {
    this.setState({ displayColorPicker: false})
  }

  handleChange = (e) => {
    this.setState({ color: e.target.value })
  }

  handleRemove = (e) => {
    this.props.onRemoveColor(this.props.id)
  }

  render(props) {
    const color = this.state.color

    return (
      <div className="color" title={ color }>
        <label
          onClick={ this.handleClick }
          onChange={ this.handleChange }
          style={{ background: color }}
        >
          { this.state.displayColorPicker &&
            <input
              type="color"
              className="picker"
              value={this.state.color}
              onChange={this.handleChange}
            />
          }
        </label>
        <button
          className="trash"
          name='delete'
          onClick={this.handleRemove}>
          🗑
          <span className="visually-hidden">delete color</span>
        </button>
      </div>
    )
  }
}

export default Color
