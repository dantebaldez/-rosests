import { Container, Header, ProfilePicture, InfoSection, InfoItem, EditButton, VerifiedIcon } from './Profile.styles.ts';

const Profile = () => {
  return (
    <Container>
      <Header>
        <h1>Roses™</h1>
        <p>PROFILE</p>
        <span>Configuration</span>
      </Header>

      <ProfilePicture>
        <img src="/assets/images/profile-picture.jpg" alt="Profile" />
        <button>Profile Picture</button>
      </ProfilePicture>

      <InfoSection>
        <InfoItem>
          <span>Profile</span>
          <span>Dante<VerifiedIcon>✔</VerifiedIcon></span>
        </InfoItem>
        <InfoItem>
          <span>Bio</span>
          <EditButton>Edit</EditButton>
        </InfoItem>
        <InfoItem>
          <span>Gender</span>
          <span>Add</span>
        </InfoItem>
        <InfoItem>
          <span>Age</span>
          <span>Add</span>
        </InfoItem>
        <InfoItem>
          <span>Ethnicity</span>
          <span>Caucasian</span>
        </InfoItem>
        <InfoItem>
          <span>Height</span>
          <span>5'9" / 1,82m</span>
        </InfoItem>
        <InfoItem>
          <span>Weight</span>
          <span>75kg / 165lb</span>
        </InfoItem>
        <InfoItem>
          <span>Language</span>
          <span>English, Spanish, Portuguese</span>
        </InfoItem>
      </InfoSection>
    </Container>
  );
};

export default Profile;
