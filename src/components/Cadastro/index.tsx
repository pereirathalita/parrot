import "../../components/Login";
import "./styles.scss";
import logo from "../../assets/img/logo-colorido.png";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function TelaCadastro() {
  return (
    <div className="container">
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <div>
        <h2>CADASTRO</h2>
      </div>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="nome" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="senha" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="confirmar senha" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="unidade/apartamento" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="link da foto" />
        </Form.Group>
        <Button>entrar</Button>
      </Form>
    </div>
  );
}

export default TelaCadastro;
