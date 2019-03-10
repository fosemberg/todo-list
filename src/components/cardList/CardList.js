import React from 'react'
import PropTypes from 'prop-types'
import Card from './components/card/Card'
import './CardList.scss'

const CardList = ({
  colors = [],
  onRemove = f => f,
  onToggleDone = f => f,
}) =>
  <div className="card-list">
    {(colors.length === 0) ?
      <p>No Cards Listed. (Add a Card)</p> :
      colors.map(color =>
        <Card
          key={color.id}
          {...color}
          isDone={color.list === 'done'}
          onRemove={() => onRemove(color.id)}
          onToggleDone={() => onToggleDone(color.id)}
        />
      )
    }
  </div>

CardList.propTypes = {
  colors: PropTypes.array,
  onRemove: PropTypes.func,
  onToggleDone: PropTypes.func,
}

export default CardList
