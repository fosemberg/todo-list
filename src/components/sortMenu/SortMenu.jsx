import React from 'react'
import PropTypes from 'prop-types'
import './SortMenu.scss'
import {SORTED_BY} from '../../constants';

const options = {
  date: SORTED_BY.DATE,
  title: SORTED_BY.TITLE,
  description: SORTED_BY.DESCRIPTION,
}

const SortMenu = ({sort = "SORTED_BY_DATE", onSelect = f => f}) =>
  <nav className="menu">
    <h1>Sort Colors</h1>
    {Object.keys(options).map((item, i) =>
      <a key={i}
         href="#"
         className={(sort === options[item]) ? "selected" : null}
         onClick={e => {
           e.preventDefault()
           onSelect(options[item])
         }}>{item}</a>
    )}
  </nav>

SortMenu.propTypes = {
  sort: PropTypes.string,
  onSelect: PropTypes.func
}

export default SortMenu
