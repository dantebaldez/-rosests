// src/pages/Info/Info.tsx
import React, { useState } from 'react';
import { InfoContainer, NavBar, NavButton, ProfilePicture, UploadButton, Field, FieldLabel, FieldInput } from './Info.styles';

const Info: React.FC = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <InfoContainer>
      <h1>Roses</h1>
      <NavBar>
        <NavButton active={true} href="#info">Info</NavButton>
        <NavButton href="#photos">Photos</NavButton>
        <NavButton href="#preferences">Preferences</NavButton>
      </NavBar>
      <ProfilePicture style={{ backgroundImage: profileImage ? `url(${profileImage})` : undefined }}>
        {!profileImage && 'Upload Picture'}
      </ProfilePicture>
      <UploadButton>
        <input type="file" accept="image/*" onChange={handleImageUpload} style={{ display: 'none' }} />
        Upload Picture
      </UploadButton>
      <Field>
        <FieldLabel>Name</FieldLabel>
        <FieldInput type="text" />
      </Field>
      <Field>
        <FieldLabel>Email</FieldLabel>
        <FieldInput type="email" />
      </Field>
      <Field>
        <FieldLabel>Bio</FieldLabel>
        <FieldInput type="text" />
      </Field>
    </InfoContainer>
  );
};

export default Info;
