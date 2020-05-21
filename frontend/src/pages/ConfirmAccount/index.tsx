import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Container, Logo, Title, Ok } from "./styles";
import logo from "../../assets/images/cogwheel.png";

interface Props {
  history: any;
}

const ConfirmAccount: React.FC<Props> = ({ history }) => {
  useEffect(() => {
    if (!history?.location?.state?.fromSignUpPage) {
      history.push("/");
    }
  }, []);

  const handleChangeToLoginPage = () => {
    history.push("/");
  };

  return (
    <Container>
      <Logo src={logo}></Logo>
      <Title>
        Sua conta foi criada, um email de verificação foi enviado a você, por
        favor và ao seu email e confirme sua conta.
      </Title>
      <Ok onClick={handleChangeToLoginPage}>Ir para a pagina de login</Ok>
    </Container>
  );
};

export default ConfirmAccount;
