import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import {
  Container,
  Form,
  Logo,
  Title,
  Input,
  Button,
  DontHaveAccount,
} from "./styles";
import logo from "../../assets/images/cogwheel.png";

interface Props extends RouteComponentProps {}

const Login: React.FC<Props> = ({ history }) => {
  const dispatcher = useDispatch();
  const [user, setUser] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const state = useSelector((state: any) => state?.login?.data);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      history.push("/feed");
    }
  }, []);

  useEffect(() => {
    if (state?.token) {
      history.push("/feed");
    }
  }, [state]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatcher({
      type: "LOGIN_ACTION",
      data: {
        user,
        password,
      },
    });
    setIsFetching(true);
  };

  const handleChangeToSignUpPage = () => {
    history.push("/signUp");
  };

  return (
    <Container>
      <Form>
        <Logo src={logo}></Logo>
        <Title>Faça seu login</Title>
        <Input
          onChange={(e) => setUser(e.target.value)}
          placeholder="Digite seu usuario ou email"
        ></Input>
        <Input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Digite seu password"
        ></Input>
        <Button onClick={handleSubmit}>
          {isFetching ? (
            <ReactLoading
              type="spin"
              color="#fff"
              height={"10%"}
              width={"10%"}
            />
          ) : (
            "Cadastrar"
          )}
        </Button>
        <DontHaveAccount onClick={handleChangeToSignUpPage}>
          Não possui uma conta?
        </DontHaveAccount>
      </Form>
    </Container>
  );
};

export default Login;
