import React from 'react'
import './Palette.css'
import Color from './Color'

let nextId = 1


class Palette extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      colors : []
    }

    this.handleAddColor = this.handleAddColor.bind(this)
    this.handleRemoveColor = this.handleRemoveColor.bind(this)
  }

  handleAddColor() {
    this.setState(
      {
        colors:
          this.state.colors.concat({
            id: nextId
          })
      }
    )
    nextId += 1
  }

  handleRemoveColor(id) {
    this.setState(
      {
        colors:
          this.state.colors.filter(color => color.id !== id)
      }
    )
  }

  render() {
    const colors = this.state.colors.map((color) =>
       <Color
         key={color.id}
         id={color.id}
         onRemoveColor={this.handleRemoveColor}
       />
   )

    return (
      <div className="palette">
      { colors.length > 0 ? colors : <p>This Palette is empty.</p> }
        <button
          onClick= {this.handleAddColor}>
          ➕
        </button>
      </div>
    )
  }
}

export default Palette
