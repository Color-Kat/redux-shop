import { ajax } from '../../modules/ajax';
import { hideLoader, showLoader } from '../appReducer/appActions';
import {ADD_GOOD, DELETE_GOOD, LOAD_GOODS, LOAD_GOOD} from './goodsTypes';

export const addGood = (good) => {
    return {
        type: ADD_GOOD,
        payload: good
    }
}

export const deleteGood = (goodId) => {
    return {
        type: DELETE_GOOD,
        payload: goodId
    }
}

export const loadGoods = () => {
    return async function (dispatch) {
        try {
            dispatch(showLoader()); 
            let goods = [{
                    id: 1,
                    name: 'soldering iron',
                    price: 990,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam excepturi, quis dolorum tenetur quasi ad ipsam sed labore porro perferendis.',
                    thumbnail: 'soldering tool',
                    img: 'shopping.png',
                    product_of_day: true
                },
                {
                    id: 2,
                    name: 'soldering iron2',
                    price: 990,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam excepturi, quis dolorum tenetur quasi ad ipsam sed labore porro perferendis.',
                    thumbnail: 'soldering tool',
                    img: 'shopping.png',
                    product_of_day: false
                },
                {
                    id: 3,
                    name: 'soldering iron123',
                    price: 990,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam excepturi, quis dolorum tenetur quasi ad ipsam sed labore porro perferendis.',
                    thumbnail: 'soldering tool',
                    img: 'shopping.png',
                    product_of_day: true
                },
                {
                    id: 4,
                    name: 'soldering iron4',
                    price: 990,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam excepturi, quis dolorum tenetur quasi ad ipsam sed labore porro perferendis.',
                    thumbnail: 'soldering tool',
                    img: 'shopping.png',
                    product_of_day: false
                },
                {
                    id: 5,
                    name: 'soldering iron4',
                    price: 990,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam excepturi, quis dolorum tenetur quasi ad ipsam sed labore porro perferendis.',
                    thumbnail: 'soldering tool',
                    img: 'shopping.png',
                    product_of_day: false
                },
                {
                    id: 6,
                    name: 'soldering iron4',
                    price: 990,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam excepturi, quis dolorum tenetur quasi ad ipsam sed labore porro perferendis.',
                    thumbnail: 'soldering tool',
                    img: 'shopping.png',
                    product_of_day: false
                }];

            dispatch({type: LOAD_GOODS, payload: goods});
            dispatch(hideLoader());
        }catch (e) {
            // dispatch(showAlert('Что-то пошло не так'));
            // dispatch(hideAlert());
        }
    }
}

export const loadGoodById = (id) => {
    return async function (dispatch) {
        try {
            dispatch(showLoader()); 

            const good = await ajax({
                action: 'GET_GOOD_BY_ID',
                id
            });

            // let good = {
            //     id: 1,
            //     name: 'soldering iron',
            //     price: 990,
            //     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam excepturi, quis dolorum tenetur quasi ad ipsam sed labore porro perferendis.',
            //     thumbnail: 'soldering tool',
            //     img: 'shopping.png',
            //     product_of_day: true
            // };

            dispatch({type: LOAD_GOOD, payload: good});
            dispatch(hideLoader());
        }catch (e) {
            // dispatch(showAlert('Что-то пошло не так'));
            // dispatch(hideAlert());
        }
    }
}