import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
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
                <span className="user-text">Olá Usuário | </span> <a href="#login">sair</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}