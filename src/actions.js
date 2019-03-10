import C from './constants'
import {v4} from 'uuid'

export const addColor = (title, color) =>
  ({
    type: C.ADD_COLOR,
    id: v4(),
    title,
    color,
    timestamp: new Date().toString(),
  })

export const removeColor = id =>
  ({
    type: C.REMOVE_COLOR,
    id,
  })

export const rateColor = (id, rating) =>
  ({
    type: C.RATE_COLOR,
    id,
    rating,
  })

export const moveCard = (id, list) =>
  ({
    type: C.MOVE_CARD,
    id,
    list,
  })

export const toggleDoneCard = (id) =>
  ({
    type: C.TOGGLE_DONE_CARD,
    id,
  })

export const sortColors = sortBy =>
  ({
    type: "SORT_COLORS",
    sortBy,
  })
