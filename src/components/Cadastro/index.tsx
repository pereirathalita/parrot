import { Form, Card } from "react-bootstrap";
import { useState } from "react";
import { cadastro } from "../";
import logo from "../../assets/img/logo-colorido.png";
import "../../components/Login";
import "./styles.scss";


export default function TelaCadastro() {
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [confirmarSenha, setConfirmarSenha] = useState<string>("");
  const [apartamento, setApartamento] = useState<string>("");

  const cadastro = async (e) => {
    e.preventDefault();

    const payload = {
      nome,
      email,
      senha,
      confirmarSenha,
      apartamento
    };

    try {
      const response = await TelaCadastro(payload);
      if(response.status !==201) {
        return alert("Ops, algo deu errado")
      }

      alert("Cadastro efetuado com sucesso :)")
    } catch (error) {
      return alert("Ops, algo deu errado")
    }
  }

  return (
    <main className="bg-img">
      <div className="container vh-100">
      <div className="row h-100 d-flex align-items-center justify-content-center">
        <div className="col-xs-10 col-sm-8 col-md-5">
          <Card id="card" className="shadow-sm text-center">
          <Card.Body>
            <Card.Img src={logo} alt="logo-login" className='logo-img pt-2'/>
          <h4 className='py-3'>CADASTRO</h4>
          <Form className='container w-75'>
           <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
             <Form.Control 
             type="name" 
             placeholder="nome"
             value={nome}
             onChange={(e) => setNome(e.target.value)} 
             />
           </Form.Group>
           <Form.Group className="mb-3 mt-4" controlId="formBasicName">
             <Form.Control 
             type="email" 
             placeholder="email" 
             value={email}
             onChange={(e) => setEmail(e.target.value)}
              />
           </Form.Group>
           <Form.Group className="mb-3 mt-4" controlId="formBasicPassword">
             <Form.Control 
             type="password" 
             placeholder="senha"
             value={senha}
             onChange={(e) => setSenha(e.target.value)}
              />
           </Form.Group>
           <Form.Group className="mb-3 mt-4" controlId="formBasicPassword">
             <Form.Control 
             type="password" 
             placeholder="confirmar senha"
             value={confirmarSenha}
             onChange={(e) => setConfirmarSenha(e.target.value)}
              />
           </Form.Group>
           <Form.Group className="mb-3 mt-4" controlId="formBasicName">
             <Form.Control 
             type="apartamento" 
             placeholder="apartamento" 
             value={apartamento}
             onChange={(e) => setApartamento(e.target.value)}/>
           </Form.Group>
           <Form.Group className="mb-3 mt-4" controlId="formBasicName">
             <Form.Control className="botao"  type="submit" value="cadastrar" />
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

