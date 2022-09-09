import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootStore } from "../../store";
import Logo from "../../assets/img/logo-horizontal-colorido.png";
import "./styles.scss";
import baseApi from "../../services/MainApi/api";

export default function Header() {
  const [usuarios, setUsuarios] = useState();
  const user = useSelector((store: RootStore) => store.userReduce);

  const { id } = useParams();

  const fetchUser = useCallback(async () => {
    const response = await baseApi(`/info/${id}`).then((res) => {
      return res.data;
    });

    setUsuarios(response);
  }, [setUsuarios, id]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <Navbar className="header">
      <Container fluid>
        <Navbar.Brand>
          <img className="w-50" src={Logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <span className="usuario-header user-text">Olá, {user.email} | </span>
            <Link className="sair-header" to="/">sair</Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
