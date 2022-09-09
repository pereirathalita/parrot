import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import perfil from "../../assets/img/profile.png";
import Header from "../Header";
import "./styles.scss";

export default function PerfilUsuario() {
  useEffect(() => {
    if (!window.localStorage.getItem("token")) {
      window.location.pathname = "/auth/login";
    }
  }, []);

  return (
    <div>
      <Header />
      <div className="d-flex justify-content-center">
        <Card id="card" className="w-50 shadow-sm text-center">
          <Card.Body className="d-flex justify-content-around">
            <Card.Img src={perfil} alt="perfil" className="perfil-img pt-2" />
            <Card.Text>
              <p>Nome e Sobrenome</p>
              <p>apartamento</p>
              <p>email</p>
            </Card.Text>
            <div className="mb-3 mt-4 ms-auto me-5 px-4 mt-2 ">
            <Link className="botao" to="/editar">editar perfil</Link>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
