import { Button, Card, FloatingLabel, Form } from "react-bootstrap";
import { useState, FormEvent } from "react";
import { feed } from "../../services/MainApi/feed"; 
import perfil from "../../assets/img/profile.png";
import Header from "../Header";
import "./styles.scss";

export default function Feed() {
  const [mensagem, setMensagem] = useState<string>("");

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const response = await feed({ mensagem });
      console.log(response.data);
      alert("Sua mensagem foi enviada");
    } catch (error) {
      alert("Ops, deu algo errado :(");
    }
  };
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
                placeholder="Deixe sua mensagem aqui"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
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
