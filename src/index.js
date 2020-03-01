import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HomePage } from "./pages/home";
import { SecondPage } from "./pages/secondPage";
import "./css/style.css";
import {TRACTOR,UNICORN} from './utils/const';
function App() {
  return (
    <Router>
      <div>
        <ul className="header">
          <li className="lc1">
            <Link to="/" title="home"> {TRACTOR}</Link>
          </li>
          <li className="lc2">
            <Link to="/second-page" title="second-page">{UNICORN}</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={HomePage} />
        <Route path="/second-page" component={SecondPage} />
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
