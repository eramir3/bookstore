import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import * as actions from '../../store/actions/index';

class BookList extends Component {
    
    constructor() {
        super();

        this.state = {
            checkAll: false
        }
        this.onChange = this.onChange.bind(this);
        this.onCheck = this.onCheck.bind(this);
    }

    onChange(e) {
        this.setState({checkAll: e.target.checked});
        this.props.checkedAll(e.target.checked);
    }

    onCheck(e) {
        if(e.target.checked == false) {
            this.setState({checkAll: false});
        }

        let id = e.target.name.split("_")[1];
        this.props.checked(id);   
    }
    
    componentDidMount() {
        this.props.bookList();
    }

    onDeleteClick = id => {
        this.props.deleteBook(id);
    };

    onDeleteAllSelectedClick = () => {
        const { books } = this.props.books;
        let bookIds = books.filter(b => b.checked === true ).map(b => b.id);
        this.props.deleteAllSelectedBooks(bookIds);
    };

    render() {

        const { books } = this.props.books;

        return (
            <div className="login">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 m-auto">
                            <h3 className="mt-4"><b>List of Books</b></h3>
                            <table className="table mt-4">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">
                                            <input type="checkbox" 
                                            name="checkAll"
                                            checked={this.state.checkAll}
                                            onChange={this.onChange}
                                            />
                                        </th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Author</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">List Price</th>
                                        <th scope="col">Our Price</th>
                                        <th scope="col">Active</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {                                       
                                        books.map(b => {
                                            let checkboxName = "checkbox_" + b.id;
                                            let checkbox = <input type="checkbox" 
                                                name={checkboxName}
                                                checked={b.checked}
                                                onChange={(event) => this.onCheck(event)}
                                            />;                              
                                            
                                            return (

                                                <tr key={b.id}>
                                                    <th scope="row">
                                                        {checkbox}
                                                    </th>
                                                    <td>
                                                        <Link to={`/viewBook/${b.id}`}>{b.title}</Link>
                                                    </td>
                                                    <td>{b.author}</td>
                                                    <td>{b.category}</td>
                                                    <td>{b.listPrice}</td>
                                                    <td>{b.ourPrice}</td>
                                                    <td>{b.active == true ? 'true' : 'false'}</td>
                                                    <td>
                                                        <button 
                                                            className="btn btn-danger btn-sm"
                                                            onClick={this.onDeleteClick.bind(
                                                                this,
                                                                b.id
                                                          )}> delete</button>
                                                    </td>
                                                </tr>
                                            );
                                            
                                        })
                                        
                                    }
                                </tbody>
                            </table>
                            <button 
                                className="btn btn-danger btn-lg mt-4"
                                onClick={this.onDeleteAllSelectedClick.bind(this)}>Delete Selected</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    books: state.book
});

const mapDispatchToProps = dispatch => {
    return {
        bookList: () => dispatch(actions.getBookList()),
        deleteBook: (id) => dispatch(actions.deleteBook(id)),
        deleteAllSelectedBooks: (ids) => dispatch(actions.deleteBookList(ids)),
        checked: (book) => dispatch(actions.getChecked(book)),
        checkedAll: (book) => dispatch(actions.getCheckedAll(book))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);