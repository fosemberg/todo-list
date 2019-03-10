import C, {SORTED_BY} from '../constants'

export const color = (state = {}, action) => {
  switch (action.type) {
    case C.ADD_CARD:
      return {
        id: action.id,
        title: action.title,
        description: action.description,
        timestamp: action.timestamp,
        rating: 0,
        list: 'todo'
      }
    case C.MOVE_CARD:
      return (state.id !== action.id) ?
        state :
        {
          ...state,
          list: action.list
        }
    case C.TOGGLE_DONE_CARD:
      return (state.id !== action.id) ?
        state :
        {
          ...state,
          list: state.list === 'todo' ? 'done' : 'todo'
        }
    default :
      return state
  }
}

export const colors = (state = [], action) => {
  switch (action.type) {
    case C.ADD_CARD :
      return [
        ...state,
        color({}, action)
      ]
    case  C.MOVE_CARD:
      return state.map(
        c => color(c, action)
      )
    case C.TOGGLE_DONE_CARD :
      return state.map(
        c => color(c, action)
      )
    case C.REMOVE_CARD :
      return state.filter(
        c => c.id !== action.id
      )
    default:
      return state
  }
}

export const sort = (
  state = {
    field: SORTED_BY.DATE,
    isDesc: false,
  },
  action
) => {
  switch (action.type) {
    case C.SORT_CARDS:
      return {
        ...state,
        field: action.field,
      }
    case C.SORT_CARDS_DESC_TOGGLE:
      return {
        ...state,
        isDesc: !state.isDesc,
      }
    default :
      return state
  }
}