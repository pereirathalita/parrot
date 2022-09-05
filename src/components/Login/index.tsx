import "./styles.scss";
import Logo from "../../assets/img/logo-colorido.png";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
// import TelaCadastro from "../Cadastro";

function TelaLogin() {
  return (
    <main>
      <div className="container vh-100">
      <div className="row h-100 d-flex align-items-center justify-content-center">
        <div className="col-xs-10 col-sm-8 col-md-5">
          <Card className="shadow-sm rounded text-center">
          <Card.Body>
            <Card.Img src={Logo} alt="logo-login" className='logo-img pt-5'/>
          <h3>LOGIN</h3>
         <Form className='container'>
           <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
             <Form.Control type="email" placeholder="email" />
           </Form.Group>

           <Form.Group className="mb-3 mt-4" controlId="formBasicPassword">
             <Form.Control type="password" placeholder="password" />
           </Form.Group>
           <Button className="buttonEntrar" variant="primary" type="submit">
             entrar
           </Button>
           <br />
           <a href="#">casdastre-se</a>
         </Form>
         </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  </main>
  );
}

export default TelaLogin;
