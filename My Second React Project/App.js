import React, { Component } from "react";
import Nav from "./components/Nav";
import NewCom from "./components/NewCom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  state = {
    progress: 0,
  };
  setProgress = (para) => {
    this.setState({
      progress: para,
    });
  };
  render() {
    const apikey =process.env.REACT_APP_API_KEY
    return (
      <>
        {/* {console.log(apikey)} */}
        <Router>
          <LoadingBar
            height={3}
            color="#f11946"
            progress={this.state.progress}
          />
          <Nav />
          <Routes>
            <Route
            path="/"
              element={
                <NewCom
                  page_size={12}
                  country={"us"}
                  category="general"
                  setState={this.setProgress}
                  apiKey={apikey}
                />
              }></Route>
          </Routes>
          <Routes>
            <Route
              path="/business"
              element={
                <NewCom
                  setState={this.setProgress}
                  apiKey={apikey}
                  page_size={12}
                  country={"us"}
                  category="business"
                />
              }></Route>
          </Routes>
          <Routes>
            <Route
              path="/entertainment"
              element={
                <NewCom
                  setState={this.setProgress}
                  apiKey={apikey}
                  page_size={12}
                  country={"us"}
                  category="entertainment"
                />
              }></Route>
          </Routes>
          <Routes>
            <Route
              path="/general"
              element={
                <NewCom
                  setState={this.setProgress}
                  apiKey={apikey}
                  page_size={12}
                  country={"us"}
                  category="general"
                />
              }></Route>
          </Routes>
          <Routes>
            <Route
              path="/health"
              element={
                <NewCom
                  setState={this.setProgress}
                  apiKey={apikey}
                  page_size={12}
                  country={"us"}
                  category="health"
                />
              }></Route>
          </Routes>
          <Routes>
            <Route
              path="/science"
              element={
                <NewCom
                  setState={this.setProgress}
                  apiKey={apikey}
                  page_size={12}
                  country={"us"}
                  category="science"
                />
              }></Route>
          </Routes>
          <Routes>
            <Route
              path="/sports"
              element={
                <NewCom
                  setState={this.setProgress}
                  apiKey={apikey}
                  page_size={12}
                  country={"us"}
                  category="sports"
                />
              }></Route>
          </Routes>
          <Routes>
            <Route
              path="/technology"
              element={
                <NewCom
                  setState={this.setProgress}
                  apiKey={apikey}
                  page_size={12}
                  country={"us"}
                  category="technology"
                />
              }></Route>
          </Routes>
        </Router>
      </>
    );
  }
}
