import { Button, Form, Container, Navbar } from 'react-bootstrap';
import "./styles.scss"
import Logo from "../../assets/img/logo-horizontal-colorido.png";

export default function Header() {
      return (
        <Navbar className="header">
          <Container fluid>
            <Navbar.Brand><img className="w-50" src={Logo} alt="Logo" /></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                <span className="usuario-header user-text">Olá Usuário | </span> 
                <a className="sair-header" href="#login">sair</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}