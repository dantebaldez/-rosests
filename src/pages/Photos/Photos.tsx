import React, { useState } from 'react';
import { PhotosContainer, AddPhotoButton, PhotoGrid, PhotoItem } from './Photos.styles';

const Photos: React.FC = () => {
  const [photos, setPhotos] = useState<string[]>([]);

  const handleAddPhoto = () => {
    const newPhoto = prompt("Enter photo URL");
    if (newPhoto) {
      setPhotos([...photos, newPhoto]);
    }
  };

  return (
    <PhotosContainer>
      <h1>Your Photos</h1>
      <AddPhotoButton onClick={handleAddPhoto}>Add Photo</AddPhotoButton>
      <PhotoGrid>
        {photos.map((photo, index) => (
          <PhotoItem key={index}>
            <img src={photo} alt={`Photo ${index}`} />
          </PhotoItem>
        ))}
      </PhotoGrid>
    </PhotosContainer>
  );
};

export default Photos;
