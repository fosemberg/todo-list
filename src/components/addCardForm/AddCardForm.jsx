import React from 'react'
import PropTypes from 'prop-types'
import './AddCardForm.scss'

const AddCardForm = ({onNewCard: onNewCard = f => f}) => {

  let _title, _description

  const submit = e => {
    e.preventDefault()
    onNewCard(_title.value, _description.value)
    _title.value = ''
    _description.value = ''
    _title.focus()
  }

  return (
    <form
      className="add-card"
      onSubmit={submit}
    >
      <input ref={input => _title = input}
             type="text"
             placeholder="Card title"
             required
      />
      <textarea
        ref={input => _description = input}
        placeholder="Card description"
        rows="4"
        required
      />
      <button>ADD</button>
    </form>
  )

}

AddCardForm.propTypes = {
  onNewCard: PropTypes.func
}

export default AddCardForm
