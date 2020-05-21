import React, { useCallback, useState } from "react";
import { MdFileUpload } from "react-icons/md";
import { useDropzone } from "react-dropzone";
import { Container, Title } from "./styles";

/*<div {...getRootProps()}>
    <input {...getInputProps()} />
    {
      isDragActive ?
        <p>Drop the files here ...</p> :
        <p>Drag 'n' drop some files here, or click to select files</p>
    }
</div>*/
const DragAndDropFileUpload: React.FC = ({}) => {
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const onDrop = useCallback((acceptedFiles) => {
    setIsDrag(true);
    //process
    setIsDrag(false);
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
  } = useDropzone({ onDrop });

  const renderDragMessage = () => {
    return "Solte seus arquivos aqui";
  };

  const getRootColor = () => {
    if (!isDragActive) {
      return "#495867";
    }
    if (isDrag) {
      return "#00a896";
    }
    return "#05668d";
  };

  return (
    <Container opacity={!isDragActive ? 1 : 0.8} {...getRootProps()}>
      <input {...getInputProps()}></input>
      <MdFileUpload size={26} color={getRootColor()} />
      <Title color={getRootColor()}>{renderDragMessage()}</Title>
    </Container>
  );
};

export default DragAndDropFileUpload;
