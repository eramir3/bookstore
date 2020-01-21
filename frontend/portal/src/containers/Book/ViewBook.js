import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import * as actions from '../../store/actions/index';

class ViewBook extends Component {

    constructor() {
        super();
    
        this.state = {
            id: "",
            author: "",
            publisher: "",
            title: "",
            publicationDate: "",
            category: "",
            format: "",
            numberOfPages: "",
            isbn: "",
            listPrice: "",
            ourPrice: "",
            shippingWeight: "",
            language: "",
            numberInStock: "",
            active: true,
            description: "",
            image: ""
        }
      }

    componentDidMount() {
        const { id } = this.props.match.params;
        //console.log(id);
        this.props.getBook(id, this.props.history);
    }

    componentWillReceiveProps(nextProps) {
        //console.log(nextProps.book.book);

        const {
            id,
            author,
            publisher,
            title,
            publicationDate,
            category,
            format,
            numberOfPages,
            isbn,
            listPrice,
            ourPrice,
            shippingWeight,
            language,
            numberInStock,
            active,
            description,
            image
        } = nextProps.book.book;

        this.setState({
            id,
            author,
            publisher,
            title,
            publicationDate,
            category,
            format,
            numberOfPages,
            isbn,
            listPrice,
            ourPrice,
            shippingWeight,
            language,
            numberInStock,
            active,
            description,
            image
        });
        
        //this.setState({title: 'asdfafffffff'})
        //console.log(this.state.title)
    }

    render() {

        //const { id } = this.props.match.params;
        //console.log("id ", id);

        return(
            <div className="login">
                <div className="container-flow">
                    <div className="row">
                        <div className="col-md-10 m-auto">
                            <h3 className="mt-4"><b>Book Details</b></h3>
                            <div>
                                <small><Link to={`/bookList/`}>Go Back</Link></small> / 
                                <small><Link to={`/editBook/${this.state.id}`}> Edit</Link></small>
                            </div>
                            
                            
                            <div className="row">
                                <div className="row col-md-5">
                                    {/* IMAGE */}
                                </div>
                                
                                <div className="row col-md-7">
                                    
                                    <label className="col-md-12 mt-4"><b>{this.state.title}</b></label>
                                    
                                    <label className="col-md-6 mt-5"><b>Author: </b>{this.state.author}</label>
                                    <label className="col-md-6 mt-5"><b>Format: </b>{this.state.format}</label>
                                    
                                    <label className="col-md-6 mt-4"><b>Publisher: </b>{this.state.publisher}</label>
                                    <label className="col-md-6 mt-4"><b>ISBN: </b>{this.state.isbn}</label>

                                    <label className="col-md-6 mt-4"><b>Publication Date: </b>{this.state.publicationDate}</label>
                                    <label className="col-md-6 mt-4"><b>Shipping Weight: </b>{this.state.shippingWeight}</label>

                                    <label className="col-md-6 mt-4"><b>Language: </b>{this.state.language}</label>
                                    <label className="col-md-6 mt-4"><b>List Price: </b>{this.state.listPrice}</label>

                                    <label className="col-md-6 mt-4"><b>Category: </b>{this.state.category}</label>
                                    <label className="col-md-6 mt-4"><b>Our Price: </b>{this.state.ourPrice}</label>

                                    <label className="col-md-6 mt-4"><b>Pages: </b>{this.state.numberOfPages}</label>
                                    <label className="col-md-6 mt-4"><b>Number In Stock: </b>{this.state.numberInStock}</label>

                                    <label className="col-md-12 mt-5"><b>Description: </b>{this.state.description}</label>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    book: state.book
});

const mapDispatchToProps = dispatch => {
    return {
        getBook: (id) => dispatch(actions.getBook(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewBook);