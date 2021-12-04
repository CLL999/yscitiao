import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'
const middlewares = [createLogger()]

export default function configureStore() {
    const store = createStore(rootReducer, applyMiddleware(...middlewares))
    return store
}