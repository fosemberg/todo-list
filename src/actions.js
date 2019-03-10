import C from './constants'
import {v4} from 'uuid'

export const addCard = (title, description) =>
  ({
    type: C.ADD_CARD,
    id: v4(),
    title,
    description,
    list: 'todo',
    timestamp: new Date().toString(),
  })

export const removeCard = id =>
  ({
    type: C.REMOVE_CARD,
    id,
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

export const sortCards = sortBy =>
  ({
    type: C.SORT_CARDS,
    sortBy,
  })
