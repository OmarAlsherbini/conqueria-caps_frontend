import React, { useEffect, useRef, useState } from 'react';
import { Spritesheet } from '@pixi/spritesheet';
import { Application } from '@pixi/app';
import { IRenderer, Texture, BaseTexture, ICanvas } from '@pixi/core';
import { Ticker } from '@pixi/ticker';
import { Assets } from '@pixi/assets';
import { Sprite } from '@pixi/sprite';
import { AnimatedSprite } from '@pixi/sprite-animated';
// import { sound } from '@pixi/sound';
import { fetchSimulationData } from '../../../services/simulationService';
import { SimulationData, TroopEvent, TurretEvent } from '../../../types/simulationTypes';
import pathData from '../../../assets/paths/path2/path2Data'; // Import the path data

interface TroopSprite extends Sprite {
  start_time?: number;
}

const FlamethrowerSimulation: React.FC = () => {
  const pixiContainer = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<IRenderer<ICanvas>>();
  const appRef = useRef<Application>();
  const [isAppInitialized, setIsAppInitialized] = useState(false);

  // Define the original game dimensions
  const gameWidth = 4000;
  const gameHeight = 2200;

  useEffect(() => {
    // Get the window dimensions
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight - 100; // Subtracting 100px to account for the button and margins

    // Calculate aspect ratios
    const appAspectRatio = 4000 / 2200;
    const windowAspectRatio = windowWidth / windowHeight;

    let appWidth, appHeight;

    if (windowAspectRatio >= appAspectRatio) {
      // Window is wider than the app's aspect ratio
      appHeight = windowHeight;
      appWidth = appHeight * appAspectRatio;
    } else {
      // Window is narrower than the app's aspect ratio
      appWidth = windowWidth;
      appHeight = appWidth / appAspectRatio;
    }

    // Initialize the PixiJS application
    const app = new Application({
      width: appWidth,
      height: appHeight,
      backgroundColor: 0xffffff,
      resolution: window.devicePixelRatio || 1,
      autoDensity: true,
    });

    // Flip the y-axis
    app.stage.scale.y = -1;
    // Adjust the stage position to account for the flip
    app.stage.position.y = app.renderer.height;
    
    // Adjust the viewport to match backend's visible area
    const visibleX = 0;
    const visibleY = 900;
    const visibleWidth = 800;
    const visibleHeight = 1300; // 2200 - 900


    

    // Calculate scale factors to fit the game into the app's dimensions
    const scaleX = app.screen.width / gameWidth;
    const scaleY = app.screen.height / gameHeight;

    // Use the smaller scale to maintain aspect ratio
    const scale = Math.min(scaleX, scaleY);

    // Flip the y-axis and scale the stage
    app.stage.scale.set(scale, -scale);

    // Adjust the stage position
    app.stage.position.set(0, app.screen.height);

    // Indicate that the app has been initialized
    setIsAppInitialized(true);

    // const scaleX = app.view.width / visibleWidth;
    // const scaleY = app.view.height / visibleHeight;
    
    // // Use the smaller scale to maintain aspect ratio
    // const scale = Math.min(scaleX, scaleY);
    
    // // Adjust the stage scale
    // app.stage.scale.set(scale, -scale);
    
    // // Adjust the stage position
    // app.stage.position.set(-visibleX * scale, app.renderer.height - (-visibleY * scale));

    appRef.current = app;
    rendererRef.current = app.renderer;

    if (pixiContainer.current) {
      pixiContainer.current.appendChild(app.view as HTMLCanvasElement);
    }

    // Indicate that the app has been initialized
    setIsAppInitialized(true);

    // Clean up on unmount
    return () => {
      app.destroy(true, true);
      // Remove sounds to prevent duplication on re-mount
      if (soundRef.current) {
        const sound = soundRef.current;
        if (sound.exists('deathSound')) sound.remove('deathSound');
        if (sound.exists('goalSound')) sound.remove('goalSound');
        if (sound.exists('backgroundMusic')) sound.remove('backgroundMusic');
        if (sound.exists('fireSound')) sound.remove('fireSound');
      }
    };
  }, []);

  const loadAssets = async (sound: any) => {
    try {
      // Define your assets to load
      const assets = {
        troop: '/assets/img/rifleman.png',
        turret: '/assets/img/flamethrower.png',
        city: '/assets/img/city.png',
        capital: '/assets/img/capital.png',
        outpost: '/assets/img/outpost.png',
        flameSpritesheetJson: '/assets/animations/flame_spiresheet.json',
        flameSpritesheetImage: '/assets/animations/flame_spiresheet.png',
        fireSound: '/assets/sounds/flamethrower.mp3',
        deathSound: '/assets/sounds/troop_death1.mp3',
        goalSound: '/assets/sounds/troop_victory.mp3',
        backgroundMusic: '/assets/sounds/background_music_battle_tactics.mp3',
        backgroundImage: '/assets/img/map1.png',
        speedupIcon: '/assets/img/speedup1.png', // Add the speedup icon
      };

      // Load only image and JSON assets
      await Assets.load([
        assets.troop,
        assets.turret,
        assets.city,
        assets.capital,
        assets.outpost,
        assets.flameSpritesheetJson,
        assets.flameSpritesheetImage,
        assets.backgroundImage,
        assets.speedupIcon, // Load the speedup icon
      ]);

      // Load sounds
      if (!sound.exists('deathSound')) sound.add('deathSound', assets.deathSound);
      if (!sound.exists('goalSound')) sound.add('goalSound', assets.goalSound);
      if (!sound.exists('backgroundMusic')) sound.add('backgroundMusic', assets.backgroundMusic);
      if (!sound.exists('fireSound')) sound.add('fireSound', assets.fireSound);

      // Play background music
      sound.play('backgroundMusic', { loop: true, volume: 0.5 });

      // Fetch simulation data
      const simulationData = await fetchSimulationData();

      // Run the simulation
      runSimulation(simulationData, assets, sound, gameWidth, gameHeight);
    } catch (error) {
      console.error('Error loading assets or fetching data:', error);
    }
  };
  const soundRef = useRef<any>(null);
  const startSimulation = async () => {
    if (!isAppInitialized) {
      console.error('App not initialized yet');
      return;
    }
    // Dynamically import @pixi/sound
    const { sound } = await import('@pixi/sound');
    soundRef.current = sound;
    // Load assets and start simulation
    await loadAssets(sound);
  };

  const runSimulation = (data: SimulationData, assets: any, sound: any, gameWidth: number, gameHeight: number) => {
    // Implement the simulation using PixiJS
    // You can create sprites for the turret and troops
    // Use the event logs to animate the troops and turret

    const renderer = rendererRef.current;
    const app = appRef.current;
    const stage = app?.stage;

    if (!renderer || !stage) {
      console.error('Renderer or stage not initialized.');
      return;
    }



    // Variables for timeScale modes
    const isLinearIncreaseMode = true; // Set to false for mode (b)

    // Common variables
    const initialTimeScale = 0.1;
    const maxTimeScale = 1.5;

    // Variables for mode (a)
    const delayDuration = 0.55; // Seconds to delay before starting the linear increase
    const accelerationDuration = 2; // Seconds over which to linearly increase to maxTimeScale

    // Variables for mode (b)
    const timeScale1 = 0.1; // Initial timeScale
    const timeScale2 = 1; // Second timeScale
    const period1 = 5; // Seconds before first speedup
    const period2 = 3; // Seconds after period1 before second speedup

    // Speedup icon variables
    const speedup_icon_period = 0.05; // Seconds the icon remains visible
    const speedup_icon_disappear_time = 0.02; // Seconds over which the icon disappears





    // Create the background sprite
    const backgroundTexture = Assets.get(assets.backgroundImage) as Texture;
    const backgroundSprite = new Sprite(backgroundTexture);

    // Set the background sprite's position and size
    backgroundSprite.position.set(0, 0);
    // backgroundSprite.width = app.renderer.width;
    backgroundSprite.width = gameWidth;
    
    // backgroundSprite.height = app.renderer.height;
    backgroundSprite.height = gameHeight;
    

    // Adjust the background sprite's anchor if necessary
    backgroundSprite.anchor.set(0);

    // Add the background sprite to the stage before other sprites
    stage.addChildAt(backgroundSprite, 0); // Add at index 0 to ensure it's behind others

    // Retrieve assets using URLs
    const flameSpritesheetDataRaw = Assets.get(assets.flameSpritesheetJson);
    const flameSpritesheetTexture = Assets.get(assets.flameSpritesheetImage) as BaseTexture;

    console.log('flameSpritesheetData:', flameSpritesheetDataRaw.data);
    console.log('flameSpritesheetTexture:', flameSpritesheetTexture);

    if (!flameSpritesheetDataRaw || !flameSpritesheetTexture) {
      console.error('Flame spritesheet assets not found.');
      return;
    }

    // if (typeof flameSpritesheetDataRaw === 'string') {
    // const flameSpritesheetData = JSON.parse(flameSpritesheetDataRaw.data);
    // } else
    // const flameSpritesheetData = null;

    const spriteSheet = new Spritesheet(flameSpritesheetTexture, flameSpritesheetDataRaw.data);

    // Parse the spritesheet
    spriteSheet.parse().then(() => {
      const flameTextures = spriteSheet.animations['flame']; // Adjust as needed

      if (!flameTextures) {
        console.error('Flame animation not found in spritesheet.');
        return;
      }

      // Create the flame animation
      const flameSprite = new AnimatedSprite(flameTextures);
      flameSprite.anchor.set(0.5);
      flameSprite.visible = false;
      stage.addChild(flameSprite);

      // Calculate the flame dimensions
      const flameLength = 200; // As per backend
      const frameAspectRatio = flameSprite.height / flameSprite.width;
      const flameWidth = flameLength * frameAspectRatio;

      flameSprite.width = flameLength;
      flameSprite.height = flameWidth;

      // Retrieve path data
      const pathPoints = pathData;
      if (!pathPoints) {
        console.error('Path data not found.');
        return;
      }
      const totalPathPoints = pathPoints.points.length;

      // Example setup:
      const { x_turret, y_turret, turret_events, troop_events, n_troops, troop_speed } = data;

      // Create turret sprite
      const turretTexture = Assets.get(assets.turret) as Texture;
      const turretSprite = new Sprite(turretTexture);
      turretSprite.anchor.set(0.5);
      turretSprite.position.set(x_turret, y_turret);
      stage.addChild(turretSprite);

      // Set turret size
      const turretSize = 120;
      turretSprite.width = turretSize * 2; // Since anchor is set to 0.5
      turretSprite.height = turretSize * 2;
      
      // Create city sprite
      const cities = [[500, 275], [500, 1925], [3500, 1925], [3500, 275], [2000, 1100]]
      const cityTexture = Assets.get(assets.city) as Texture;
      const citySprites: { [key: number]: Sprite } = {};
      for (let i = 0; i < cities.length; i++) {
        if (i != 1) {
          const citySprite = new Sprite(cityTexture);
          citySprite.anchor.set(0.5);
          citySprite.position.set(cities[i][0], cities[i][1]);
          citySprite.rotation = Math.PI;
          stage.addChild(citySprite);
          citySprites[i] = citySprite;
          const citySize = 100;
          citySprite.width = citySize * 2;
          citySprite.height = citySize * 2;
          citySprite.visible = true;
        }
      } 

      // Create capital sprite
      const capitalTexture = Assets.get(assets.capital) as Texture;
      const capitalSprite = new Sprite(capitalTexture);
      capitalSprite.anchor.set(0.5);
      capitalSprite.position.set(cities[1][0], cities[1][1]);
      capitalSprite.rotation = Math.PI;
      stage.addChild(capitalSprite);

      // Set capital size
      const capitalSize = 150;
      capitalSprite.width = capitalSize * 2; // Since anchor is set to 0.5
      capitalSprite.height = capitalSize * 2;

      // Create outpost sprite
      const outposts = [[500, 1100], [3500, 1100], [2000, 275], [2000, 1925], [1500, 825], [2500, 825], [2500, 1375], [1500, 1375]]
      const outpostTexture = Assets.get(assets.outpost) as Texture;
      const outpostSprites: { [key: number]: Sprite } = {};
      for (let i = 0; i < outposts.length; i++) {
        const outpostSprite = new Sprite(outpostTexture);
        outpostSprite.anchor.set(0.5);
        outpostSprite.position.set(outposts[i][0], outposts[i][1]);
        outpostSprite.rotation = Math.PI;
        stage.addChild(outpostSprite);
        outpostSprites[i] = outpostSprite;
        const outpostSize = 100;
        outpostSprite.width = outpostSize * 2;
        outpostSprite.height = outpostSize * 2;
        outpostSprite.visible = true;
      }

      // Create troop sprites
      const troopSprites: { [key: number]: TroopSprite } = {};
      const troopTexture = Assets.get(assets.troop) as Texture;
      for (let i = 0; i < n_troops; i++) {
        const troopSprite = new Sprite(troopTexture);
        troopSprite.anchor.set(0.5);
        troopSprite.position.set(-100, -100);
        troopSprite.visible = false;
        stage.addChild(troopSprite);
        troopSprites[i] = troopSprite;
        const troopSize = 70;
        troopSprite.width = troopSize * 2;
        troopSprite.height = troopSize * 2;
      }

      // Event queues
      const troopEventQueue = [...troop_events];
      const turretEventQueue = [...turret_events];

      let elapsedTime = 0;
      // const initialTimeScale = 0.025; // Adjust as needed
      let timeScale = initialTimeScale;
      // const maxTimeScale = 300;
      // const accelerationDuration = 600; // Seconds to reach maxTimeScale
      let previousTimeScale = initialTimeScale;

      // Variables for speedup icon
      let speedupIconVisible = false;
      let speedupIconStartTime = 0;
      let speedupIconSprite: Sprite;

      // Create the speedup icon sprite
      const speedupIconTexture = Assets.get(assets.speedupIcon) as Texture;
      speedupIconSprite = new Sprite(speedupIconTexture);
      speedupIconSprite.anchor.set(0.5);
      speedupIconSprite.position.set(gameWidth / 2, gameHeight / 2);
      speedupIconSprite.visible = false;
      stage.addChild(speedupIconSprite);

      // Start the ticker
      Ticker.shared.add(() => {
        const deltaSeconds = app.ticker.deltaMS / 1000; // Corrected calculation
        elapsedTime += deltaSeconds * timeScale;

        let newTimeScale = timeScale; // Initialize newTimeScale

        // timeScale calculation
        if (isLinearIncreaseMode) {
          // Mode (a)
          if (elapsedTime < delayDuration) {
            newTimeScale = initialTimeScale;
          } else if (elapsedTime >= delayDuration && elapsedTime < delayDuration + accelerationDuration) {
            const timeSinceStart = elapsedTime - delayDuration;
            newTimeScale =
              initialTimeScale +
              (maxTimeScale - initialTimeScale) * (timeSinceStart / accelerationDuration);
          } else {
            newTimeScale = maxTimeScale;
          }
        } else {
          // Mode (b)
          if (elapsedTime < period1) {
            newTimeScale = timeScale1;
          } else if (elapsedTime >= period1 && elapsedTime < period1 + period2) {
            newTimeScale = timeScale2;
          } else {
            newTimeScale = maxTimeScale;
          }
        }

        // Check if timeScale increased
        if (newTimeScale > previousTimeScale) {
          // TimeScale increased, show speedup icon
          if (speedupIconVisible === false && speedupIconStartTime == 0) {
              speedupIconStartTime = elapsedTime;
              speedupIconVisible = true;
              speedupIconSprite.alpha = 1;
              speedupIconSprite.visible = true;
          }
        }

        timeScale = newTimeScale;
        previousTimeScale = timeScale;

        // Handle speedup icon fade-out
        if (speedupIconVisible) {
          const timeSinceIconStart = elapsedTime - speedupIconStartTime;
          if (timeSinceIconStart >= speedup_icon_period + speedup_icon_disappear_time) {
            // Hide the icon
            speedupIconVisible = false;
            speedupIconSprite.visible = false;
          } else if (timeSinceIconStart >= speedup_icon_period) {
            // Start fading out
            const fadeOutTime = timeSinceIconStart - speedup_icon_period;
            const alpha = 1 - fadeOutTime / speedup_icon_disappear_time;
            speedupIconSprite.alpha = alpha;
          }
        }

        // Process troop events
        while (troopEventQueue.length && troopEventQueue[0].timestamp <= elapsedTime) {
          const event = troopEventQueue.shift() as TroopEvent;
          const troopSprite = troopSprites[event.troop_id];
          if (event.event_type === 'start') {
            // Start moving the troop
            troopSprite.position.set(pathPoints.points[0].x, pathPoints.points[0].y);
            troopSprite.visible = true;
            troopSprite.start_time = event.timestamp;
          } else if (event.event_type === 'death') {
            sound.play('deathSound');
            troopSprite.visible = false;
          } else if (event.event_type === 'reach_target') {
            // Troop reached the target
            sound.play('goalSound');
            troopSprite.visible = false;
          }
        }

        // Process turret events
        while (turretEventQueue.length && turretEventQueue[0].timestamp <= elapsedTime) {
          const event = turretEventQueue.shift() as TurretEvent;
          if (event.event_type === 'rotate' && event.angle !== undefined) {
            // Rotate turret to angle
            turretSprite.rotation = (event.angle * Math.PI) / 180;
          } else if (event.event_type === 'fire') {
            // Position the flame sprite
            sound.play('fireSound');
            const flameOffset = 150; // Adjust as needed
            const angleInRadians = turretSprite.rotation;
            flameSprite.position.x = turretSprite.position.x + flameOffset * Math.cos(angleInRadians);
            flameSprite.position.y = turretSprite.position.y + flameOffset * Math.sin(angleInRadians);
            flameSprite.rotation = angleInRadians;

            // Play the flame animation
            flameSprite.visible = true;
            flameSprite.gotoAndPlay(0);
            flameSprite.loop = false;
            flameSprite.onComplete = () => {
              flameSprite.visible = false;
            };
          }
        }

        // Update troop positions
        for (let i = 0; i < data.n_troops; i++) {
          const troopSprite = troopSprites[i];

          if (troopSprite && troopSprite.visible && troopSprite.start_time !== undefined) {
            const troop_speed_modifier = 600; // As per backend
            const t = ((elapsedTime - troopSprite.start_time) * troop_speed) / troop_speed_modifier;

            const index = Math.min(Math.floor(t * totalPathPoints), totalPathPoints - 1);
            const nextIndex = Math.min(index + 1, totalPathPoints - 1);
            const localT = t * totalPathPoints - index; // Fraction between current and next point

            const currentPoint = pathPoints.points[index];
            const nextPoint = pathPoints.points[nextIndex];

            // Interpolate positions and angles for smooth movement
            const x = currentPoint.x + (nextPoint.x - currentPoint.x) * localT;
            const y = currentPoint.y + (nextPoint.y - currentPoint.y) * localT;
            const angle = currentPoint.angle + (nextPoint.angle - currentPoint.angle) * localT;

            troopSprite.position.set(x, y);
            troopSprite.rotation = (angle * Math.PI) / 180;
          }
        }

        // Render the stage
        app.renderer.render(stage);
      });
    });
  };

  // return (
  //   <div ref={pixiContainer} className="w-full h-full">
  //     <button onClick={startSimulation} disabled={!isAppInitialized}>
  //       Start Simulation
  //     </button>
  //   </div>
  // );
  return (
    <div className="flex flex-col items-start">
      <button
        onClick={startSimulation}
        disabled={!isAppInitialized}
        className="mb-4 ml-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Start Simulation
      </button>
      <div
        ref={pixiContainer}
        className="w-full h-full flex-grow"
        style={{ overflow: 'hidden' }}
      ></div>
    </div>
  );
};

export default FlamethrowerSimulation;
