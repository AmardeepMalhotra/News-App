import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      language: "hi",
      search: "",
    };
  }
  changeLanguage = (data) => {
    this.setState({ language: data });
  };
  changeSearch = (data) => {
    this.setState({ search: data });
  };
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar
            changeLanguage={this.changeLanguage}
            changeSearch={this.changeSearch}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="All"
                />
              }
            />
            <Route
              path="/Politics"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="Politics"
                />
              }
            />
            <Route
              path="/Crime"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="Crime"
                />
              }
            />
            <Route
              path="/Education"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="Education"
                />
              }
            />
            <Route
              path="/Entertainment"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="Entertainment"
                />
              }
            />
            <Route
              path="/Science"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="Science"
                />
              }
            />
            <Route
              path="/Technology"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="Technology"
                />
              }
            />
            <Route
              path="/Sports"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="Sports"
                />
              }
            />
            <Route
              path="/Cricket"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="Cricket"
                />
              }
            />
            <Route
              path="/IPL"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="IPL"
                />
              }
            />
            <Route
              path="/Jokes"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="Jokes"
                />
              }
            />
            <Route
              path="/India"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="India"
                />
              }
            />
            <Route
              path="/India Economics"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="India Economics"
                />
              }
            />
            <Route
              path="/World"
              element={
                <Home
                  search={this.state.search}
                  language={this.state.language}
                  q="World"
                />
              }
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}
