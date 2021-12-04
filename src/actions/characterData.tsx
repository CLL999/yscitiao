import { SET_HPDEFAULT,      
         SET_ATKDEFAULT, 
         SET_DEFDEFAULT,  
         SET_SANDSINDEX,       
         SET_GOBLETINDEX, 
         SET_CIRCLETINDEX } from "../constants/"

export const set_HPDefault = () => {
    return {
        type: SET_HPDEFAULT
    }
}

export const set_ATKDefault = () => {
    return {
        type: SET_ATKDEFAULT
    }
}

export const set_DEFDefault = () => {
    return {
        type: SET_DEFDEFAULT
    }
}

export const set_SandsIndex = () => {
    return {
        type: SET_SANDSINDEX
    }
}

export const set_GobletIndex = () => {
    return {
        type: SET_GOBLETINDEX
    }
}

export const set_CircletIndex = () => {
    return {
        type: SET_CIRCLETINDEX
    }
}

