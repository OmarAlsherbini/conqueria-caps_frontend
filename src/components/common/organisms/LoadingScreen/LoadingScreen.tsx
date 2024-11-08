import React from 'react';
import LoadingBar from '../../atoms/LoadingBar/LoadingBar';

const LoadingScreen: React.FC<{ progress: number, message: string }> = ({ progress, message }) => (
  <div className="loading-screen" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 100, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <img src="/assets/img/loading_screen.png" alt="Loading" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute' }} />
    {/* <div style={{ marginTop: '20px', fontSize: '24px', color: '#ffffff', textAlign: 'center' }}>{message}</div> */}
    <div
      style={{
        position: 'absolute',
        bottom: '1.8%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 101,
      }}
    >
      <LoadingBar progress={progress} />
    </div>
  </div>
);

export default LoadingScreen;