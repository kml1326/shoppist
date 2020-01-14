const initState = {
    cartItems: []
  };
  
  const rootReducer = (state = initState, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        return {
          ...state,
          cartItems: action.data
        };
      default:
        break;
    }
  };
  
  export default rootReducer;