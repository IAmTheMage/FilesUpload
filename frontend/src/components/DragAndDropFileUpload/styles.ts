import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: calc(50vh - 30px);
  align-items: center;
  justify-content: center;
  opacity: ${(props: { opacity: number }) => props.opacity};
`;

export const Title = styled.h3`
  font-size: 16px;
  color: ${(props: { color: string }) => props.color};
  margin-top: 5px;
`;
