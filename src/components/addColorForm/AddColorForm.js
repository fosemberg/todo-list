import React from 'react'
import {Component} from 'react'
import PropTypes from 'prop-types'
import './AddColorForm.scss'

const AddColorForm = ({onNewColor = f => f}) => {

  let _title, _color

  const submit = e => {
    e.preventDefault()
    onNewColor(_title.value, _color.value)
    _title.value = ''
    _color.value = ''
    _title.focus()
  }

  return (
    <form className="add-color" onSubmit={submit}>
      <input ref={input => _title = input}
             type="text"
             placeholder="Card title"
             required
      />
      <textarea
        ref={input => _color = input}
        placeholder="Card description"
        rows="4"
        required
      />
      <button>ADD</button>
    </form>
  )

}

AddColorForm.propTypes = {
  onNewColor: PropTypes.func
}

export default AddColorForm
