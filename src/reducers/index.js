import {combineReducers} from 'redux';
import addQuestion from "./addQuestion";


const allReducer = combineReducers({
    questions    : addQuestion,
})


export default allReducer;