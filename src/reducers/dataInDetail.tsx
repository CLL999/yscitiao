import { SET_HP,
         SET_ATK,
         SET_DEF,
         SET_ELEMENTALMASTERY,
         SET_CRITRATE,
         SET_CRITDMG,
         SET_ENERGYRECHARGE } from '../constants/'

const INITIAL_STATE = {
    HP : 0,
    ATK : 0,
    DEF : 0,
    ElementalMastery : 0,
    CritRate : 0,
    CritDMG : 0,
    EnergyRecharge : 0
}



export default function dataInDetail(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_HP:
            const { HP } = action.payload
            return { ...state, HP }
        case SET_ATK:
            const { ATK } = action.payload
            return { ...state, ATK }
        case SET_DEF:
            const { DEF } = action.payload
            return { ...state, DEF }
        case SET_ELEMENTALMASTERY:
            const { Elementalmastery } = action.payload
            return { ...state, Elementalmastery}
        case SET_CRITRATE:
            const { CritRate } = action.payload
            return { ...state, CritRate }
        case SET_CRITDMG:
            const { CritDMG } = action.payload
            return { ...state, CritDMG }
        case SET_ENERGYRECHARGE:
            const { EnergyRecharge } = action.payload
            return { ...state, EnergyRecharge }
        default: 
            return state
    }
} 

