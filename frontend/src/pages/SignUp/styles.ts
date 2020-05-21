import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @keyframes Form {
    from {
      opacity: 0.7;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const Form = styled.form`
  width: 1000%;
  max-width: 400px;
  height: 350px;
  border: 0.5px solid #bdd5ea;
  border-radius: 8px;
  animation: Form 0.7s;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;
  margin-top: 10px;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #495867;
  margin-top: 10px;
`;

export const Input = styled.input`
  width: 60%;
  color: #495867;
  background: transparent;
  margin-top: 15px;
  border: 1px solid #aaa;
  border-radius: 4px;
  padding: 7px;
`;

export const Button = styled.button`
  width: 60%;
  height: 30px;
  padding: 0 10px;
  border-radius: 4px;
  margin-top: 15px;
  border: 0;
  background: #577399;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const HaveAccount = styled.h6`
  color: #fe5f55;
  font-size: 13px;
  margin-top: 10px;
  cursor: pointer;
`;
