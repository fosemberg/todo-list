import React from 'react'
import {Component} from 'react'
import PropTypes from 'prop-types'
import TimeAgo from '../../../ui/TimeAgo'
import {FaTrash, FaCheck, FaRedo, FaEdit, FaSave} from 'react-icons/fa'
import './Card.scss'

class Card extends Component {

  render() {
    const {
      title, description, timestamp, isDone = false, isEdit = false,
      onRemove, onToggleDone, onEdit, onSave
    } = this.props
    let className = "card"
    className += isDone ? ' done' : ''
    return (
      <section
        className={className}
        style={this.style}
      >
        { isEdit
          ? <input
            type="text"
            value={title}
          />
          : <h1 ref="title">{title}</h1>
        }
        { isEdit
          ? <button
            onClick={onSave}
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
        {
          isEdit
            ? <textarea
              className="description"
            >
              {description}
            </textarea>
            : <pre
              className="description"
            >
              {description}
            </pre>
        }
        <TimeAgo timestamp={timestamp}/>
      </section>
    )
  }

}

Card.propTypes = {
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
