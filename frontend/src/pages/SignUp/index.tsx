import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactLoading from "react-loading";
import { RouteComponentProps } from "react-router-dom";
import {
  Container,
  Form,
  Logo,
  Title,
  Input,
  Button,
  HaveAccount,
} from "./styles";
import logo from "../../assets/images/cogwheel.png";

interface Props extends RouteComponentProps {}

const SignUp: React.FC<Props> = ({ history }) => {
  const dispatcher = useDispatch();
  const [username, setUsername] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const state = useSelector((state: any) => state?.signUp);

  useEffect(() => {
    console.log(state);
    if (state?.error) {
    }
    if (state?.data?.user?.id) {
      history.push("/confirmAccount", { fromSignUpPage: true });
    }
  }, [state]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatcher({
      type: "SIGN_UP_ACTION",
      data: {
        username,
        email,
        password,
      },
    });
    setIsFetching(true);
  };

  const handleChangeToLoginPage = () => {
    history.push("/");
  };

  return (
    <Container>
      <Form>
        <Logo src={logo}></Logo>
        <Title>Faça seu login</Title>
        <Input
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Digite seu usuario"
        ></Input>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu email"
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
        <HaveAccount onClick={handleChangeToLoginPage}>
          Já possui uma conta
        </HaveAccount>
      </Form>
    </Container>
  );
};

export default SignUp;
