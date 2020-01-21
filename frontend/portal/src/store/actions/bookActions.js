import axios from "axios";
//import { GET_ERRORS, GET_BOOKS } from "./types";
import { GET_ERRORS, DELETE_BOOK, DELETE_BOOKS, GET_BOOK, GET_BOOKS, CHECK_CHECKBOX, CHECK_ALL_CHECKBOXES } from "./types";


export const addBook = (book) => async dispatch => {
    try {
        await axios.post("/book/add", book);
        //history.push("/");
        dispatch({
            type: GET_ERRORS,
            payload: {}
        });
    }
    catch(err) {
        //console.log(err.response.data);
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
}

export const editBook = (book) => async dispatch => {
    try {
        await axios.patch("/book/update", book);
        //history.push("/");
        dispatch({
            type: GET_ERRORS,
            payload: {}
        });
    }
    catch(err) {
        //console.log(err.response.data);
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
}

export const getBook = (id, history) => async dispatch => {
    try {
      const res = await axios.get(`/book/${id}`);
      dispatch({
        type: GET_BOOK,
        payload: res.data
      });
    } catch (error) {
        console.log(error);
      //history.push("/dashboard");
    }
};

export const getBookList = () => async dispatch => {
    const res = await axios.get("/book/bookList");
    dispatch({
        type: GET_BOOKS,
        payload: res.data
    });
}

export const deleteBook = (id) => async dispatch => {

    console.log(id);

    await axios.delete(`/book/remove/${id}`);
    dispatch({
        type: DELETE_BOOK,
        payload: id
    });
};

export const deleteBookList = (ids) => async dispatch => {

    
    
    await axios.delete("/book/removeBooks", {"data":ids});

    console.log("jijijiji");

    dispatch({
        type: DELETE_BOOKS,
        payload: ids
    });
    
};

export const getChecked = (id) => {
    return {
        type: CHECK_CHECKBOX,
        payload: id
    };
}

export const getCheckedAll = (book) => {
    return {
        type: CHECK_ALL_CHECKBOXES,
        payload: book
    };
}
