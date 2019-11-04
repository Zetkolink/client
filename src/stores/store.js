import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import tasksReducer from '../redurs/taskReducer'

const store = createStore(
    combineReducers({
        tasks: tasksReducer
    }),
    applyMiddleware(
        thunk
    )
);

export default store;