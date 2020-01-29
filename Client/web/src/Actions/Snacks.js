import call from '../DataServices/api'

import mapToKeyValue from './Utils/MapToKeyValue'

export const RECEIVE_SNACKS = 'RECEIVE_SNACKS'

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