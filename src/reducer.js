export const initialState = {
  basket: [],
  user: null,
};

//selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  //console.log("STATE AND ACTsION BEFORE :", state, action);
  //console.log("INITIALSTATE BEFORE:", initialState);

  switch (action.type) {
    case "ADD_TO_BASKET":
      // let x = { ...state, basket: [...state.basket, action.item] };
      // console.log("AFTER:", x);
      //console.log("INITIALSTATE AFTER:", initialState);
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      let newbasket = [...state.basket];
      if (index >= 0) {
        newbasket.splice(index, 1);
      } else {
        console.warn(
          "Cant Remove Product (id:${action.id}) as its not in basket!"
        );
      }
      //console.log("AFTER:", { ...state, basket: newbasket });
      return { ...state, basket: newbasket };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;

//                           (action,state)              update(initialState,reducer)          save(initialState,reducer)
//addtobutton in Product.js--------------------> reducer.js-------------------------------->index.js------->StateProvider.js
