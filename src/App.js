import React from "react";
import { Route, withRouter } from "react-router-dom";
import Main from "./Components/main";
import SmashUlt from "./Components/smashUlt";
import Xpense from "./Components/xpense";
import Styled from "styled-components";

const App = Styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap');

  font-family: 'Roboto Condensed', sans-serif;
`

const app = () => {
  const renderRoutes = () => {
    return (
      <>
        <Route exact path="/" component={Main} />
        <Route path="/smashult" component={SmashUlt} />
        <Route path="/xpense" component={Xpense} />
      </>
    );
  };

  return (
    <App>
      {renderRoutes()}
    </App>
  );
};

export default withRouter(app);