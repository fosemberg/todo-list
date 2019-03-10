import React from 'react'
import {Component} from 'react'
import PropTypes from 'prop-types'
import StarRating from './components/starRating/StarRating'
import TimeAgo from '../../../ui/TimeAgo'
import {FaTrash, FaCheck, FaRedo} from 'react-icons/fa'
import './Color.scss'

class Color extends Component {

  render() {
    const {
      title, color, rating, timestamp, isDone = false,
      onRemove, onRate, onToggleDone
    } = this.props
    let className = "color"
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
        <pre className="color">
                  {color}
                </pre>
        <TimeAgo timestamp={timestamp}/>
        <div>
          <StarRating starsSelected={rating} onRate={onRate}/>
        </div>
      </section>
    )
  }

}

Color.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  rating: PropTypes.number,
  onRemove: PropTypes.func,
  onRate: PropTypes.func,
  onToggleDone: PropTypes.func,
}

Color.defaultProps = {
  rating: 0,
  onRemove: f => f,
  onRate: f => f
}

export default Color
