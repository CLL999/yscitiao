import {
    SET_NOWCHARACTER
} from '../constants'


const INITIAL_STATE = {
    nowCharacter: 'klee'
}


export default function chooseCharacter(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_NOWCHARACTER: {
            const { nowCharacter } = action.payload
            return { ...state, nowCharacter }
        }
        default: 
            return state
    }
}