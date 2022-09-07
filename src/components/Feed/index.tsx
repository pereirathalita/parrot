import { Button, Card, FloatingLabel, Form } from "react-bootstrap";
import perfil from "../../assets/img/profile.png";
import Header from "../Header";
import "./styles.scss"

export default function Feed() {
  return (
    <div>
      <Header />
      <div className="d-flex justify-content-center">
        <Card id="card" className="w-50 shadow-sm text-center">
          <Card.Body className="d-flex justify-content-around">
            <Card.Img src={perfil} alt="perfil" className="perfil-img pt-2" />
            <FloatingLabel label="Comments" className="mb-3">
        <Form.Control as="textarea" placeholder="Leave a comment here" />
      </FloatingLabel>
            <div className="justify-content-end">
            <Button id="botao-publicar">publicar</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
