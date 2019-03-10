import connect from 'react-redux/es/connect/connect';
import {addColor} from '../../actions';
import ui from './AddColorForm';

export const AddColorForm = connect(
    null,
    dispatch =>
        ({
            onNewColor(title, color) {
                dispatch(addColor(title,color))
            }
        })
)(ui)