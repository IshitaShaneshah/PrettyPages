// import product from "../data/product";

export const library = {
    add_to_cart: (state, action) => {
        let newState;
        let product=[ {
              title: "The Jungle Book",
              author: "XYZ",
              genre: "fiction",
              pages: 120,
              subgenre: "Thriller",
              price: 45 + "$",
              quantity:12,
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac ultricies velit, eu vehicula orci. Vestibulum gravida dapibus elementum. Suspendisse pulvinar convallis nisl, nec sollicitudin eros feugiat imperdiet. Vestibulum at malesuada massa, vel pellentesque dolor. Cras malesuada ex quam, non fermentum elit ornare in.",
            },
            {
              title: "Dictionary",
              author: "ABC",
              genre: "fiction",
              pages: 120,
              subgenre: "Thriller",
              price: 45 + "$",
              quantity:30,
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac ultricies velit, eu vehicula orci. Vestibulum gravida dapibus elementum. Suspendisse pulvinar convallis nisl, nec sollicitudin eros feugiat imperdiet. Vestibulum at malesuada massa, vel pellentesque dolor. Cras malesuada ex quam, non fermentum elit ornare in.",
            },
          ]
        let flag = 0, pay_amount = 0;
        if (action.payload !== null) {
            const newCart = [...state.cart];
            newCart.forEach((data, index) => {
                if (data.id === action.payload) {
                    flag = 1;
                    newCart[index].quantity = newCart[index].quantity + 1;
                    newCart[index].actual_amount += product[action.payload].actual_price;
                }
            })
            if (!flag) {
                newCart.push({
                    id: action.payload,
                    quantity: 1,
                    actual_amount: product[action.payload].actual_price
                })
            }
            newCart.forEach((data, index) => {
                pay_amount += newCart[index].actual_amount;
            })
            newState = {
                ...state,
                total: state.total + 1,
                cart: newCart,
                pay_amount: pay_amount
            }
        }
        library.add_to_ls(newState)
        return newState;
    }
    ,
    add_wishlist: (state, action) => {
        let newState;
        if (action.payload !== null) {
            if (state.wishlist.includes(action.payload))
                newState = state;
            else {
                const newWishlist = [...state.wishlist];
                newWishlist.push(action.payload);
                newState = {
                    ...state,
                    wishlist: newWishlist

                }

            }

        }
        library.add_to_ls(newState)
        return newState;
    },
    change_qty: (state, action, flag) => {
        let newState, newTotal;
        let product=state.products;
        let pay_amount = 0;
        if (action.payload !== null) {
            const newCart = [...state.cart]
            newCart.forEach((data, index) => {
                if (index === action.payload) {
                    if (flag) {
                        newCart[index].quantity = newCart[index].quantity + 1;
                        newCart[index].actual_amount += product[data.id].actual_price;
                        newTotal = state.total + 1;
                    }
                    else {
                        newCart[index].quantity = newCart[index].quantity - 1;
                        newCart[index].actual_amount -= product[data.id].actual_price;
                        newTotal = state.total - 1;
                    }
                }

            })
            newCart.forEach((data, index) => {
                pay_amount += newCart[index].actual_amount;
            })
            newState = {
                ...state,
                total: newTotal,
                cart: newCart,
                pay_amount: pay_amount,
            }
        }
        library.add_to_ls(newState)
        return newState;
    },
    remove_product: (state, action) => {
        let newState, pay_amount = 0;
        if (action.payload !== null) {
            const newCart = state.cart.filter((data, index) => {
                if (index !== action.payload) {
                    return true;
                }
                else
                    return false;
            })
            newCart.forEach((data, index) => {
                pay_amount += newCart[index].actual_amount;
            })
            newState = {
                ...state,
                cart: newCart,
                total: state.total - action.qty,
                pay_amount: pay_amount,
            }
        }
        library.add_to_ls(newState)
        return newState;
    },
    // product_details: (id) => {
    //     let product=state.products;
    //     let data
    //     product.forEach(
    //         (product) => {
    //             if (product.id === id) {
    //                 data = product;
    //                 return;
    //             }
    //         }
    //     )
    //     return data;
    // },
    update_state: (state, action) => {
        console.log(action)
        return action.state;
    },
    add_to_ls: (data) => {
        // console.log(data)
        localStorage.setItem("state", JSON.stringify(data));
    }
}


