import { combineReducers } from "redux";
import { goodsReducer } from "./goods/goodsReducer";
import { appReducer } from "./appReducer/appReducer";

export const rootReducer = combineReducers({
    goods: goodsReducer,
    app: appReducer
});