import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './store';
import Header from './containers/Layout/Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './containers/Auth/Login';
import AddBook from './containers/Book/AddBook';
import BookList from './containers/Book/BookList';
import ViewBook from './containers/Book/ViewBook';
import EditBook from './containers/Book/EditBook';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Route exact path="/login" component={Login} />
        <Route exact path="/addBook" component={AddBook} />
        <Route exact path="/bookList" component={BookList} />
        <Route exact path="/viewBook/:id" component={ViewBook} />
        <Route exact path="/editBook/:id" component={EditBook} />
      </Router>
    </Provider>
  );
}

export default App;