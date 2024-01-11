import './checkbox.css'

function Checkbox({ id, label }) {
  return (
    <div className="input-remember">
      <input type="checkbox" id={id} />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default Checkbox
