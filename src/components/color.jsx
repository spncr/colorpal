import React, {useState} from 'react'
import { useDrag } from 'react-dnd'
import './color.css'

const randomColor = () => {
  let rando = Math.random() * 0xFFFFFF
  rando = Math.floor(rando)
  rando = rando.toString(16);
  return '#' + rando.padStart(6,0)
}

export default function Color(props) {
  const [color, setColor] = useState(randomColor())

  const handleChange = (e) => {
    setColor(e.target.value)
  }

  const handleRemove = (e) => {
    props.onRemoveColor(props.id)
  }

  return (
    <div className="color" title={ color }>
      <label
        onChange={ handleChange }
        style={{ background: color }}
      ><span className="visually-hidden">Pick a color</span>
      <input
        type="color"
        className="picker"
        value={ color }
        onChange={ handleChange }
      />
      </label>
      <button
        className="trash"
        name='delete'
        onClick={handleRemove}>
        🗑
        <span className="visually-hidden">delete color</span>
      </button>
    </div>
  )
}
