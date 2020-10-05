import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import Navi from "./components/Navi";
import Dashboard from "./components/Dashboard";
import Detail from "./components/Detail";
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  return (
    <div>
      <Navi />
      <Container>
        <Switch>
          <Route path="/" exact component={Dashboard}/>
          <Route path="/detay/:id" exact component={Detail}/>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
