import { SET_HPDEFAULT,      
         SET_ATKDEFAULT, 
         SET_DEFDEFAULT,  
         SET_SANDSINDEX,       
         SET_GOBLETINDEX, 
         SET_CIRCLETINDEX } from "../constants/"


const INITIAL_STATE = {
    HPDefault: 0,
    ATKDefault: 0,
    DEFDefault: 0,
    SandsIndex: -1,
    GobletIndex: -1,
    CircletIndex: -1
}

export default function characterData(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_HPDEFAULT: {
            const { HPDefault } = action.payload
            return { ...state, HPDefault }
        }
        case SET_ATKDEFAULT: {
            const { ATKDefault } = action.payload
            return { ...state, ATKDefault }
        }
        case SET_DEFDEFAULT: {
            const { DEFDefault } = action.payload
            return { ...state, DEFDefault }
        }
        case SET_SANDSINDEX: {
            const { SandsIndex } = action.payload
            return { ...state, SandsIndex }
        }
        case SET_GOBLETINDEX: {
            const { GobletIndex } = action.payload
            return { ...state, GobletIndex }
        }
        case SET_CIRCLETINDEX: {
            const { CircletIndex } = action.payload
            return { ...state, CircletIndex }
        }
        default:
            return state
    }
}