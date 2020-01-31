import { RECEIVE_SNACKS } from '../Actions/snacks'

const acceptedActions = {
    [RECEIVE_SNACKS]: (state, action) => ({
        ...state,
        ...action.snacks
    })
}

export default function snacks(state = {}, action) {

    const handler = acceptedActions[action.type]

    return (handler && handler(state, action)) || state

}