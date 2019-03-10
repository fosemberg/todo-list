import connect from 'react-redux/es/connect/connect';
import {sortColors} from '../../actions';
import ui from './SortMenu';

export const SortMenu = connect(
  state =>
    ({
      sort: state.sort
    }),
  dispatch =>
    ({
      onSelect(sortBy) {
        dispatch(sortColors(sortBy))
      }
    })
)(ui)