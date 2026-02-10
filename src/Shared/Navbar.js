import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import { Link, Route, Router, Switch } from 'react-router-dom/cjs/react-router-dom';
import App from '../App';
// import { Link } from 'react-router-dom/';

export function Navbar() {
return (
  <div className="App">
    <NavBar bg="light" expand="lg">
      <NavBar.Brand href="#home">React Bootstrap</NavBar.Brand>
      <NavBar.Toggle aria-controls="basic-navbar-nav"></NavBar.Toggle>
      <NavBar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to={"/"}>Movies</Link>
          </Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
      </NavBar.Collapse>
    </NavBar>

      <Switch>
        <Route exact path={["/"]} component={App}></Route>
      </Switch>
  </div>
);
}