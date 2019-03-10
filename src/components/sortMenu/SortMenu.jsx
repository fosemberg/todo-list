import React from 'react'
import PropTypes from 'prop-types'
import './SortMenu.scss'
import {SORTED_BY} from '../../constants';

const options = {
  date: SORTED_BY.DATE,
  title: SORTED_BY.TITLE,
  description: SORTED_BY.DESCRIPTION,
}

const SortMenu = ({
  field = SORTED_BY.DATE,
  isDesc = false,
  onSelect = f => f
}) => {
  return <nav className="menu">
    <h1>Sort Colors</h1>
    {Object.keys(options).map((item, i) =>
      <a key={i}
         href="#"
         className={(field === options[item]) ? "selected" : null}
         onClick={e => {
           e.preventDefault()
           onSelect(options[item])
         }}
      >
        {item}{field === options[item]
          ? isDesc
            ? '^'
            : '\\/'
          : ''}
      </a>
    )}
  </nav>
}

SortMenu.propTypes = {
  field: PropTypes.string,
  isDesc: PropTypes.bool,
  onSelect: PropTypes.func
}

export default SortMenu
