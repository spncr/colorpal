import './color.css'

export default function Color(props) {
  const handleChange = (e) => props.onChangeColor(props.id, e.target.value)
  const handleRemove = (e) => props.onRemoveColor(props.id)

  return (
    <div className="color" title={ props.hex }>
      <label
        style={{ background: props.hex }}
      >
        <span className="visually-hidden">Pick a color</span>
        <input
          type="color"
          className="picker"
          value={ props.hex }
          onChange={ handleChange }
        />
      </label>
      <button
        className="trash"
        name='delete'
        onClick={ handleRemove }>
        🗑
        <span className="visually-hidden">delete color</span>
      </button>
    </div>
  )
}
