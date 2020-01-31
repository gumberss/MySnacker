import call from '../DataServices/api'

import mapToKeyValue from './Utils/MapToKeyValue'

export const RECEIVE_SNACKS = 'RECEIVE_SNACKS'
export const RECEIVE_SNACK_DATA = 'RECEIVE_SNACK_DATA'

function getSnacks(snacks) {
    return {
        type: RECEIVE_SNACKS,
        snacks
    }
}

export function handleGetSnacks(nextAction){
    return dispatch => {
        return call('SnackList')
        .then(snacks => {
            nextAction()
            dispatch(getSnacks(mapToKeyValue(snacks)))
        })
    }
}


function getSnackData(snack) {
    return {
        type: RECEIVE_SNACK_DATA,
        snack
    }
}

export function handleGetSnackData(snackId, nextAction){
    return dispatch => {
        return call(`Snack/${snackId}`)
        .then(snacks => {
            nextAction()
            dispatch(getSnackData(snacks))
        })
    }
}