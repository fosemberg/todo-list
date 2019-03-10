import React from 'react'
import PropTypes from 'prop-types'
import Card from './components/card/Card'
import './CardList.scss'

const CardList = ({
  colors = [],
  onRemove = f => f,
  onToggleDone = f => f,
  onEdit = f => f,
  onSave = f => f,
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
          onEdit={() => onEdit(color.id)}
          onSave={() => onSave(color.id, color.title, color.description)}
        />
      )
    }
  </div>

CardList.propTypes = {
  colors: PropTypes.array,
  onRemove: PropTypes.func,
  onToggleDone: PropTypes.func,
  onEdit: PropTypes.func,
  onSave: PropTypes.func,
}

export default CardList
