import React from "react";
import {Navbar, Nav, Form, Button,NavDropdown,FormControl} from "react-bootstrap"
import HomeView from "./views/HomeView";
import GenderView from "./views/GenderView";
import ShoeView from "./views/ShoeView";

import { BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";


function App() {
  return (
    <Router>
      <Navbar className="navbar-custom" expand="lg">
      <Navbar.Brand  href="#home">InventarioZapatos.com</Navbar.Brand>
      <Navbar.Toggle className="boton-rec" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="custom-link" to="/"> Inicio</Link>
          <Link className="custom-link" to="/gender">Generos</Link>
          <Link className="custom-link" to="/zapato">Zapato</Link>
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>
    <Switch>
    <Route className="custom-card" exact={true} path="/" component={HomeView} />
        <Route path="/gender" component={GenderView} />
        <Route path="/zapato" component={ShoeView} />
    </Switch>
    </Router>
  );
}

export default App;
