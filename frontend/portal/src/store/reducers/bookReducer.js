import { GET_BOOKS, GET_BOOK, DELETE_BOOK, DELETE_BOOKS, CHECK_CHECKBOX, CHECK_ALL_CHECKBOXES } from "../actions/types";

const initialState = {
    books: [],
    book: {}
};

export default function(state = initialState, action) {
    
    switch (action.type) {
      
      case GET_BOOKS:
        action.payload.map(book => {
          book.checked = false;
        });
        return {
          ...state,
          books: action.payload
        };
  
      case GET_BOOK:
        return {
          ...state,
          book: action.payload
        };
  
      case DELETE_BOOK:
        return {
          ...state,
          books: state.books.filter(
            book => book.id !== action.payload
          )
        };

      case DELETE_BOOKS:
        return {
          ...state,
          books: state.books.filter(
            book => !action.payload.includes(book.id)
          )
        };

      case CHECK_ALL_CHECKBOXES:
        return {
          ...state,
          books: state.books.map(
            book => {
                book.checked = action.payload;
              return book;
            }
          )
        };

      case CHECK_CHECKBOX:
        return {
          ...state,
          books: state.books.map(
            book => {
              if(book.id == action.payload) {
                book.checked = !book.checked;
              }
              return book;
            }
          )
        };

      default:
        return state;
    }
}