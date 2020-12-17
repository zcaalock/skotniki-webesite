import React, { useState } from 'react'

function SingleInput(props) {

  const [value, setvalue] = useState(props.initialValue)

  const Cancel = (event) => {

    if (event.keyCode === 27) {
      props.removeEdit()
    }
  }

  return (
    <form
      onBlur={() => props.removeEdit()}
      onKeyDown={Cancel}
      onSubmit={(e) => { e.preventDefault(); props.onSubmit(value) }}
      className="ui form error">
      <input
        autoFocus={true}
        style={props.propChildStyle}
        //defaultValue={props.initialValue}
        name="title"
        value={value}
        onChange={e => setvalue(e.target.value)}
      />
    </form>
  )
}

export default SingleInput



