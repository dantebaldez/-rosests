import styled from 'styled-components';
import '../../styles/variables.sass';

export const PreferencesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: $background-color;
  color: $text-color;
  min-height: 100vh;
`;

export const SaveButton = styled.button`
  background-color: $logo-color;
  color: $font-color;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: darken($logo-color, 10%);
  }
`;

export const NotificationToggle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  label {
    margin-left: 8px;
  }
`;
