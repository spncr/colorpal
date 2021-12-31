import React, {useState} from 'react'
import './palette.css'
import Color from './color.jsx'

let nextId = 2

export default function Palette(props) {
  const [colors, setColors] = useState([])
  const [name, setName] = useState('palette ' + props.id)

  const handleAddColor = () => {
    setColors(colors.concat({id: nextId}))
    nextId += 1
  }

  const handleRemoveColor = (id) => {
    const new_colors = colors.filter(color => color.id !== id)
    if (new_colors.length <= 0) props.onRemovePalette(props.id)
    else setColors(new_colors)
  }

  return (
    <div className="palette">
      <h2 className="name"> {name} </h2>
      <div className="controls">
        <button
          title="Add a color"
          onClick= {handleAddColor}>
          +
          <span className="visually-hidden">add new color to {name} palette</span>
        </button>
      </div>
      <div className="colors">
        {colors.map((color) =>
          <Color
           key={color.id}
           id={color.id}
           onRemoveColor={handleRemoveColor}/>)
         }
      </div>
    </div>
  )
}
