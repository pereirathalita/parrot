import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import perfil from "../../assets/img/profile.png";
import Header from "../Header";
import "./styles.scss"

export default function PerfilUsuario() {
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
                <p>Nome e Sobrenome</p>
            </Card.Text>
            <div className="justify-content-end">
            <Button>editar perfil</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
