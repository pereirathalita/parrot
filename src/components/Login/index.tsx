import "../../components/Login";
import "./styles.scss";
import logo from "../../assets/img/logo-colorido.png";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import TelaCadastro from "../Cadastro";

function TelaLogin() {
  return (
    <div className="container">
      <div>
        <img src={logo} alt="Logo" className="imgLogo" />
      </div>
      <div className="login">
        <h2>LOGIN</h2>
      </div>
      <Form>
        <Form.Group className="form-control mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Senha" />
        </Form.Group>
        <Button className="botao">entrar</Button>
      </Form>
      <div className="cadastro">
        <a href="#">cadastre-se</a>
      </div>
    </div>
  );
}

export default TelaLogin;
