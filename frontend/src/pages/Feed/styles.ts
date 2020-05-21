import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.5px solid #ddd;
`;

export const LogoAndTitleContainer = styled.div`
  display: flex;
  height: 60px;
  width: 50%;
  align-items: center;
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 20px;
`;

export const Title = styled.h1`
  font-size: 20px;
  color: #495867;
  margin-left: 10px;
`;

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 20px;
  border-radius: 100px;
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

export const LoaddingContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const FilesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  height: calc(100vh - 60px);
  border-right: 0.5px solid #ddd;
`;

export const NotHaveFilesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 60px);
  width: 100%;
`;

export const NotHaveFilesDescription = styled.h3`
  font-size: 16px;
  color: #495867;
  margin-top: 10px;
`;
