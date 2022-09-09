import { Form, Card } from "react-bootstrap";
import { FormEvent, useState } from "react";
import { cadastroUsuario } from "../../services/MainApi/cadastro";
import logo from "../../assets/img/logo-colorido.png";
import "../../components/Login";
import "./styles.scss";

export default function TelaCadastro() {
  const [name, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [apartment, setApartamento] = useState<string>("");
  const [password, setSenha] = useState<string>("");
  // const [confirmarSenha, setConfirmarSenha] = useState<string>("");

  const cadastro = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await cadastroUsuario({
        name: name,
        email: email,
        apartment: parseInt(apartment),
        password: password,
        // confirmarSenha,
      })
      
      alert("Cadastro efetuado com sucesso");
    } catch (error) {
      console.log(error)
      alert("Ops, algo deu errado");
    }
  };

  return (
    <main className="bg-img">
      <div className="container vh-100">
        <div className="row h-100 d-flex align-items-center justify-content-center">
          <div className="col-xs-10 col-sm-8 col-md-5">
            <Card id="card" className="shadow-sm text-center">
              <Card.Body>
                <Card.Img
                  src={logo}
                  alt="logo-login"
                  className="logo-img pt-2"
                />
                <h4 className="py-3">CADASTRO</h4>
                <Form className="container w-75" onSubmit={cadastro}>
                  <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                    <Form.Control
                      type="name"
                      placeholder="nome"
                      value={name}
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
                  <Form.Group className="mb-3 mt-4">
                    <Form.Control
                      type="password"
                      placeholder="senha"
                      value={password}
                      onChange={(e) => setSenha(e.target.value)}
                    />
                  </Form.Group>
                  {/* <Form.Group
                    className="mb-3 mt-4"
                  >
                    <Form.Control
                      type="password"
                      placeholder="confirmar senha"
                      value={confirmarSenha}
                      onChange={(e) => setConfirmarSenha(e.target.value)}
                    />
                  </Form.Group> */}
                  <Form.Group className="mb-3 mt-4">
                    <Form.Control
                      type="apartamento"
                      placeholder="apartamento"
                      value={apartment}
                      onChange={(e) => setApartamento(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3 mt-4">
                    <Form.Control
                      className="botao"
                      type="submit"
                      value="cadastrar"
                    />
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
