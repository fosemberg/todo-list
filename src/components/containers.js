import { connect } from 'react-redux'
import AddColorForm from './addColorForm/AddColorForm'
import SortMenu from './sortMenu/SortMenu'
import ColorList from './colorList/ColorList'
import { addColor, sortColors, rateColor, removeColor } from '../actions'
import { sortFunction } from '../lib/array-helpers'

// export const NewColor = connect(
//     null,
//     dispatch =>
//         ({
//             onNewColor(title, color) {
//                 dispatch(addColor(title,color))
//             }
//         })
// )(AddColorForm)

// export const Menu = connect(
//     state =>
//         ({
//             sort: state.sort
//         }),
//     dispatch =>
//         ({
//             onSelect(sortBy) {
//                 dispatch(sortColors(sortBy))
//             }
//         })
// )(SortMenu)

// export const Colors = connect(
//     state =>
//         ({
//             colors: [...state.colors].sort(sortFunction(state.sort))
//         }),
//     dispatch =>
//         ({
//             onRemove(id) {
//                 dispatch(removeColor(id))
//             },
//             onRate(id, rating) {
//                 dispatch(rateColor(id, rating))
//             }
//         })
// )(ColorList)