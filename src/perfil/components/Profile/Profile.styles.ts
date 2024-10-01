import styled from 'styled-components';

export const Container = styled.div`
  background-color: #000;
  color: #fff;
  padding: 16px;
  font-family: 'Poppins', sans-serif;
  width: 100%;
  max-width: 600px; /* Limita o tamanho máximo em telas grandes */
  margin: 0 auto;
`;

export const Header = styled.header`
  text-align: left;
  margin-bottom: 20px;
  h1 {
    color: #ff007a;
    font-size: 20px; /* Mobile first */
    @media (min-width: 768px) {
      font-size: 24px; /* Ajusta para telas maiores */
    }
  }
  p {
    color: #fff;
    font-size: 16px;
    margin: 5px 0;
    @media (min-width: 768px) {
      font-size: 18px;
    }
  }
  span {
    color: #ccc;
    font-size: 12px;
    @media (min-width: 768px) {
      font-size: 14px;
    }
  }
`;

export const ProfilePicture = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  img {
    border-radius: 50%;
    width: 60px; /* mobile first */
    height: 60px;
    @media (min-width: 768px) {
      width: 80px;
      height: 80px;
    }
  }
  button {
    background-color: #ff007a;
    color: #fff;
    border: none;
    padding: 6px 12px; /* mobile first */
    margin-left: 16px;
    border-radius: 24px;
    cursor: pointer;
    @media (min-width: 768px) {
      padding: 8px 16px;
    }
  }
`;

export const InfoSection = styled.section`
  margin-top: 24px;
`;

export const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid #333;
  color: #ccc;
  span:first-child {
    font-size: 14px; /* Mobile first */
    @media (min-width: 768px) {
      font-size: 16px; /* Ajusta para telas maiores */
    }
  }
  span:last-child {
    font-size: 14px;
    color: #fff;
    @media (min-width: 768px) {
      font-size: 16px;
    }
  }
`;

export const EditButton = styled.button`
  background: none;
  color: #ff007a;
  border: none;
  cursor: pointer;
  font-size: 14px; /* Mobile first */
  @media (min-width: 768px) {
    font-size: 16px; /* Ajusta para telas maiores */
  }
`;

export const VerifiedIcon = styled.i`
  color: #00ff00;
  margin-left: 8px;
  font-size: 14px; /* Mobile first */
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;
