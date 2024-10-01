import styled from 'styled-components';
import '../../styles/variables.sass';

export const PhotosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: $background-color;
  color: $text-color;
  min-height: 100vh;
`;

export const AddPhotoButton = styled.button`
  background-color: $logo-color;
  color: $font-color;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    background-color: darken($logo-color, 10%);
  }
`;

export const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
  width: 100%; 

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    border: 2px solid $border-color;
  }
`;

export const PhotoItem = styled.div`
  border-radius: 8px;
  overflow: hidden; 
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
`;
