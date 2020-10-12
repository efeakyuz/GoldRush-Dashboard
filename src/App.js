import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import Navi from "./components/Navi";
import Dashboard from "./components/Dashboard";
import Detail from "./components/Detail";
import 'bootstrap/dist/css/bootstrap.css';
import CategoryList from "./components/CategoryList";
import AddCategory from "./components/AddCategory";

function App() {

  return (
    <div >
      <Navi />
      <Container style={{marginTop:"2rem"}}>
        <Switch>
          <Route path="/" exact component={Dashboard}/>
          <Route path="/detay/:id" exact component={Detail}/>
          <Route path="/categories" exact component={CategoryList}/>
          <Route path="/addCategory" component={AddCategory}/>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
