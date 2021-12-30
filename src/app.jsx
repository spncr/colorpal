import React, {useState} from 'react'
import Palette from "./components/palette.jsx"
import './app.css'

let nextId = 1

export default function App() {
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
    <>
    <header>
      <h1>ColorPAL</h1>
      <button
        onClick = {handleAddPalette}>
        ➕ 🎨
      </button>
    </header>
    <div className="palettes">
      {palettes.map((palette) =>
        <Palette
          key = {palette.id}
          id = {palette.id}
          onRemovePalette = {handleRemovePalette}
        />
      )}

    </div>    </>
  )
}
