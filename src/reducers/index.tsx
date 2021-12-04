import { combineReducers } from 'redux'

import characterData from './characterData'
import dataInDetail from './dataInDetail'
import chooseCharacter from './chooseCharacter'


export default combineReducers({
    characterData,
    dataInDetail,
    chooseCharacter
})