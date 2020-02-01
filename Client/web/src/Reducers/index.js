import { combineReducers } from 'redux'

import snacks from './snacks'
import measures from './measures'
import flavors from './flavors'
import requests from './requests'
import additional from './additional'

export default combineReducers({
    snacks,
    measures,
    flavors,
    requests,
    additional
})