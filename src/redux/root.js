import axios from "axios";
import { actions } from './action';
import { library } from './library';
let products;
const getData = async () => {
    const response = await axios.get(
      "http://localhost:3100/api/v2/bookDisplay"
    );
    products=response.data.message;
  };
  getData();
const initState={
    products:products,
    cart:[],
    wishlist:[],
    totalAmont:0
}

export const root=(state=initState,action)=>{
    let newState;
    switch(action.type){
        case actions.ADD_PRODUCT:
            newState = library.add_to_cart(state, action);
            break;
        case actions.WISHLIST:
            newState = library.add_wishlist(state, action);
            break;
        case actions.INC_QTY:
            newState = library.change_qty(state, action, 1);
            break;
        case actions.DESC_QTY:
            newState = library.change_qty(state, action, 0);
            break;
        case actions.REMOVE_PRODUCT:
            newState = library.remove_product(state, action);
            break;
        case actions.UPDATE_STATE:
            newState = library.update_state(state, action);
            break;
        default:
            newState = state;
            break;
    }

}