import * as React from "react";
import styled from "styled-components";

function ImageDisplay() {
  return (
    <ImageContainer>
      <DisplayImage
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7265e8af94ce47432416881dba62964c33b192d9507cea7f32ab5699981155a8?placeholderIfAbsent=true&apiKey=d7ab94273b364e0d93895903c268ba59"
        alt="Display content"
      />
    </ImageContainer>
  );
}

const ImageContainer = styled.div`
  background-color: #fff;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  overflow: hidden;
  justify-content: flex-start;
  padding: 10px;
`;

const DisplayImage = styled.img`
  aspect-ratio: 1.41;
  object-fit: contain;
  object-position: center;
  width: 1416px;
  min-width: 240px;
`;

export default ImageDisplay;