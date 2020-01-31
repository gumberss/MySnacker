import { RECEIVE_SNACK_DATA } from '../Actions/snacks'

const acceptedActions = {
    [RECEIVE_SNACK_DATA]: (state, action) => ({
        ...state,
        [action.snack.id]: action.snack.measures
    })
}

export default function measures(state = {}, action) {

    const handler = acceptedActions[action.type]

    return (handler && handler(state, action)) || state
}