import { Button, Card, FloatingLabel, Form } from "react-bootstrap";
import perfil from "../../assets/img/profile.png";
import Header from "../Header";
import "./styles.scss";

export default function Feed() {
  return (
    <div>
      <Header />
      <div className="d-flex justify-content-center">
        <Card
          id="card"
          className="w-50 shadow-sm text-center justify-content-end"
        >
          <Card.Body className="">
            <Card.Img src={perfil} alt="perfil" className="perfil-img pt-2" />
            <FloatingLabel label="" className="mb-3">
              <Form.Control
                className="texto"
                as="textarea"
                placeholder="Leave a comment here"
              />
            </FloatingLabel>
            <div className="justify-content-end">
              <Button id="botao-publicar">publicar</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="d-flex justify-content-center">
        <Card id="card" className="d-flex w-50 shadow-sm text-center">
          <Card.Body className="justify-content-around">
            <Card.Img src={perfil} alt="perfil" className="perfil-img pt-2" />
            <Card.Text>
              <p>Nome</p>
              <p>apartamento</p>
              <p>data</p>
              <p>
                Poxa galera, vamos respeitar o horário de silêncio! Tinha alguém
                usando furadeira 2 HORAS DA MANHÃ!!! ó_ó
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="d-flex justify-content-center">
        <Card id="card" className="d-flex w-50 shadow-sm text-center">
          <Card.Body className="justify-content-around">
            <Card.Img src={perfil} alt="perfil" className="perfil-img pt-2" />
            <Card.Text>
              <p>Nome</p>
              <p>apartamento</p>
              <p>data</p>
              <p>
                Contratei um personal trainer e quero um parceiro pra fazer
                treinos semanais e dividir o custo, quem anima? :D
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="d-flex justify-content-center">
        <Card id="card" className="d-flex w-50 shadow-sm text-center">
          <Card.Body className="justify-content-around">
            <Card.Img src={perfil} alt="perfil" className="perfil-img pt-2" />
            <Card.Text>
              <p>Nome</p>
              <p>apartamento</p>
              <p>data</p>
              <p>
                Alô vizinhos, acabei de me mudar e vou fazer uma festinha no
                sábado ás 18h, espero vocês!
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="d-flex justify-content-center">
        <Card id="card" className="d-flex w-50 shadow-sm text-center">
          <Card.Body className="justify-content-around">
            <Card.Img src={perfil} alt="perfil" className="perfil-img pt-2" />
            <Card.Text>
              <p>Nome</p>
              <p>apartamento</p>
              <p>data</p>
              <p>
                AAAAAAA tô fazendo um bolo e esqueci de comprar açucar, rs
                alguém tem um pouco pra me trazer? Pode até levar uma parte do
                bolo se quiser haha
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
