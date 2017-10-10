import React from 'react'
import {render} from 'react-dom'
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import reduCounter from './reducers/countReducer'

const reducers = combineReducers({
	reduCounter
})
const store = createStore(reducers)

const App = () => (
	<Provider store={store}>
		<h1 align="center">I'm just an app which has been construct.</h1>
	</Provider>
)

render(<App/>, document.getElementById('root'))
