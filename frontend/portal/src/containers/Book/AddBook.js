import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from "classnames";
import * as actions from '../../store/actions/index';


class AddBook extends Component {

    constructor() {
        super();

        this.state = {
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
            image: "",
            errors: {}
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({ errors: nextProps.errors });
        }
    }

    onChange(e) {
        if(e.target.type == 'checkbox') {
            this.setState({ [e.target.name]: e.target.checked });
            return;
        } 

        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const newBook = {
            author: this.state.author,
            publisher: this.state.publisher,
            title: this.state.title,
            publicationDate: this.state.publicationDate,
            category: this.state.category,
            format: this.state.format,
            numberOfPages: this.state.numberOfPages,
            isbn: this.state.isbn,
            listPrice: this.state.listPrice,
            ourPrice: this.state.ourPrice,
            shippingWeight: this.state.shippingWeight,
            language: this.state.language,
            numberInStock: this.state.numberInStock,
            active: this.state.active,
            description: this.state.description,
            image: this.state.image
        };
        this.props.addNewBook(newBook);
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="login">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 m-auto">
                            <h3 className="mt-4"><b>New Book Information</b></h3>
                            <small>* is a required field</small>
                            <form onSubmit={this.onSubmit} className="mt-4">
                                <div className="form-group">
                                    <label>Title *</label>
                                    <input 
                                        type="text" 
                                        name="title" 
                                        value={this.state.title} 
                                        onChange={this.onChange} 
                                        className="form-control" 
                                        placeholder="The lord of the rings"
                                        className={classnames("form-control", {
                                            "is-invalid": errors.title
                                        })} />
                                        {errors.title && (
                                            <div className="invalid-feedback">{errors.title}</div>
                                        )}
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label>Author *</label>
                                        <input 
                                            type="text" 
                                            name="author" 
                                            value={this.state.author} 
                                            onChange={this.onChange} 
                                            className="form-control" 
                                            placeholder="J R Tolkien" 
                                            className={classnames("form-control", {
                                                "is-invalid": errors.author
                                            })} />
                                            {errors.author && (
                                                <div className="invalid-feedback">{errors.author}</div>
                                            )}
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Publisher *</label>
                                        <input 
                                            type="text" 
                                            name="publisher" 
                                            value={this.state.publisher} 
                                            onChange={this.onChange} 
                                            className="form-control" 
                                            placeholder="McKensey Media" 
                                            className={classnames("form-control", {
                                                "is-invalid": errors.publisher
                                            })} />
                                            {errors.publisher && (
                                                <div className="invalid-feedback">{errors.publisher}</div>
                                            )}
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Publication Date</label>
                                    <input 
                                        type="date"
                                        name="publicationDate" 
                                        value={this.state.publicationDate} 
                                        onChange={this.onChange}
                                        className="form-control"/>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label>Category</label>
                                        <select 
                                            name="category" 
                                            value={this.state.category} 
                                            onChange={this.onChange}
                                            className="form-control">
                                            <option>Category</option>
                                            <option key="man" value="Management">Management</option>
                                            <option key="fic" value="Fiction">Fiction</option>
                                            <option key="engi" value="Engineering">Engineering</option>
                                            <option key="pro" value="Programming">Programming</option>
                                            <option key="art" value="Arts & Literature">Arts & Literature</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Format</label>
                                        <select 
                                            name="format" 
                                            value={this.state.format} 
                                            onChange={this.onChange}
                                            className="form-control">
                                            <option>Format</option>
                                            <option key="pap" value="Paperback">Paperback</option>
                                            <option key="har" value="Hardcover">Hardcover</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label>Number of Pages</label>
                                        <input 
                                            type="number" 
                                            name="numberOfPages" 
                                            value={this.state.numberOfPages} 
                                            onChange={this.onChange}
                                            className="form-control"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>ISBN</label>
                                        <input 
                                            type="text"
                                            name="isbn" 
                                            value={this.state.isbn} 
                                            onChange={this.onChange}
                                            className="form-control"/>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label>List Price</label>
                                        <input 
                                            type="number" 
                                            name="listPrice" 
                                            value={this.state.listPrice} 
                                            onChange={this.onChange}
                                            className="form-control"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Our Price</label>
                                        <input 
                                            type="number" 
                                            name="ourPrice" 
                                            value={this.state.ourPrice} 
                                            onChange={this.onChange}
                                            className="form-control"/>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label>Shipping Weight</label>
                                        <input 
                                            type="text"
                                            name="shippingWeight" 
                                            value={this.state.shippingWeight} 
                                            onChange={this.onChange}
                                            placeholder="Ounces"
                                            className="form-control" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Language</label>
                                        <select 
                                            name="language" 
                                            value={this.state.language} 
                                            onChange={this.onChange}
                                            className="form-control">
                                            <option>Language</option>
                                            <option key="eng" value="English">English</option>
                                            <option key="spa" value="Spanish">Spanish</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label>Number In Stock</label>
                                        <input 
                                            type="text"
                                            name="numberInStock" 
                                            value={this.state.numberInStock} 
                                            onChange={this.onChange}
                                            placeholder="Ounces"
                                            className="form-control" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Active</label>
                                        <div className="custom-control custom-switch">
                                            <input 
                                                type="checkbox"
                                                id="customSwitch1"
                                                name="active" 
                                                defaultChecked={this.state.active}
                                                onChange={this.onChange}
                                                className="custom-control-input" />
                                            <label className="custom-control-label" htmlFor="customSwitch1">Toggle for active</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Description *</label>
                                    <input 
                                        type="text" 
                                        name="description" 
                                        value={this.state.description} 
                                        onChange={this.onChange}
                                        placeholder="Description"
                                        className={classnames("form-control", {
                                            "is-invalid": errors.description
                                        })} />
                                        {errors.description && (
                                            <div className="invalid-feedback">{errors.description}</div>
                                        )}
                                </div>

                                <div className="form-group">
                                    <label>Image</label>
                                    <input type="file" className="form-control-file" />
                                </div>

                                <div className="form-group row mt-4">
                                    <div className="col-xs-1">
                                        <button type="submit" className="btn btn-primary btn-lg">Add Book</button>
                                    </div>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <div className="col-xs-1">
                                        <button type="button" className="btn btn-danger btn-lg">Cancel</button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    errors: state.errors
});

const mapDispatchToProps = dispatch => {
    return {
        addNewBook: (book) => dispatch(actions.addBook(book))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBook);