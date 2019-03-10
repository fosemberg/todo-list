import connect from 'react-redux/es/connect/connect';
import {sortFunction, sortBy} from '../../lib/array-helpers';
import {removeColor, toggleDoneCard} from '../../actions';
import ui from './CardList';

export const ColorList = connect(
  state =>
    ({
      colors: [...state.colors]
        .sort(sortFunction(state.sort))
        .sort(sortBy('string', 'list', true))
    }),
  dispatch =>
    ({
      onRemove(id) {
        dispatch(removeColor(id))
      },
      onToggleDone(id) {
        dispatch(toggleDoneCard(id))
      }
    })
)(ui)