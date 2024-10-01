import React, { useState } from 'react';
import { PreferencesContainer, SaveButton } from './Preferences.styles';

const Preferences: React.FC = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const handleSavePreferences = () => {
    alert('Preferences saved!');
  };

  return (
    <PreferencesContainer>
      <h1>Preferences</h1>
      <div>
        <label>
          <input
            type="checkbox"
            checked={notificationsEnabled}
            onChange={() => setNotificationsEnabled(!notificationsEnabled)}
          />
          Enable Notifications
        </label>
      </div>
      <SaveButton onClick={handleSavePreferences}>Save Preferences</SaveButton>
    </PreferencesContainer>
  );
};

export default Preferences;
