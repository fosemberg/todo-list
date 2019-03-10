import connect from 'react-redux/es/connect/connect';
import {sortFunction} from '../../lib/array-helpers';
import {rateColor, removeColor, toggleDoneCard} from '../../actions';
import ui from './ColorList';

export const ColorList = connect(
  state =>
    ({
      colors: [...state.colors].sort(sortFunction(state.sort))
    }),
  dispatch =>
    ({
      onRemove(id) {
        dispatch(removeColor(id))
      },
      onRate(id, rating) {
        dispatch(rateColor(id, rating))
      },
      onToggleDone(id) {
        dispatch(toggleDoneCard(id))
      }
    })
)(ui)