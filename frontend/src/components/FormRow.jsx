
export const FormRow = ({labelText, defaultValue, type,name }) => {
  return (
   <>
    <div className="from-row">
      <label htmlFor={name} className="form-label">
     {labelText|| name}
      </label>
      <input type={type}
      name={name}
      id={name}
      className="form-input"
      defaultValue={defaultValue||null}
      required
      />
    </div>
   </>
  )
}