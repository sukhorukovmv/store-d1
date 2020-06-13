const initialState = {
  isReady: false,
  books: [
    {
      id: 0,
      title: "Hello World!",
    },
  ],
};

export default (state = initialState, action) => {
  console.log("###############reducer");
  console.log(action.payload);
  switch (action.type) {
    case "SET_BOOKS":
      return {
        ...state,
        books: action.payload,
      };
    case "ADD_BOOKS":
      return {
        books: [...state.books, action.payload],
      };
    default:
      return state;
  }
};
