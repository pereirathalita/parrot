import { Link } from "react-router-dom";
import { Form, Card } from "react-bootstrap";
import Logo from "../../assets/img/logo-colorido.png";
import "./styles.scss";

function TelaLogin() {
  return (
    <main className="bg-img">
      <div className="container vh-100">
      <div className="row h-100 d-flex align-items-center justify-content-center">
        <div className="col-xs-10 col-sm-8 col-md-5">
          <Card id="card" className="shadow-sm rounded text-center">
          <Card.Body>
            <Card.Img src={Logo} alt="logo-login" className='logo-img pt-5'/>
          <h3>LOGIN</h3>
         <Form className='container'>
           <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
             <Form.Control type="email" placeholder="email" />
           </Form.Group>
           <Form.Group className="mb-3 mt-4" controlId="formBasicPassword">
             <Form.Control type="password" placeholder="senha" />
           </Form.Group>
           <Form.Group className="mb-3 mt-4" controlId="formBasicName">
             <Form.Control className="botao" type="submit" value="entrar" />
           </Form.Group>
           <Link to="cadastro">cadastre-se</Link>
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
