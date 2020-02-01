
export const START_REQUEST = 'START_REQUEST'
export const SELECT_MEASURE = 'SELECT_MEASURE'
export const SELECT_FLAVOR = 'SELECT_FLAVOR'
export const SELECT_ADDITIONAL = 'SELECT_ADDITIONAL'

export function startRequest(snack) {
    return {
        type: START_REQUEST,
        snack
    }
}

export function selectMeasure(snackId, measure) {
    return {
        type: SELECT_MEASURE,
        snackId,
        measure
    }
}

export function selectFlavor(snackId, flavor) {
    return {
        type: SELECT_FLAVOR,
        snackId,
        flavor
    }
}

export function selectAdditional(snackId, additional) {
    return {
        type: SELECT_ADDITIONAL,
        snackId,
        additional
    }
}
