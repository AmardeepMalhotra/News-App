import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
    };
  }
  postSearch(e) {
    e.preventDefault();
    this.props.changeSearch(this.state.search);
    this.setState({ search: "" });
  }
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg background p-3 px-4 sticky-top">
          <div className="container-fluid">
            <Link
              className="navbar-brand"
              to="/"
              onClick={() => this.props.changeSearch("")}
            >
              NEWS APP
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/All"
                    onClick={() => this.props.changeSearch("")}
                  >
                    All
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/Politics"
                    onClick={() => this.props.changeSearch("")}
                  >
                    Politics
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/Crime"
                    onClick={() => this.props.changeSearch("")}
                  >
                    Crime
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/Education"
                    onClick={() => this.props.changeSearch("")}
                  >
                    Education
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/Entertainment"
                    onClick={() => this.props.changeSearch("")}
                  >
                    Entertainment
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Other
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/Science"
                        onClick={() => this.props.changeSearch("")}
                      >
                        Science
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/Technology"
                        onClick={() => this.props.changeSearch("")}
                      >
                        Technology
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/Sports"
                        onClick={() => this.props.changeSearch("")}
                      >
                        Sports
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/Cricket"
                        onClick={() => this.props.changeSearch("")}
                      >
                        Cricket
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/IPL"
                        onClick={() => this.props.changeSearch("")}
                      >
                        IPL
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/Jokes"
                        onClick={() => this.props.changeSearch("")}
                      >
                        Jokes
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/India"
                        onClick={() => this.props.changeSearch("")}
                      >
                        India
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/India Economics"
                        onClick={() => this.props.changeSearch("")}
                      >
                        India Economics
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/World"
                        onClick={() => this.props.changeSearch("")}
                      >
                        World
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Language
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => this.props.changeLanguage("hi")}
                      >
                        Hindi
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => this.props.changeLanguage("en")}
                      >
                        English
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
              <form
                className="d-flex"
                role="search"
                onSubmit={(e) => this.postSearch(e)}
              >
                <input
                  className="form-control me-2"
                  type="search"
                  name="search"
                  value={this.state.search}
                  onChange={(e) => this.setState({ search: e.target.value })}
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-dark" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
