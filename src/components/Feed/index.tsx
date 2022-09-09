import { Button, Card, FloatingLabel, Form } from "react-bootstrap";
import { useState, FormEvent, useEffect } from "react";
import { feed } from "../../services/MainApi/feed";
import Foto from "../../assets/img/profile.png";
import Header from "../Header";
import "./styles.scss";

export default function Feed() {
  useEffect(() => {
    if (!window.localStorage.getItem("token")) {
      window.location.pathname = "/feed"
    }
  }, []);

  const [mensagem, setMensagem] = useState<string>("");

  // const submit = async (event: FormEvent) => {
  //   event.preventDefault();
  //   try {
  //     const response = await feed({ mensagem });
  //     console.log(response.data);
  //     alert("Sua mensagem foi enviada");
  //   } catch (error) {
  //     alert("Ops, deu algo errado :(");
  //   }

  return (
    <div>
      <Header />
      <div className="d-flex justify-content-center">
        <Card
          id="card-perfil"
          className="d-flex flex-row justify-content-around w-50 pt-4"
        >
          <Card.Body className="form-post card-feed d-flex align-items-center flex-wrap">
            <img src={Foto} alt="foto-de-perfil" className="foto-perfil me-4" />
            <Form.Control
              className=""
              as="textarea"
              placeholder="Deixe sua mensagem aqui"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
            />
            <Button
              id="editar-button"
              className="ms-auto me-5 px-5 mt-2 align-self-end"
            >
              publicar
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div className="d-flex justify-content-center">
        <Card
          id="card-post"
          className="d-flex flex-row justify-content-around w-50"
        >
          <Card.Body className="d-flex justify-content-around align-items-center card-post">
            <img src={Foto} alt="foto-de-perfil" className="foto-perfil me-3" />
            <Card.Text className="mt-2 ms-2">
              <p className="nome-publi">Nome</p>
              <p>apartamento</p>
              <p className="data-publi">data</p>
              <p>
                Poxa galera, vamos respeitar o horário de silêncio! Tinha alguém
                usando furadeira 2 HORAS DA MANHÃ!!! ó_ó
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="d-flex justify-content-center">
        <Card
          id="card-post"
          className="d-flex flex-row justify-content-around w-50"
        >
          <Card.Body className="d-flex justify-content-around align-items-center card-post">
            <img src={Foto} alt="foto-de-perfil" className="foto-perfil me-3" />
            <Card.Text className="mt-2 ms-2">
              <p className="nome-publi">Nome</p>
              <p>apartamento</p>
              <p className="data-publi">data</p>
              <p>
                Contratei um personal trainer e quero um parceiro pra fazer
                treinos semanais e dividir o custo, quem anima? :D
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="d-flex justify-content-center">
      <Card
          id="card-post"
          className="d-flex flex-row justify-content-around w-50"
        >
          <Card.Body className="d-flex justify-content-around align-items-center card-post">
            <img src={Foto} alt="foto-de-perfil" className="foto-perfil me-3" />
            <Card.Text className="mt-2 ms-2">
              <p className="nome-publi">Nome</p>
              <p>apartamento</p>
              <p className="data-publi">data</p>
              <p>
                Contratei um personal trainer e quero um parceiro pra fazer
                treinos semanais e dividir o custo, quem anima? :D
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="d-flex justify-content-center">
      <Card
          id="card-post"
          className="d-flex flex-row justify-content-around w-50"
        >
          <Card.Body className="d-flex justify-content-around align-items-center card-post">
            <img src={Foto} alt="foto-de-perfil" className="foto-perfil me-3" />
            <Card.Text className="mt-2 ms-2">
              <p className="nome-publi">Nome</p>
              <p>apartamento</p>
              <p className="data-publi">data</p>
              <p>
                Contratei um personal trainer e quero um parceiro pra fazer
                treinos semanais e dividir o custo, quem anima? :D
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
