import connect from 'react-redux/es/connect/connect';
import {sortFunction, sortBy} from '../../lib/array-helpers';
import {removeCard, toggleDoneCard, editCard, saveCard} from '../../actions';
import ui from './CardList';

export default connect(
  state =>
    ({
      colors: [...state.colors]
        .sort(sortFunction(state.sort.field, state.sort.isDesc))
        .sort(sortBy(true)('string', 'list'))
    }),
  dispatch =>
    ({
      onRemove(id) {
        dispatch(removeCard(id))
      },
      onToggleDone(id) {
        dispatch(toggleDoneCard(id))
      },
      onEdit(id) {
        dispatch(editCard(id))
      },
      onSave(id, title, description) {
        dispatch(saveCard(id, title, description))
      }
    })
)(ui)