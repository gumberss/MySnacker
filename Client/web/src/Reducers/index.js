import { combineReducers } from 'redux'

import snacks from './snacks'
import measures from './measures'
import flavors from './flavors'

export default combineReducers({
    snacks,
    measures,
    flavors
})