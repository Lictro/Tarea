import React from "react";
import { render } from "react-dom";
import AppBar from "material-ui/AppBar";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

function handleClick() {
  alert('onClick triggered on the title component');
}

const App = () => (
  <div>
    <MuiThemeProvider>
      <AppBar
        title="Conozca a Honduras"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onLeftIconButtonClick={handleClick}
      />
    </MuiThemeProvider>
  </div>
);

render(<App />, document.getElementById("app"));
