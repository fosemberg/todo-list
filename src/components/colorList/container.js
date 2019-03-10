import connect from 'react-redux/es/connect/connect';
import {sortFunction, sortBy} from '../../lib/array-helpers';
import {removeCard, toggleDoneCard} from '../../actions';
import ui from './CardList';

export const ColorList = connect(
  state =>
    ({
      colors: [...state.colors]
        .sort(sortFunction(state.sort.field))
        .sort(sortBy('string', 'list', true))
    }),
  dispatch =>
    ({
      onRemove(id) {
        dispatch(removeCard(id))
      },
      onToggleDone(id) {
        dispatch(toggleDoneCard(id))
      }
    })
)(ui)