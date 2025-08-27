// import { 
//     addCartItemRequest, 
//     addCartItemSuccess, 
//     addCartItemFail 
// } from '../slices/cartSlice';
// import api from "../api/axios";

// // 🟢 Add to cart action
// export const addCartItem = (id, quantity) => async (dispatch) => {
//     try {
//         dispatch(addCartItemRequest());

//         const { data } = await api.get(`/product/${id}`);

//         dispatch(addCartItemSuccess({
//             product: data.product._id,
//             name: data.product.name,
//             price: data.product.price,
//             image: data.product.images[0].image,
//             stock: data.product.stock,
//             quantity
//         }));
//     } catch (error) {
//         dispatch(
//             addCartItemFail(error.response?.data?.message || "Failed to add item")
//         );
//     }
// };




import {addCartItemRequest, addCartItemSuccess} from '../slices/cartSlice';
import axios from 'axios'

export const addCartItem = (id, quantity) => async(dispatch) => {
    try {
        dispatch(addCartItemRequest())
        const {data } = await axios.get(`/api/v1/product/${id}`)
        dispatch(addCartItemSuccess({
            product: data.product._id,
            name: data.product.name,
            price: data.product.price,
            image: data.product.images[0].image,
            stock: data.product.stock,
            quantity
        }))
    } catch (error) {
        
    }
}