import {
    START_REQUEST,
    SELECT_MEASURE,
    SELECT_FLAVOR,
    SELECT_ADDITIONAL,
    RESET_REQUEST
} from '../Actions/request'

const acceptedActions = {
    [START_REQUEST]: (state, action) => ({
        ...state,
        [action.snack.id]: {
            ...action.snack
        }
    }),
    [SELECT_MEASURE]: (state, action) => ({
        ...state,
        [action.snackId]: {
            ...state[action.snackId],
            measure: { ...action.measure }
        }
    }),
    [SELECT_FLAVOR]: (state, action) => ({
        ...state,
        [action.snackId]: {
            ...state[action.snackId],
            flavor: { ...action.flavor }
        }
    }),
    [SELECT_ADDITIONAL]: (state, action) => ({
        ...state,
        [action.snackId]: {
            ...state[action.snackId],
            additional: [...action.additional]
        }
    }),
    [RESET_REQUEST]: (state, action) => ({
        ...state,
        [action.snackId]: { }
    }),
}

export default function requests(state = {}, action) {

    const handler = acceptedActions[action.type]

    return (handler && handler(state, action)) || state

}