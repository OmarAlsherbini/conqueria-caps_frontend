// import React from 'react';
import Background from '../../atoms/Background/Background';
import TitleBar from '../../atoms/TitleBar/TitleBar';
import SettingsFrame from '../../atoms/WindowFrame/WindowFrame';
import MetallicFrame from '../../molecules/MetallicFrame/MetallicFrame';
import { useTranslation } from 'react-i18next';

const MultiplayerGameSettings = () => {
  const { t } = useTranslation(); // t is the translation function
  return (
    <Background>
      <TitleBar title={t('multiplayer_game.settings.title')} />
      <SettingsFrame>
        {/* Content for Game Settings can go here */}
        <MetallicFrame 
          width={'50%'}
          height={'41.5%'}
          bottom={'18%'}
          right={'1%'}
        >
          
        </MetallicFrame>
        <MetallicFrame 
          width={'37%'}
          height={'41.5%'}
          bottom={'18%'}
          left={'1%'}
        >
          <img
            src="/assets/img/map1.png"
            alt={t('multiplayer_game.settings.map_name')}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "8px", // Match the frame's inner border-radius
              objectFit: "cover", // Ensure the image scales properly
            }}
          />
        </MetallicFrame>
      </SettingsFrame>
    </Background>
  );
};

export default MultiplayerGameSettings;
