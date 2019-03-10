import connect from 'react-redux/es/connect/connect';
import {addCard} from '../../actions';
import ui from './AddCardForm';

export const AddColorForm = connect(
  null,
  dispatch =>
    ({
      onNewCard(title, description) {
        dispatch(addCard(title, description))
      }
    })
)(ui)