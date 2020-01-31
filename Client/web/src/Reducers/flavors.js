import { RECEIVE_SNACK_DATA } from '../Actions/snacks'

const acceptedActions = {
    [RECEIVE_SNACK_DATA]: (state, action) => ({
        ...state,
        [action.snack.id]: action.snack.flavors
    })
}

export default function flavors(state = {}, action) {

    const handler = acceptedActions[action.type]

    return (handler && handler(state, action)) || state

}