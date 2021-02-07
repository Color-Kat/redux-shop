import {CREATE_GOOD, DELETE_GOOD, LOAD_GOODS, LOAD_GOOD} from './goodsTypes';

const initialState = {
    goods: [],
    currentGood: {}
}

export const goodsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_GOOD:
            return {...state, goods: [...state.goods, action.payload]};
            
        case DELETE_GOOD:
            return {
                ...state,
                goods: state.goods.filter((item) => item.id !== action.payload)
            }

        case LOAD_GOODS:
            return {
                ...state,
                goods: [...state.goods, ...action.payload]
            }

        case LOAD_GOOD:
            return {
                ...state,
                currentGood: action.payload
            }
    
        default:
            return state;
    }

    
}