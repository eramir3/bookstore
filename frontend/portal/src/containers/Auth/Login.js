import React, { Component } from "react";
//import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { login } from "../../store/actions/securityActions";
 

class Login extends Component {

  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.security.validToken) {
      //this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.security.validToken) {
      //this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const LoginRequest = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.login(LoginRequest);
  }

  render() {
      const { errors } = this.state;
      return (
        <div className="login">
          <div className="container">
            <div className="row">
              <div className="col-md-6 m-auto">
                <form onSubmit={this.onSubmit}>
                  <div className="form-group mt-4">
                      <label>Your Username</label>
                      <input
                          type="text"
                          className="form-control "
                          placeholder="Enter Username"
                          name="username"
                          onChange={this.onChange}
                          className={classnames("form-control form-control-lg", {
                            "is-invalid": errors.username
                          })} />
                          {errors.username && (
                            <div className="invalid-feedback">{errors.username}</div>
                          )}
                  </div>
                  <div className="form-group mt-4">
                      <label>Your Password</label>
                      <input
                          type="password"
                          className="form-control "
                          placeholder="Enter Password"
                          name="password"
                          onChange={this.onChange}
                          className={classnames("form-control form-control-lg", {
                            "is-invalid": errors.password
                          })} />
                          {errors.password && (
                            <div className="invalid-feedback">{errors.password}</div>
                          )}
                  </div>
                  <input type="submit" 
                      className="btn btn-primary btn-lg mt-2"
                      value="Login" />
                </form>
              </div>
            </div>
          </div>
        </div>
    );
  }
  
}

/*
Login.propTypes = {
  login: PropTypes.func.isRequired,
  //errors: PropTypes.object.isRequired,
  security: PropTypes.object.isRequired
};
*/

const mapStateToProps = state => ({
  security: state.security,
  errors: state.errors
});

export default connect(mapStateToProps, { login })(Login);