import React from 'react'
import './palette.css'
import Color from './color.jsx'

let nextId = 1

class Palette extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      colors : [{id: nextId}],
      name: 'palette ' + props.id,
      id: props.id
    }
    nextId += 1

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
    const colors = this.state.colors.filter(color => color.id !== id)
    if (colors.length <= 0) this.props.onRemovePalette(this.props.id)
    else {
      this.setState(
        { colors: this.state.colors.filter(color => color.id !== id) }
      )
    }
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
        <h2 className="name"> {this.state.name} </h2>
        <div className="controls">
          <button
            title="Add a color"
            onClick= {this.handleAddColor}>
            +
            <span className="visually-hidden">add new color to {this.state.name} palette</span>
          </button>
        </div>
        <div className="colors">
          { colors }
        </div>
      </div>
    )
  }
}

export default Palette
