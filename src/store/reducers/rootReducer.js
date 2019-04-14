import {combineReducers} from 'redux'
import clientReducer from './clientReducer'
import sessionReducer from './sessionReducer'

const rootReducer = combineReducers({

    clients: clientReducer,
    sessions: sessionReducer

})

export default rootReducer