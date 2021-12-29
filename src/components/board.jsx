import React, {useState} from 'react'
import '../styles/board.css'
import Palette from './palette.jsx'

let nextId = 1

export default function Board() {
  const [palettes, setPalettes] = useState([]);

  function handleAddPalette() {
    setPalettes(
      palettes.concat(
        {id: nextId}
      ));
    nextId += 1
  }

  function handleRemovePalette(id) {
    setPalettes(
      palettes.filter(palette => palette.id !== id)
    )
  }

  return (
    <div className="board">
      {palettes.map((palette) =>
        <Palette
          key = {palette.id}
          id = {palette.id}
          onRemovePalette = {handleRemovePalette}
        />
      )}
      <button
        onClick = {handleAddPalette}>
        ➕ 🎨
      </button>
    </div>
  )
}
