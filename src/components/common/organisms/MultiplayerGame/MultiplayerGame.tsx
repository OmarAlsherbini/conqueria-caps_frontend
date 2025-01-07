import React from 'react';
import Background from '../../atoms/Background/Background';
import TitleBar from '../../atoms/TitleBar/TitleBar';
import SettingsFrame from '../../atoms/WindowFrame/WindowFrame';

const MultiplayerGameSettings = () => {
  return (
    <Background>
      <TitleBar title="GAME SETTINGS" />
      <SettingsFrame>
        {/* Content for Game Settings can go here */}
      </SettingsFrame>
    </Background>
  );
};

export default MultiplayerGameSettings;
