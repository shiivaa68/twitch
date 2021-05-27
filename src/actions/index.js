
import {SIGN_IN,SIGN_OUT} from './types'

export const SingIn = (userId) => {
    return {
        // type:'SING-IN'
        type:SIGN_IN,
        payload:userId
    }
}

export const SingOut = () => {
    return {
        // type:'SIGN-OUT'
        type:SIGN_OUT,
        

    }
}