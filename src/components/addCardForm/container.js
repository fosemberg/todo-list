import connect from 'react-redux/es/connect/connect';
import {addCard} from '../../actions';
import ui from './AddCardForm';

export default connect(
  null,
  dispatch =>
    ({
      onNewCard(title, description) {
        dispatch(addCard(title, description))
      }
    })
)(ui)