import React, { Component } from "react";
import mawingu from "../assets/img/mawingu.png";
import { handleLogin } from "../redux/actions/login";
import { connect } from "react-redux";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "Phone",
      password: "Password"
    };
  }

  handleOnchange = event => {
    this.setState({
      [event.target.id]: event.target.value,
      error: ""
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { password, phone } = this.state;

    if (!phone) {
      return this.setState({ error: "Phone is required" });
    }

    if (!password) {
      return this.setState({ error: "Password is required" });
    }

    const { dispatch } = this.props;
    dispatch(handleLogin({ phone, password }));
  };

  render() {
    const { error, password, phone } = this.state;

    if (window.localStorage.getItem("token")) {
      return window.location.replace("/");
    }

    const {
      user: {
        UserToken: { user }
      }
    } = this.props;

    return (
      <div className="mt-5 d-flex justify-content-center">
        <div className="mt-5 p-3 login-container shadow">
          <div className="login-header">
            <img src={mawingu} alt="Mawingu Logo" />
            <h1 className="my-3">Admin Login</h1>
          </div>
          <div className="login-body">
            <form action="#" onSubmit={e => this.handleSubmit(e)}>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-phone" aria-hidden="true" />
                  </span>
                </div>
                <input type="tel" className="form-control" value={phone} onChange={this.handleOnchange} id="phone" />
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-lock" aria-hidden="true" />
                  </span>
                </div>

                <input
                  type="password"
                  className="form-control is-invalid"
                  onChange={this.handleOnchange}
                  id="password"
                  value={password}
                />

                {error ? <div className="invalid-feedback">{error}</div> : ""}
                {user ? <div className="invalid-feedback">{user}</div> : ""}
              </div>

              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state
  };
};

export default connect(mapStateToProps)(Login);
