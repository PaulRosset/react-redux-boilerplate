import * as actions from './../actions/actionsName'

export default (state = 0, action) => {
	switch (action.type) {
	case actions.INCREMENT:
		return state + 1
	case actions.DECREMENT:
		if (state < 1)
			return state
		return state - 1
	default:
		return state
	}
}
