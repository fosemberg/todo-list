import connect from 'react-redux/es/connect/connect';
import {addColor} from '../../actions';
import ui from './AddCardForm';

export const AddColorForm = connect(
    null,
    dispatch =>
        ({
            onNewColor(title, color) {
                dispatch(addColor(title,color))
            }
        })
)(ui)