import styled from 'styled-components';
import '../../styles/variables.sass';

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background-color: $background-color;
  color: $text-color;
  min-height: 100vh;
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  width: 100%;
  border-bottom: 1px solid $border-color;
`;

export const NavButton = styled.a<{ active?: boolean }>`
  background-color: transparent;
  color: #ff007a;
  padding: 15px 25px;
  border: none;
  margin: 0 10px;
  cursor: pointer;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff007a;
    color: black;
  }

  ${(props) =>
    props.active &&
    `
    background-color: #ff007a;
    color: black
  `}
`;

export const ProfilePicture = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: $gray-color;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  font-size: 20px;
  color: $font-color;
  border: 2px dashed $border-color;
`;

export const UploadButton = styled.label`
  background-color: $logo-color;
  color: $font-color;
  padding: 15px 30px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 30px;
  display: inline-block;
  text-align: center;
  font-size: 18px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: darken($logo-color, 10%);
  }
`;

export const Field = styled.div`
  width: 100%;
  margin: 15px 0;
`;

export const FieldLabel = styled.label`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 5px;
`;

export const FieldInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid $border-color;
  border-radius: 4px;
  background-color: $card-background-color;
  color: $text-color;

  &:focus {
    border-color: $logo-color;
    outline: none;
  }
`;
