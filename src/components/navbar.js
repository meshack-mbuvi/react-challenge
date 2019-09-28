import React, { Component } from "react";
import mawingu from "../assets/img/mawingu.png";
import { connect } from "react-redux";

export class Navbar extends Component {
  render() {
    const {
      tasks: { tasks }
    } = this.props;

    const user = tasks ? tasks[0].personnel_first_name : "";

    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-light bg-white border-bottom">
          <a className="navbar-brand" href="/">
            <img src={mawingu} alt="Mawingu Logo" className="img-fluid" />
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="container">
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Customers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Tasks
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Personnel
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    id="dropdownId"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Reports
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdownId">
                    <a className="dropdown-item" href="/">
                      Commissions
                    </a>
                    <a className="dropdown-item" href="/">
                      Customers
                    </a>
                    <a className="dropdown-item" href="/">
                      Merchants
                    </a>
                    <a className="dropdown-item" href="/">
                      Payments
                    </a>
                  </div>
                </li>
              </ul>
              <div className="my-2 my-lg-0">
                <div className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    id="userAccount"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fa fa-user" aria-hidden="true" />
                    {user}
                  </a>
                  <div className="dropdown-menu" aria-labelledby="userAccount">
                    <a className="dropdown-item" href="/">
                      Change Password
                    </a>
                    <a className="dropdown-item" href="/" onClick={() => window.localStorage.clear()}>
                      Logout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = ({ Tasks }) => {
  return {
    tasks: Tasks.tasks
  };
};

export default connect(mapStateToProps)(Navbar);
