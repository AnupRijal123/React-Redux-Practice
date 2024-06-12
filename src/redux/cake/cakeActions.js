import { BUY_CAKE } from './cakeTypes';

export const buyCake = (cakeNumber = 1) => {
    return {
        type: BUY_CAKE,
        payload: cakeNumber
    }
}