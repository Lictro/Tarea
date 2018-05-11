import React from "react";
import { render } from "react-dom";
import AppBar from "material-ui/AppBar";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Honduras from "./data.json"
import CardGen from "./CardGen"

const App = () => (
  <div>
    <MuiThemeProvider>
      <AppBar
        title="Conozca a Honduras"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
    </MuiThemeProvider>
    <MuiThemeProvider>
      <CardGen deptos={Honduras.deptos} />
    </MuiThemeProvider>
  </div>
);

render(<App />, document.getElementById("app"));
