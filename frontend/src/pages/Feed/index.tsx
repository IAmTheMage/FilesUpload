import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactLoading from "react-loading";
import { FiUpload } from "react-icons/fi";
import {
  Container,
  HeaderContainer,
  LogoAndTitleContainer,
  Logo,
  Title,
  ProfileImage,
  ContentContainer,
  FilesContainer,
  LoaddingContainer,
  NotHaveFilesContainer,
  NotHaveFilesDescription,
} from "./styles";
import logo from "../../assets/images/cogwheel.png";
import api from "../../services/api";

const Feed: React.FC = () => {
  const dispatcher = useDispatch();
  const state = useSelector((state: any) => state?.feed?.data);
  const [haveData, setHaveData] = useState<boolean>(false);

  useEffect(() => {
    dispatcher({ type: "FEED_GET_DATA_ACTION" });
  }, []);

  useEffect(() => {
    if (state?.id) {
      setHaveData(true);
    }
  }, [state]);

  return (
    <Container>
      <HeaderContainer>
        <LogoAndTitleContainer>
          <Logo src={logo} />
          <Title>Free drive</Title>
        </LogoAndTitleContainer>
        {!haveData ? null : (
          <ProfileImage
            src={`http://localhost:3333/files/default`}
          ></ProfileImage>
        )}
      </HeaderContainer>
      <ContentContainer>
        <FilesContainer>
          {!haveData && (
            <LoaddingContainer>
              <ReactLoading
                type="spin"
                color="#577399"
                height={"5%"}
                width={"5%"}
              />
            </LoaddingContainer>
          )}

          {haveData && state?.files.length == 0 && (
            <NotHaveFilesContainer>
              <FiUpload size={40} color="#495867"></FiUpload>
              <NotHaveFilesDescription>
                Parece que você não possui arquivos
              </NotHaveFilesDescription>
            </NotHaveFilesContainer>
          )}

          {haveData && state?.files.length > 0 && <p>Tem files</p>}
        </FilesContainer>
      </ContentContainer>
    </Container>
  );
};

export default Feed;
