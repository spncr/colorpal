import useStoredState from './hooks/useStoredState.jsx'
import Palette from "./components/palette.jsx"
import './app.css'

export default function App() {
  const [palette_ids, setPaletteIds] = useStoredState([], 'palette_ids');

  function handleAddPalette() {
    let nextId

    palette_ids.length > 0 ? nextId = Math.max(...palette_ids) + 1 : nextId = 1

    setPaletteIds(
      palette_ids.concat(nextId))
  }

  function handleRemovePalette(id) {
    setPaletteIds(
      palette_ids.filter(i => i !== id)
    )
    window.localStorage.removeItem('palette_' + id + '_name')
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
      {palette_ids.map((id) =>
        <Palette
          key = {id}
          id = {id}
          onRemovePalette = {handleRemovePalette}
        />
      )}

    </div>    </>
  )
}
