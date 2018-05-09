import React from "react";
import { render } from "react-dom";
import { HashRouter, Route } from "react-router-dom";
import Landing from "./Landing";
import Search from "./Search";
/*
const MyTitle = function(props) {
  const style = { color: props.color };
  return (
    <div>
      <h1 style={style}>{props.title}</h1>
    </div>
  );
};

const MyFirstComponent = function() {
  return (
    <div>
      <MyTitle title="Thor: Ragnarok" color="YellowGreen" />
      <MyTitle title="The Last Jedi" color="rebeccapurple" />
      <MyTitle title="Infinity War" color="peru" />
      <MyTitle title="Deapool 2" color="mediumaquamarine" />
    </div>
  );
};
*/

const App = () => (
  <HashRouter>
    <div className="app">
      <Route exact path="/" component={Landing} />
      <Route path="/search" component={Search} />
    </div>
  </HashRouter>
);

render(<App />, document.getElementById("app"));
