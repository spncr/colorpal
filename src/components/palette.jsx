import React from 'react'
import '../styles/palette.css'
import Color from './color.jsx'

let nextId = 1

class Palette extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      colors : [{id: nextId}],
      name: 'numpty',
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
      { colors }
        <button
          onClick= {this.handleAddColor}>
          ➕
        </button>
      </div>
    )
  }
}

export default Palette
