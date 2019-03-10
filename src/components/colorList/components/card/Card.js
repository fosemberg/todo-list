import React from 'react'
import {Component} from 'react'
import PropTypes from 'prop-types'
import TimeAgo from '../../../ui/TimeAgo'
import {FaTrash, FaCheck, FaRedo} from 'react-icons/fa'
import './Card.scss'

class Card extends Component {

  render() {
    const {
      title, description, timestamp, isDone = false,
      onRemove, onToggleDone
    } = this.props
    let className = "card"
    className += isDone ? ' done' : ''
    return (
      <section
        className={className}
        style={this.style}
      >
        <h1 ref="title">{title}</h1>
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
        <pre
          className="description">
          {description}
        </pre>
        <TimeAgo timestamp={timestamp}/>
      </section>
    )
  }

}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onRemove: PropTypes.func,
  onToggleDone: PropTypes.func,
}

Card.defaultProps = {
  onRemove: f => f,
}

export default Card
