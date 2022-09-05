import "../../components/Login";
import "./styles.scss";
import logo from "../../assets/img/logo-colorido.png";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Card } from "react-bootstrap";


function TelaCadastro() {
  return (
    <main>
      <div className="container vh-100">
      <div className="row h-100 d-flex align-items-center justify-content-center">
        <div className="col-xs-10 col-sm-8 col-md-5">
          <Card id="teste" className="shadow-sm text-center">
          <Card.Body>
            <Card.Img src={logo} alt="logo-login" className='logo-img pt-2'/>
          <h4 className='py-3'>CADASTRO</h4>
          <Form className='container w-75'>
           <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
             <Form.Control type="name" placeholder="nome" />
           </Form.Group>

           <Form.Group className="mb-3 mt-4" controlId="formBasicName">
             <Form.Control type="email" placeholder="email" />
           </Form.Group>

           <Form.Group className="mb-3 mt-4" controlId="formBasicPassword">
             <Form.Control type="password" placeholder="senha" />
           </Form.Group>

           <Form.Group className="mb-3 mt-4" controlId="formBasicPassword">
             <Form.Control type="password" placeholder="confirmar senha" />
           </Form.Group>

           <Form.Group className="mb-3 mt-4" controlId="formBasicName">
             <Form.Control type="name" placeholder="unidade/apartamento" />
           </Form.Group>

           <Form.Group className="mb-3 mt-4" controlId="formBasicName">
             <Form.Control className="botao"  type="submit" value="entrar" />
           </Form.Group>
         </Form>
         </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  </main>
  );
}

export default TelaCadastro;
