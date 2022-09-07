import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Button, Form, Container, Navbar } from "react-bootstrap";
import "./styles.scss";
import Logo from "../../assets/img/logo-horizontal-colorido.png";

export default function Header() {
  const params = useParams();
  return (
    <Navbar className="header">
      <Container fluid>
        <Navbar.Brand>
          <img className="w-50" src={Logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <span className="usuario-header user-text">Olá, {params.nome} | </span>
            <Link className="sair-header" to="/">
              sair
            </Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
