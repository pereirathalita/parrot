import Header from "../Header";
import { Card, Button } from "react-bootstrap";
import Foto from "../../assets/img/profile.png";
import baseApi from "../../services/MainApi/api";
import "../Perfil/styles.scss";
import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";

export default function PerfilUsuario() {
  // useEffect(() => {
  //   if (!window.localStorage.getItem("token")) {
  //     window.location.pathname = "/auth/login";
  //   }
  // }, []);

  const [usuarios, setUsuarios] = useState();

  const { id } = useParams();

  const fetchUser = useCallback(async () => {
    const response = await baseApi.get(`/user/${id}`).then((res) => {
      return res.data;
    });

    setUsuarios(response);
  }, [setUsuarios, id]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);


  const [usuariosPost, setUsuariosPost] = useState([]);

  return (
    <div>
      <Header />
      <div className="d-flex justify-content-center">
        <Card
          id="card-perfil"
          className="d-flex flex-row justify-content-around w-50"
        >
          <Card.Body className="d-flex justify-content-around align-items-center flex-wrap">
            <img src={Foto} alt="foto-de-perfil" className="foto-perfil me-3" />
            <Card.Text className="mt-2 ms-2">
              <span id="nome-perfil">Name</span>
              <br />
              apê
              <br />
              email
              <br />
              00 Publicações
            </Card.Text>

            <Button
              id="editar-button-perfil"
              className="ms-auto me-5 px-4 mt-2 align-self-start"
            >
              editar perfil
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
              <span className="nome-publi">Nome - apê 82</span>
              <br />
              <span className="data-publi">00/00/2022 00:00</span>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
              <span className="nome-publi">Nome - apê 82</span>
              <br />
              <span className="data-publi">00/00/2022 00:00</span>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
              <span className="nome-publi">Nome - apê 82</span>
              <br />
              <span className="data-publi">00/00/2022 00:00</span>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

