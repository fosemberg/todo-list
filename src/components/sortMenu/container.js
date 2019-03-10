import connect from 'react-redux/es/connect/connect';
import {sortCards} from '../../actions';
import ui from './SortMenu';

export const SortMenu = connect(
  state =>
    ({
      field: state.sort.field,
      isDesc: state.sort.isDesc,
    }),
  dispatch =>
    ({
      onSelect(sortBy) {
        dispatch(sortCards(sortBy))
      }
    })
)(ui)