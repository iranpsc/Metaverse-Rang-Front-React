import React from 'react'
import Files from 'react-files'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    direction: rtl;
`;

const ContainerFileList = styled.div`
    width: 100%;
`;

const FileItems = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 8px;
    border: 2px dashed #666;
    margin-top: 8px;
`;

const ImageContainer = styled.div`
    display: flex;

`;

const DetailContainer = styled.div`
    margin-right: 16px;
    display: flex;
    flex-direction: column;
`;

const DeleteButton = styled.span`
    font-size: 24px;
    cursor: pointer;
`;


export default function Attachment({ setFiles, files }) {
    const handleChange = (newFiles) => {
       setFiles([...newFiles]);
    }
 
    const handleFileRemove = (fileId) => {
       setFiles(prevFiles => prevFiles.filter(prevFile => prevFile.id !== fileId))
    }


  return (
    <Container>
        <Files
            className="files-attachment"
            onChange={handleChange}
            multiple={false}
            maxFiles={5}
            maxFileSize={1000000}
            minFileSize={0}
            accepts={['image/jpeg']}
            clickable>
            فایل ها را اینجا رها کنید یا برای آپلود کلیک کنید
        </Files>

        {files.length > 0 && (
            <ContainerFileList>
                {files.map(file => (
                    <FileItems key={file.id}>
                        <ImageContainer>
                            {/* <img src={file.preview.url} width={80} alt=""/> */}
                            
                            <DetailContainer>
                                <div>{file.name}</div>
                                <div>{file.sizeReadable}</div>
                            </DetailContainer>
                        </ImageContainer>
                        
                        <DeleteButton onClick={() => handleFileRemove(file.id)}>
                            X
                        </DeleteButton>
                    </FileItems>
                ))}
            </ContainerFileList>
        )}
    </Container>
  )
}
