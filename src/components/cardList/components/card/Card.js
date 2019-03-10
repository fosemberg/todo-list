import React from 'react'
import PropTypes from 'prop-types'
import TimeAgo from '../../../ui/TimeAgo'
import {FaTrash, FaCheck, FaRedo, FaEdit, FaSave} from 'react-icons/fa'
import './Card.scss'

const Card = ({
  id, title, description, timestamp, isDone = false, isEdit = false,
  onRemove, onToggleDone, onEdit, onSave
}) => {
  let className = "card"
  className += isDone ? ' done' : ''

  let _title, _description;

  const submit = e => {
    // e.preventDefault()
    onSave(_title.value, _description.value)
  }

  return (
    <section
      className={className}
    >
     { isEdit
        ? <input
          ref={input => _title = input}
          type="text"
          defaultValue={title}
        />
        : <h1>{title}</h1>
      }
      {
        isEdit
          ? <textarea
            ref={input => _description = input}
            className="description"
            defaultValue={description}
          />
          : <pre
            className="description"
          >
            {description}
          </pre>
      }
      <div className="buttons">
        { isEdit
          ? <button
            onClick={submit}
            className="edit"
          >
            <FaSave/>
          </button>
          : <button
            onClick={onEdit}
            className="edit"
          >
            <FaEdit/>
          </button>
        }
        <button
          onClick={onToggleDone}
          className="check"
        >
          {isDone ? <FaRedo/> : <FaCheck/>}
        </button>
        <button
          onClick={onRemove}
          className="remove"
        >
          <FaTrash/>
        </button>
      </div>
      <TimeAgo timestamp={timestamp}/>
    </section>
  )
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isDone: PropTypes.bool,
  isEdit: PropTypes.bool,

  onRemove: PropTypes.func,
  onToggleDone: PropTypes.func,
  onEdit: PropTypes.func,
  onSave: PropTypes.func,
}

Card.defaultProps = {
  onRemove: f => f,
}

export default Card
