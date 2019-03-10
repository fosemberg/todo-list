import C from './constants'
import {v4} from 'uuid'

export const addCard = (title, description) =>
  ({
    type: C.ADD_CARD,
    id: v4(),
    title,
    description,
    list: 'todo',
    isEdit: false,
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

export const editCard = (id) =>
  ({
    type: C.EDIT_CARD,
    id,
  })

export const saveCard = (id, title, description) =>
  ({
    type: C.SAVE_CARD,
    id,
    title,
    description,
  })

export const sortCards = field =>
  ({
    type: C.SORT_CARDS,
    field,
  })
