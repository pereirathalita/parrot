import { Link, useNavigate } from "react-router-dom";
import { Form, Card, Button } from "react-bootstrap";
import { FormEvent, useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import userReduce from "../../store/modules/user";
import { login } from "../../services/MainApi/login";
import Logo from "../../assets/img/logo-colorido.png";
import { setUser } from "../../store/modules/user";
import "./styles.scss";

export default function TelaLogin() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const response = await login({ email, password });

      window.localStorage.setItem("token", response.data.token);
      window.localStorage.setItem("id", response.data.id);

      dispatch(
        setUser({
          token: response.data,
          email,
          // isLogged: true,
        })
      );

      navigate("/feed");
      alert("Login efetuado com sucesso :)");
      // verificar o id
      // return (
      //   window.location.href="/feed"
      // )
    } catch (error) {
      alert("Ops, deu algo errado :(");
    }
  };

  return (
    <main className="bg-img">
      <div className="container vh-100">
        <div className="row h-100 d-flex align-items-center justify-content-center">
          <div className="col-xs-10 col-sm-8 col-md-5">
            <Card id="card" className="shadow-sm rounded text-center">
              <Card.Body>
                <Card.Img
                  src={Logo}
                  alt="logo-login"
                  className="logo-img pt-5"
                />
                <h3>LOGIN</h3>
                <Form className="container" onSubmit={submit}>
                  <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                    <Form.Control
                      type="text"
                      placeholder="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 mt-4"
                    controlId="formBasicPassword"
                  >
                    <Form.Control
                      type="password"
                      placeholder="senha"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3 mt-4" controlId="formBasicName">
                    <Button className="botao" type="submit">
                      entrar
                    </Button>
                  </Form.Group>
                  <Link to="/cadastro">cadastre-se</Link>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
