import useStoredState from '../hooks/useStoredState.jsx'
import Color from './color.jsx'
import './palette.css'

const randomColor = () => {
  let rando = Math.floor( Math.random() * 0xFFFFFF )
  return '#' + rando.toString(16).padStart(6,0)
}

export default function Palette(props) {
  let storageKey = 'palette_' + props.id
  let name = 'palette ' + props.id // const [name, setName] = useStoredState('palette ' + props.id, storageKey + '_name')

  const [colors, setColors] = useStoredState([{id: 1, hex: randomColor()}], storageKey + '_colors')

  const handleAddColor = () => {
    let nextId

    if (colors.length > 0) {
      let ids = colors.map((color) => color.id)
      nextId = Math.max(...ids) + 1
    } else {
      nextId = 1
    }

    setColors(colors.concat(
      [
        {id: nextId, hex: randomColor()}
      ]
    ))
  }

  const handleChangeColor = (id, newColor) => {
    const newColors = colors.slice()
    const index = newColors.findIndex(color => color.id === id)
    newColors[index] = {id: id, hex: newColor}

    setColors(newColors)
  }

  const handleRemoveColor = (id) => {
    const newColors = colors.filter(color => color.id !== id)
    if (newColors.length <= 0) {
      props.onRemovePalette(props.id)
      window.localStorage.removeItem(storageKey + '_name')
      window.localStorage.removeItem(storageKey + '_colors')
    }
    else setColors(newColors)
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
            hex={ color.hex }
            key={ color.id }
            id={ color.id }
            onRemoveColor={ handleRemoveColor }
            onChangeColor={ handleChangeColor }
          />
        )}
      </div>
    </div>
  )
}
