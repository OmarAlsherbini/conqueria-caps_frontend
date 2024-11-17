import React, { useEffect, useRef, useState } from 'react';
// import { Spritesheet } from '@pixi/spritesheet';
// import { Application } from '@pixi/app';
// import { IRenderer, Texture, BaseTexture, ICanvas } from '@pixi/core';
// import { Ticker } from '@pixi/ticker';
import { Assets } from '@pixi/assets';
// import { Sprite } from '@pixi/sprite';
// import { Graphics } from '@pixi/graphics';
// import { AnimatedSprite } from '@pixi/sprite-animated';
// import { fetchGeneralizedSimulationData } from '../../../services/simulationService';
// import { 
//   SimulationDataGeneralized, 
//   TroopEvent2, 
//   TurretEvent2, 
//   PathData, 
//   HealthBarState, 
//   TroopSprite, 
//   TurretSprite 
// } from '../../../types/simulationTypes';
// import mapData from '../../../assets/maps/map1/map1.json';
import LoadingScreen from '../../../components/common/organisms/LoadingScreen/LoadingScreen';
import MultiplayerGameSettings from '../../../components/common/organisms/MultiplayerGameSettings/MultiplayerGameSettings';

const MultiPlayerGame: React.FC = () => {
  const pixiContainer = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  // const rendererRef = useRef<IRenderer<ICanvas>>();
  // const appRef = useRef<Application>();
  const [isAppInitialized, setIsAppInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingMessage, setLoadingMessage] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);


  // Define the original game dimensions
  const gameWidth = 4000;
  const gameHeight = 2200;

  useEffect(() => {
    // Get the window dimensions
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight - 100; // Adjust as needed

    // Calculate aspect ratios
    const appAspectRatio = gameWidth / gameHeight;
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

    // // Initialize the PixiJS application
    // const app = new Application({
    //   resizeTo: window, // Add this line to make the app resize to the window
    //   backgroundColor: 0x000000,
    //   resolution: window.devicePixelRatio || 1,
    //   autoDensity: true,
    // });

    // // Adjust the stage scaling and position when the window is resized
    // const resize = () => {
    //   const gameAspectRatio = gameWidth / gameHeight;
    //   const windowAspectRatio = window.innerWidth / window.innerHeight;

    //   let scale;
    //   if (windowAspectRatio >= gameAspectRatio) {
    //     scale = window.innerHeight / gameHeight;
    //   } else {
    //     scale = window.innerWidth / gameWidth;
    //   }

    //   app.stage.scale.set(scale, -scale);

    //   const scaledGameHeight = gameHeight * scale;
    //   const verticalOffset = (app.renderer.height - scaledGameHeight) / 2;
    //   app.stage.position.set(0, app.renderer.height - verticalOffset);
    // };

    // // Call resize initially and on window resize
    // resize();
    // window.addEventListener('resize', resize);

    // // Flip the y-axis
    // app.stage.scale.y = -1;
    // // Adjust the stage position to account for the flip
    // app.stage.position.y = app.renderer.height;

    // // Calculate scale factors to fit the game into the app's dimensions
    // const scaleX = app.screen.width / gameWidth;
    // const scaleY = app.screen.height / gameHeight;

    // // Use the smaller scale to maintain aspect ratio
    // const scale = Math.min(scaleX, scaleY);

    // // Scale the stage
    // app.stage.scale.set(scale, -scale);

    // // Adjust the stage position
    // app.stage.position.set(0, app.screen.height);

    // appRef.current = app;
    // rendererRef.current = app.renderer;

    // if (pixiContainer.current) {
    //   pixiContainer.current.appendChild(app.view as HTMLCanvasElement);
    // }

    // // Indicate that the app has been initialized
    setIsAppInitialized(true);

    // // Clean up on unmount
    // return () => {
    //   app.destroy(true, true);
    // };
  }, []);

  const loadAssets = async (
    sound: any,
  ) => {
  //   try {
      // Update loading message
      setLoadingProgress(0);
      setLoadingMessage('Loading assets...');
  //     setLoadingMessage('Fetching simulation data...');
      
  //     // Fetch simulation data
  //     const simulationData = await fetchGeneralizedSimulationData();

  //     // Update progress
  //     setLoadingProgress(25);
  //     setLoadingMessage('Processing simulation data...');

  //     // Extract troop types and turret types from simulationData
  //     const troopTypes = simulationData.troop_info;
  //     const turretInfos = simulationData.turret_info;

  //     // Collect asset paths
      const assetsToLoad: { [key: string]: string } = {
        // Common assets
        // backgroundImage: '/assets/img/map1.png',
        // city: '/assets/img/city.png',
        // capital: '/assets/img/capital.png',
        // outpost: '/assets/img/outpost.png',
        // // Speedup icon
        // speedupIcon: '/assets/img/speedup1.png',
        // Background music
        // backgroundMusic: '/assets/sounds/battlefield.mp3',
        backgroundMusic: '/assets/sounds/background_music_battle_tactics.mp3',
      };

  //     // Load troop sprites and sounds
  //     for (const troopType of troopTypes) {
  //       // Assuming troopType has properties like 'id' and 'in_game_picture'
  //       assetsToLoad[`troop_${troopType.id}`] = `/assets/img/attack_units/${troopType.in_game_picture}`;
  //       // Load troop-specific sounds (death, reach target)
  //       // assetsToLoad[`troop_death_sound_${troopType.id}`] = `/assets/sounds/troops/${troopType.id}/death.mp3`;
  //       // assetsToLoad[`troop_reach_target_sound_${troopType.id}`] = `/assets/sounds/troops/${troopType.id}/reach_target.mp3`;
  //       assetsToLoad[`troop_death_sound_${troopType.id}`] = `/assets/sounds/death${troopType.id}.mp3`;
  //       assetsToLoad[`troop_reach_target_sound_${troopType.id}`] = `/assets/sounds/troop_victory.mp3`;
  //     }

  //     // Load turret sprites and sounds
  //     for (const turretInfo of turretInfos) {
  //       const defensive_building_id = turretInfo.defensive_building_id;
  //       // Assuming we have images for each turret type
  //       assetsToLoad[`turret_${defensive_building_id}`] = `/assets/img/defensive_buildings/turret${defensive_building_id}.png`;
  //       // Load turret firing sound
  //       assetsToLoad[`turret_fire_sound_${defensive_building_id}`] = `/assets/sounds/fire${defensive_building_id}.mp3`;
  //       // Load turret damaged & destroyed sound
  //       assetsToLoad[`turret_damaged_sound_${defensive_building_id}`] = `/assets/sounds/damaged.mp3`;
  //       assetsToLoad[`turret_destroyed_sound_${defensive_building_id}`] = `/assets/sounds/destroyed.flac`;
  //       // assetsToLoad[`turret_destroyed_sound_${defensive_building_id}`] = `/assets/sounds/defensive_buildings/${defensive_building_id}/destroyed.mp3`;
  //       // If flamethrower (defensive_building_id == 2), load firing animation
  //       if (defensive_building_id === 2) {
  //         // assetsToLoad[`flameSpritesheetJson_${defensive_building_id}`] = `/assets/animations/defensive_buildings/${defensive_building_id}/flame_spritesheet.json`;
  //         // assetsToLoad[`flameSpritesheetImage_${defensive_building_id}`] = `/assets/animations/defensive_buildings/${defensive_building_id}/flame_spritesheet.png`;
  //         assetsToLoad[`flameSpritesheetJson_${defensive_building_id}`] = `/assets/animations/flame_spiresheet.json`;
  //         assetsToLoad[`flameSpritesheetImage_${defensive_building_id}`] = `/assets/animations/flame_spiresheet.png`;
  //       }
  //     }
  //     assetsToLoad['exp1SpritesheetJson'] = '/assets/animations/exp1.json';
  //     assetsToLoad['exp1SpritesheetImage'] = '/assets/animations/exp1.png';
  //     assetsToLoad['exp2SpritesheetJson'] = '/assets/animations/exp2.json';
  //     assetsToLoad['exp2SpritesheetImage'] = '/assets/animations/exp2.png';

  //     // Load path data for all paths used in the simulation
  //     // Collect path IDs from the simulation data

  //     const pathIds = [1, 4, 6, 8, 9];
  //     // const pathIds = new Set<number>();
  //     // for (const troopEvent of simulationData.troop_events) {
  //     //   pathIds.add(troopEvent.path_id);
  //     // }
  //     const pathsData: { [key: number]: PathData } = {};
  //     for (const pathId of pathIds) {
  //       const pathDataModule = await import(/* @vite-ignore */ `../../../assets/maps/map1/pathsData/path${pathId}Data`);
  //       pathsData[pathId] = pathDataModule.default; // Assuming default export
  //     }


      // Define the progress handler
      const progressHandler = (progress: number) => {
        const percentage = Math.round(progress * 100);
        setLoadingProgress(percentage);
        setLoadingMessage(`Loading assets... ${percentage}%`);
      };

      // Load all assets
      await Assets.load(Object.values(assetsToLoad), progressHandler);

  //     // Load sounds
  //     for (const key in assetsToLoad) {
  //       if (key.startsWith('troop_death_sound_') || key.startsWith('troop_reach_target_sound_') || key.startsWith('turret_fire_sound_') || key.startsWith('turret_damaged_sound_') || key.startsWith('turret_destroyed_sound_')) {
  //         if (!sound.exists(key)) {
  //           sound.add(key, assetsToLoad[key]);
  //         }
  //       }
  //     }

  //     // Update progress to 100%
      setLoadingProgress(100);
      setLoadingMessage('Assets loaded. Let\'s Play!...');
      
  //     // Intentional delay before starting simulation
      const delayDuration = 1500; // Milliseconds
      await new Promise(resolve => setTimeout(resolve, delayDuration));
      

      setLoadingProgress(100);
      setLoadingMessage('Loading...');
      
      // Start fade-in transition after intentional delay
      const fadeInDelay = 750; // Milliseconds
      setTimeout(() => {
        setFadeIn(true);
      }, fadeInDelay);
      
      setIsLoaded(true); // Loading is complete

      // Play background music
      if (!sound.exists('backgroundMusic')) {
        sound.add('backgroundMusic', assetsToLoad['backgroundMusic']);
      }
      sound.play('backgroundMusic', { loop: true, volume: 0.3 });

      // Run the simulation
      // await runGameEngine(simulationData, assetsToLoad, sound, gameWidth, gameHeight, pathsData);
      await runGameEngine();
      
  //   } catch (error) {
  //     console.error('Error loading assets or fetching data:', error);
  //   }
  };

  const soundRef = useRef<any>(null);
  const initializeMultiplayerGame = async () => {
    // if (!isAppInitialized) {
    //   console.error('App not initialized yet');
    //   return;
    // }

    // Request full screen
    if (containerRef.current) {
      const elem = containerRef.current;
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if ((elem as any).webkitRequestFullscreen) {
        (elem as any).webkitRequestFullscreen();
      } else if ((elem as any).msRequestFullscreen) {
        (elem as any).msRequestFullscreen();
      }
    }

    setIsLoading(true);

    // Dynamically import @pixi/sound
    const { sound } = await import('@pixi/sound');
    soundRef.current = sound;
    // Load assets and start simulation
    await loadAssets(sound);
  };

  const runGameEngine = async (
    // data: SimulationDataGeneralized,
    // assets: any,
    // sound: any,
    // gameWidth: number,
    // gameHeight: number,
    // pathsData: { [key: number]: PathData },
  ) => {
  //   const renderer = rendererRef.current;
  //   const app = appRef.current;
  //   const stage = app?.stage;

  //   if (!renderer || !stage) {
  //     console.error('Renderer or stage not initialized.');
  //     return;
  //   }



  //   // Variables for timeScale modes
  //   const isLinearIncreaseMode = true; // Set to false for mode (b)

  //   // Common variables
  //   const initialTimeScale = 0.5;
  //   // const initialTimeScale = 0.1;
  //   const maxTimeScale = 2.5;
  //   // const maxTimeScale = 0.5;
  //   const troop_speed_modifier = 25
  //   // const turret_range_modifier = 100

  //   // Variables for mode (a)
  //   // const delayDuration = 0.55; // Seconds to delay before starting the linear increase
  //   const delayDuration = 555; // Seconds to delay before starting the linear increase
  //   const accelerationDuration = 2; // Seconds over which to linearly increase to maxTimeScale

  //   // Variables for mode (b)
  //   const timeScale1 = 0.1; // Initial timeScale
  //   const timeScale2 = 1; // Second timeScale
  //   const period1 = 5; // Seconds before first speedup
  //   const period2 = 3; // Seconds after period1 before second speedup

  //   // Speedup icon variables
  //   const speedup_icon_period = 0.05; // Seconds the icon remains visible
  //   const speedup_icon_disappear_time = 0.02; // Seconds over which the icon disappears

  //   // Create the background sprite
  //   const backgroundTexture = Assets.get(assets.backgroundImage) as Texture;
  //   const backgroundSprite = new Sprite(backgroundTexture);

  //   backgroundSprite.position.set(0, 0);
  //   backgroundSprite.width = gameWidth;
  //   backgroundSprite.height = gameHeight;
  //   backgroundSprite.anchor.set(0);

  //   stage.addChildAt(backgroundSprite, 0);

  //   // Create city sprites
  //   const citiesData = mapData.continents["1"].continent_territories;
  //   const cityTexture = Assets.get(assets.city) as Texture;
  //   const capitalTexture = Assets.get(assets.capital) as Texture;

  //   const citySprites: { [key: number]: Sprite } = {};
  //   for (const [cityIdStr, cityInfo] of Object.entries(citiesData)) {
  //     const cityId = parseInt(cityIdStr);
  //     // Get city position from map data
  //     const cityPosition = getCityPosition(cityId);
  //     if (!cityPosition) continue;
  //     const citySprite = new Sprite(cityId === 2 ? capitalTexture : cityTexture);
  //     citySprite.anchor.set(0.5);
  //     citySprite.position.set(cityPosition.x, cityPosition.y);
  //     citySprite.rotation = Math.PI;
  //     stage.addChild(citySprite);
  //     const citySize = cityId === 2 ? 125 : 100;
  //     citySprite.width = citySize * 1.4;
  //     citySprite.height = citySize * 1.4;
  //     citySprite.visible = true;
  //     citySprites[cityId] = citySprite;
  //   }


  //   // Create outpost sprites
  //   const outpostTexture = Assets.get(assets.outpost) as Texture;
  //   const outpostSprites: { [key: number]: Sprite } = {};
  //   for (const [outpostIdStr, outpostInfo] of Object.entries(mapData.outposts)) {
  //     const outpostId = parseInt(outpostIdStr);
  //     const outpostSprite = new Sprite(outpostTexture);
  //     outpostSprite.anchor.set(0.5);
  //     outpostSprite.position.set(outpostInfo.location[0], outpostInfo.location[1]);
  //     outpostSprite.rotation = Math.PI;
  //     stage.addChild(outpostSprite);
  //     const outpostSize = 125;
  //     outpostSprite.width = outpostSize * 1.4;
  //     outpostSprite.height = outpostSize * 1.4;
  //     outpostSprite.visible = true;
  //     outpostSprites[outpostId] = outpostSprite;
  //   }


  //   // Create turret sprites
  //   const turretSprites: { [key: number]: TurretSprite } = {};
  //   const flamethrowerFlameSpritesheets: { [key: number]: Spritesheet } = {};
  //   const damageSpritesheets: { [key: number]: Spritesheet } = {};
  //   const destroyedSpritesheets: { [key: number]: Spritesheet } = {};
  //   for (const turretInfo of data.turret_info) {
  //     const turretTexture = Assets.get(assets[`turret_${turretInfo.defensive_building_id}`]) as Texture;
  //     const turretSprite = new Sprite(turretTexture) as TurretSprite;
  //     turretSprite.anchor.set(0.5);
  //     turretSprite.position.set(turretInfo.position.x, turretInfo.position.y);
  //     stage.addChild(turretSprite);
  //     turretSprite.turret_id = turretInfo.id;
  //     turretSprite.defensive_building_id = turretInfo.defensive_building_id;
  //     const turretSize = 120;
  //     turretSprite.width = turretSize * 1.4;
  //     turretSprite.height = turretSize * 1.4;

  //     // Get initial HP and max HP from buildings_data.defensive_buildings
  //     const turretIdStr = turretInfo.id.toString();
  //     const initialTurretData = data.buildings_data.defensive_buildings[turretIdStr];

  //     if (initialTurretData) {
  //       turretSprite.hp = parseFloat(initialTurretData.hp);
  //       turretSprite.max_hp = parseFloat(initialTurretData.max_hp);
  //     } else {
  //       console.error('No initial data found for turret ${turretInfo.id}');
  //       return;
  //     }
  //     const healthBar = new Graphics();
  //     healthBar.visible = false;
  //     updateHealthBar(turretSprite, healthBar); // Function to draw the health bar
  //     turretSprite.healthBar = healthBar;
  //     turretSprite.addChild(healthBar);
  //     turretSprite.healthBar.position = { x: 0, y: -200};
  //     turretSprites[turretInfo.id] = turretSprite;

  //     // Draw turret range circle
  //     const rangeGraphics = new Graphics();
  //     const range = turretInfo.stats.range;
  //     rangeGraphics.lineStyle(5, 0xff0000, 1);
  //     drawDashedCircle(rangeGraphics, turretInfo.position.x, turretInfo.position.y, range, 20, 10);
  //     stage.addChild(rangeGraphics);
  //     turretSprite.rangeCircle = rangeGraphics;

  //     // Pre-parse flamethrower spritesheet if applicable
  //     if (turretInfo.defensive_building_id === 2) {
  //       const flameSpritesheetJson = Assets.get(assets[`flameSpritesheetJson_${turretInfo.defensive_building_id}`]);
  //       const flameSpritesheetTexture = Assets.get(assets[`flameSpritesheetImage_${turretInfo.defensive_building_id}`]) as BaseTexture;

  //       if (flameSpritesheetJson && flameSpritesheetTexture) {
  //         const spriteSheet = new Spritesheet(flameSpritesheetTexture, flameSpritesheetJson.data);
  //         spriteSheet.parse().then(() => {
  //           flamethrowerFlameSpritesheets[turretInfo.id] = spriteSheet;
  //         });
  //       }
  //     }

  //     // Parsing explosion 1 spritesheets
  //     const exp1SpritesheetData = Assets.get(assets.exp1SpritesheetJson);
  //     const exp1SpritesheetTexture = Assets.get(assets.exp1SpritesheetImage) as BaseTexture;

  //     if (exp1SpritesheetData && exp1SpritesheetTexture) {
  //       const exp1Spritesheet = new Spritesheet(exp1SpritesheetTexture, exp1SpritesheetData.data);
  //       await exp1Spritesheet.parse().then(() => {
  //         damageSpritesheets[turretInfo.id] = exp1Spritesheet;
  //       });
  //     }

  //     // Parsing explosion 2 spritesheets
  //     const exp2SpritesheetData = Assets.get(assets.exp2SpritesheetJson);
  //     const exp2SpritesheetTexture = Assets.get(assets.exp2SpritesheetImage) as BaseTexture;

  //     if (exp2SpritesheetData && exp2SpritesheetTexture) {
  //       const exp2Spritesheet = new Spritesheet(exp2SpritesheetTexture, exp2SpritesheetData.data);
  //       await exp2Spritesheet.parse().then(() => {
  //         destroyedSpritesheets[turretInfo.id] = exp2Spritesheet;
  //       });
  //     }
  //   }

  //   // Create troop sprites
  //   const troopSprites: { [key: number]: TroopSprite } = {};
  //   const troopTextures: { [key: number]: Texture } = {};
  //   for (const troopType of data.troop_info) {
  //     const troopTexture = Assets.get(assets[`troop_${troopType.id}`]) as Texture;
  //     troopTextures[troopType.id] = troopTexture;
  //   }

  //   // Event queues
  //   const troopEventQueue = [...data.troop_events];
  //   const turretEventQueue = [...data.turret_events];

  //   let elapsedTime = 0;
  //   let timeScale = initialTimeScale;
  //   let previousTimeScale = initialTimeScale;

  //   // Variables for speedup icon
  //   let speedupIconVisible = false;
  //   let speedupIconStartTime = 0;
  //   let speedupIconSprite: Sprite;

  //   // Create the speedup icon sprite
  //   const speedupIconTexture = Assets.get(assets.speedupIcon) as Texture;
  //   speedupIconSprite = new Sprite(speedupIconTexture);
  //   speedupIconSprite.anchor.set(0.5);
  //   speedupIconSprite.position.set(gameWidth / 2, gameHeight / 2);
  //   speedupIconSprite.visible = false;
  //   stage.addChild(speedupIconSprite);

  //   // Variables to track troops that have started
  //   const activeTroops: { [key: number]: TroopSprite } = {};

  //   // Variables to control firing sound cooldown
  //   const turretLastFireSoundTime: { [turretId: number]: number } = {};
  //   const cooldown = 1000; // Cooldown duration in milliseconds (adjust as needed)

  //   // Start the ticker
  //   Ticker.shared.add(() => {
  //     const deltaSeconds = app.ticker.deltaMS / 1000; // Corrected calculation
  //     elapsedTime += deltaSeconds * timeScale;

  //     let newTimeScale = timeScale; // Initialize newTimeScale

  //     // timeScale calculation
  //     if (isLinearIncreaseMode) {
  //       // Mode (a)
  //       if (elapsedTime < delayDuration) {
  //         newTimeScale = initialTimeScale;
  //       } else if (elapsedTime >= delayDuration && elapsedTime < delayDuration + accelerationDuration) {
  //         const timeSinceStart = elapsedTime - delayDuration;
  //         newTimeScale =
  //           initialTimeScale +
  //           (maxTimeScale - initialTimeScale) * (timeSinceStart / accelerationDuration);
  //       } else {
  //         newTimeScale = maxTimeScale;
  //       }
  //     } else {
  //       // Mode (b)
  //       if (elapsedTime < period1) {
  //         newTimeScale = timeScale1;
  //       } else if (elapsedTime >= period1 && elapsedTime < period1 + period2) {
  //         newTimeScale = timeScale2;
  //       } else {
  //         newTimeScale = maxTimeScale;
  //       }
  //     }

  //     // Check if timeScale increased
  //     if (newTimeScale > previousTimeScale) {
  //       // TimeScale increased, show speedup icon
  //       if (speedupIconVisible === false && speedupIconStartTime === 0) {
  //         speedupIconStartTime = elapsedTime;
  //         speedupIconVisible = true;
  //         speedupIconSprite.alpha = 1;
  //         speedupIconSprite.visible = true;
  //       }
  //     }

  //     timeScale = newTimeScale;
  //     previousTimeScale = timeScale;

  //     // Handle speedup icon fade-out
  //     if (speedupIconVisible) {
  //       const timeSinceIconStart = elapsedTime - speedupIconStartTime;
  //       if (timeSinceIconStart >= speedup_icon_period + speedup_icon_disappear_time) {
  //         // Hide the icon
  //         speedupIconVisible = false;
  //         speedupIconSprite.visible = false;
  //       } else if (timeSinceIconStart >= speedup_icon_period) {
  //         // Start fading out
  //         const fadeOutTime = timeSinceIconStart - speedup_icon_period;
  //         const alpha = 1 - fadeOutTime / speedup_icon_disappear_time;
  //         speedupIconSprite.alpha = alpha;
  //       }
  //     }

  //     // Process troop events
  //     while (troopEventQueue.length && troopEventQueue[0].timestamp <= elapsedTime) {
  //       const event = troopEventQueue.shift() as TroopEvent2;
  //       const troopId = event.troop_id;
  //       if (event.event_type === 'start') {
  //         // Create a new troop sprite
  //         const troopTexture = troopTextures[event.attack_unit_id];
  //         const troopSprite = new Sprite(troopTexture) as TroopSprite;
  //         troopSprite.anchor.set(0.5);
  //         troopSprite.position.set(-100, -100);
  //         troopSprite.visible = true;
  //         troopSprite.start_time = event.timestamp;
  //         troopSprite.attack_unit_id = event.attack_unit_id;
  //         troopSprite.path_id = event.path_id;
  //         troopSprite.t_pos = 0;
  //         // Set troop size based on type if needed
  //         const troopSize = 70;
  //         if (troopSprite.attack_unit_id == 1)
  //         {
  //           troopSprite.width = troopSize * 1.2;
  //           troopSprite.height = troopSize * 1.2;
  //         }
  //         else 
  //         {
  //           troopSprite.width = troopSize * 2;
  //           troopSprite.height = troopSize * 2;
  //         }
  //         stage.addChild(troopSprite);

  //         // Initialize health
  //         const troopType = data.troop_info.find(t => t.id === troopSprite.attack_unit_id);
  //         troopSprite.hp = troopType ? troopType.health_points : 100; // Default to 100 if not found
  //         troopSprite.max_hp = troopType ? troopType.health_points : 100;

  //         // Create health bar
  //         const healthBar = new Graphics();
  //         healthBar.visible = false;
  //         updateHealthBar(troopSprite, healthBar);
  //         troopSprite.healthBar = healthBar;
  //         troopSprite.healthBar.position = { x: 0, y: -200};
  //         troopSprite.addChild(healthBar); 


  //         troopSprites[troopId] = troopSprite;
  //         activeTroops[troopId] = troopSprite;
  //       } else if (event.event_type === 'damage') {
          
  //         // Update troop health
  //         const troopSprite = troopSprites[troopId];

  //         troopSprite.hp = event.data.remaining_hp; // Update current health

  //         // Update the health bar
  //         if (troopSprite.healthBar) {
  //           updateHealthBar(troopSprite, troopSprite.healthBar);
  //         }

  //         // Show the health bar if it's not already visible
  //         if (troopSprite.healthBar) {
  //           troopSprite.healthBar.visible = true;
  //         }

  //       } else if (event.event_type === 'death') {
  //         // Remove or hide the troop sprite
  //         const troopSprite = troopSprites[troopId];
  //         if (troopSprite) {
  //           // Hide or remove the health bar
  //           if (troopSprite.healthBar) {
  //             troopSprite.healthBar.visible = false;
  //             troopSprite.removeChild(troopSprite.healthBar);
  //             troopSprite.healthBar.destroy();
  //             troopSprite.healthBar = undefined;
  //           }
  //           troopSprite.visible = false;
  //           delete activeTroops[troopId];
  //           // Play death sound
  //           sound.play(`troop_death_sound_${troopSprite.attack_unit_id}`, { volume: 0.7 });
  //         }
  //       } else if (event.event_type === 'reach_target') {
  //         // Troop reached the target
  //         const troopSprite = troopSprites[troopId];
  //         if (troopSprite) {
  //           // Hide or remove the health bar
  //           if (troopSprite.healthBar) {
  //             troopSprite.healthBar.visible = false;
  //             troopSprite.removeChild(troopSprite.healthBar);
  //             troopSprite.healthBar.destroy();
  //             troopSprite.healthBar = undefined;
  //           }
  //           troopSprite.visible = false;
  //           delete activeTroops[troopId];
  //           // Play reach target sound
  //           // TODO: Only play the sound when reaching the city.
  //           sound.play(`troop_reach_target_sound_${troopSprite.attack_unit_id}`, { volume: 0.7 });
  //         }
  //       }
  //     }

  //     // Process turret events
  //     while (turretEventQueue.length && turretEventQueue[0].timestamp <= elapsedTime) {
  //       const event = turretEventQueue.shift() as TurretEvent2;
  //       const turretSprite = turretSprites[event.turret_id];
  //       if (event.event_type === 'rotate' && event.angle !== undefined) {
  //         // Rotate turret to angle
  //         if (turretSprite) {
  //           turretSprite.rotation = (event.angle * Math.PI) / 180;
  //         }
  //         // Adjust health bar rotation and position
  //         if (turretSprite.healthBar) {
  //           turretSprite.healthBar.rotation = -turretSprite.rotation;
  //           updateHealthBarPosition(turretSprite, turretSprite.healthBar);
  //         }
  //       } else if (event.event_type === 'fire') {
  //         if (turretSprite) {
  //           // Play turret firing sound with sound effect cooldown
  //           const currentTime = Date.now(); // Get current real time in milliseconds
  //           const turretTypeId = turretSprite.defensive_building_id!;
            
  //           let turretSoundVolume;
  //           if (turretTypeId == 1)
  //             turretSoundVolume = 0.2;
  //           else if (turretTypeId == 3)
  //             turretSoundVolume = 0.7
  //           else
  //             turretSoundVolume = 1

  //           if (
  //             !turretLastFireSoundTime[turretTypeId] ||
  //             currentTime - turretLastFireSoundTime[turretTypeId] >= cooldown
  //           ) {
  //             sound.play(`turret_fire_sound_${turretSprite.defensive_building_id}`, {volume: turretSoundVolume});
  //             turretLastFireSoundTime[turretTypeId] = currentTime;
  //           }

  //           // If flamethrower (defensive_building_id == 2), play firing animation
  //           if (turretSprite.defensive_building_id === 2) {
  //             // Handle flamethrower firing animation
  //             const spriteSheet = flamethrowerFlameSpritesheets[event.turret_id];
  //             if (spriteSheet) {
  //               const flameTextures = spriteSheet.animations['flame']; // Adjust as needed
  //               // console.log("flameTextures: ", flameTextures);
  //               if (flameTextures) {
  //                 const flameSprite = new AnimatedSprite(flameTextures);
  //                 flameSprite.anchor.set(0.5);
  //                 flameSprite.visible = true;
  //                 stage.addChild(flameSprite);

  //                 // Calculate the flame dimensions
  //                 const flameLength = 200; // Adjust as needed
  //                 const frameAspectRatio = flameSprite.height / flameSprite.width;
  //                 const flameWidth = flameLength * frameAspectRatio;

  //                 flameSprite.width = flameLength;
  //                 flameSprite.height = flameWidth;

  //                 // Position the flame sprite
  //                 const flameOffset = 150; // Adjust as needed
  //                 const angleInRadians = turretSprite.rotation;
  //                 flameSprite.position.x = turretSprite.position.x + flameOffset * Math.cos(angleInRadians);
  //                 flameSprite.position.y = turretSprite.position.y + flameOffset * Math.sin(angleInRadians);
  //                 flameSprite.rotation = angleInRadians;

  //                 // Play the flame animation
  //                 flameSprite.gotoAndPlay(0);
  //                 flameSprite.loop = false;
  //                 flameSprite.onComplete = () => {
  //                   flameSprite.visible = false;
  //                   stage.removeChild(flameSprite);
  //                 };
  //               }
  //             }
  //           }
  //         }
  //       } else if (event.event_type === 'damage') {
  //         const turretId = event.turret_id;
  //         const turretSprite = turretSprites[turretId];

  //         // Play turret damaged sound
  //         sound.play(`turret_damaged_sound_${turretSprite.defensive_building_id}`, {volume: 1});

  //         // Update turret health
  //         turretSprite.hp = event.data.remaining_hp; // Update current health

  //         // Update the health bar
  //         if (turretSprite.healthBar) {
  //           updateHealthBar(turretSprite, turretSprite.healthBar);
  //         }

  //         // Show the health bar if it's not already visible
  //         if (turretSprite.healthBar) {
  //           turretSprite.healthBar.visible = true;
  //         }

  //         // Handle turret damage animation
  //         const spriteSheet = damageSpritesheets[event.turret_id];
  //         if (spriteSheet) {
  //           const damageTextures = spriteSheet.animations['exp'];
  //           // console.log("damageTextures: ", damageTextures);
  //           if (damageTextures) {
  //             const damageSprite = new AnimatedSprite(damageTextures);
  //             damageSprite.anchor.set(0.5);
  //             damageSprite.position.set(turretSprite.position.x, turretSprite.position.y);
  //             damageSprite.rotation = turretSprite.rotation;
  //             damageSprite.visible = true;
  //             stage.addChild(damageSprite);
  
  //             // Adjust the size if needed
  //             const damageSize = 100;
  //             damageSprite.width = damageSize;
  //             damageSprite.height = damageSize;
  
  //             // Play the damage animation
  //             damageSprite.gotoAndPlay(0);
  //             damageSprite.loop = false;
  //             damageSprite.onComplete = () => {
  //               damageSprite.visible = false;
  //               stage.removeChild(damageSprite);
  //             };
  //           }
  //         }
          
  //       } else if (event.event_type === 'destroyed') {
  //         // Remove or hide the turret sprite
  //         if (turretSprite) {
  //           // Play turret destroyed sound
  //           sound.play(`turret_destroyed_sound_${turretSprite.defensive_building_id}`, {volume: 1});

  //           // Handle turret damage animation
  //           const spriteSheet = destroyedSpritesheets[event.turret_id];
  //           if (spriteSheet) {
  //             const destroyedTextures = spriteSheet.animations['exp'];
  //             // console.log("destroyedTextures: ", destroyedTextures);
  //             if (destroyedTextures) {
  //               const destroyedSprite = new AnimatedSprite(destroyedTextures);
  //               destroyedSprite.anchor.set(0.5);
  //               destroyedSprite.position.set(turretSprite.position.x, turretSprite.position.y);
  //               destroyedSprite.rotation = turretSprite.rotation;
  //               destroyedSprite.visible = true;
  //               stage.addChild(destroyedSprite);

  //               // Adjust the size if needed
  //               const destroyedSize = 100;
  //               destroyedSprite.width = destroyedSize;
  //               destroyedSprite.height = destroyedSize;

  //               // Play the destroyed animation
  //               destroyedSprite.gotoAndPlay(0);
  //               destroyedSprite.loop = false;
  //               destroyedSprite.onComplete = () => {
  //                 destroyedSprite.visible = false;
  //                 stage.removeChild(destroyedSprite);
  //               };
  //             }
  //           }            

  //           // Hide or remove the health bar
  //           if (turretSprite.healthBar) {
  //             turretSprite.healthBar.visible = false;
  //             turretSprite.removeChild(turretSprite.healthBar);
  //             turretSprite.healthBar.destroy();
  //             turretSprite.healthBar = undefined;
  //           }

  //           // Remove the range circle
  //           if (turretSprite.rangeCircle) {
  //             stage.removeChild(turretSprite.rangeCircle);
  //             turretSprite.rangeCircle.destroy();
  //             turretSprite.rangeCircle = undefined;
  //           }

  //           turretSprite.visible = false;
  //         }
  //       }
  //     }

  //     // Update troop positions
  //     for (const troopIdStr in activeTroops) {
  //       const troopId = parseInt(troopIdStr);
  //       const troopSprite = activeTroops[troopId];
  //       if (troopSprite && troopSprite.start_time !== undefined) {
  //         // Get troop speed from troop_info
  //         const troopType = data.troop_info.find(t => t.id === troopSprite.attack_unit_id);
  //         const troopSpeed = troopType ? troopType.speed*troop_speed_modifier : 1;
  //         const pathId = troopSprite.path_id!;
  //         const pathData = pathsData[pathId];
  //         const pathPoints = pathData.points;
  //         const totalPathPoints = pathPoints.length;
  //         const pathLength = pathData.length;

  //         // Update t_pos
  //         const t_pos = ((elapsedTime - troopSprite.start_time) * troopSpeed) / pathLength;
  //         troopSprite.t_pos = t_pos;

  //         const index = Math.min(Math.floor(t_pos * totalPathPoints), totalPathPoints - 1);
  //         const nextIndex = Math.min(index + 1, totalPathPoints - 1);
  //         const localT = t_pos * totalPathPoints - index; // Fraction between current and next point

  //         const currentPoint = pathPoints[index];
  //         const nextPoint = pathPoints[nextIndex];

  //         // Interpolate positions and angles for smooth movement
  //         const x = currentPoint.x + (nextPoint.x - currentPoint.x) * localT;
  //         const y = currentPoint.y + (nextPoint.y - currentPoint.y) * localT;
  //         const angle = currentPoint.angle + (nextPoint.angle - currentPoint.angle) * localT;

  //         troopSprite.position.set(x, y);
  //         troopSprite.rotation = (angle * Math.PI) / 180;
  //         // Adjust health bar rotation and position
  //         if (troopSprite.healthBar) {
  //           troopSprite.healthBar.rotation = -troopSprite.rotation;
  //           updateHealthBarPosition(troopSprite, troopSprite.healthBar);
  //         }
  //       }
  //     }
      

  //     // Render the stage
  //     app.renderer.render(stage);
  //   });

  //   // Function to draw dashed circle
  //   function drawDashedCircle(
  //     graphics: Graphics,
  //     x: number,
  //     y: number,
  //     radius: number,
  //     dashLength: number,
  //     gapLength: number
  //   ) {
  //     const circumference = 2 * Math.PI * radius;
  //     const dashCount = Math.floor(circumference / (dashLength + gapLength));
  //     const angleStep = (2 * Math.PI) / dashCount;
  //     for (let i = 0; i < dashCount; i++) {
  //       const startAngle = i * angleStep;
  //       const endAngle = startAngle + (dashLength / circumference) * 2 * Math.PI;
  //       graphics.moveTo(
  //         x + radius * Math.cos(startAngle),
  //         y + radius * Math.sin(startAngle)
  //       );
  //       graphics.arc(x, y, radius, startAngle, endAngle);
  //     }
  //   }

  // };

  // function updateHealthBarPosition(sprite: Sprite, healthBar: Graphics) {
  //   const offset = 200;
  //   const rotation = sprite.rotation;
  //   healthBar.position.x = offset * Math.sin(rotation);
  //   healthBar.position.y = offset * Math.cos(rotation);
  // }

  // function updateHealthBar(sprite: Sprite & { hp?: number; max_hp?: number }, healthBar: Graphics) {
  //   const maxWidth = 400; // Width of the health bar
  //   const height = 50;    // Height of the health bar
  //   const border = 4;    // Border thickness
  
  //   // Clear previous graphics
  //   healthBar.clear();
  
  //   // Background (red bar)
  //   healthBar.beginFill(0xff0000);
  //   healthBar.drawRect(-maxWidth / 2, -sprite.height / 2 - 10, maxWidth, height);
  //   healthBar.endFill();
  
  //   // Calculate health percentage
  //   const hp = sprite.hp ?? 0;
  //   const maxHp = sprite.max_hp ?? 1;
  //   const healthPercentage = Math.max(0, Math.min(1, hp / maxHp));
  
  //   // Foreground (green bar)
  //   healthBar.beginFill(0x00ff00);
  //   healthBar.drawRect(-maxWidth / 2, -sprite.height / 2 - 10, maxWidth * healthPercentage, height);
  //   healthBar.endFill();
  
  //   // Outline
  //   healthBar.lineStyle(border, 0x000000);
  //   healthBar.drawRect(-maxWidth / 2, -sprite.height / 2 - 10, maxWidth, height);
  //   healthBar.endFill();
  // }  

  // const getCityPosition = (cityId: number): { x: number; y: number } | null => {
  //   // Get city position from map data
  //   for (const continent of Object.values(mapData.continents)) {
  //     const cityIdStr = cityId.toString();
  //     const territory = continent.continent_territories[cityIdStr as keyof typeof continent.continent_territories];
  //     if (territory && territory.location) {
  //       return { x: territory.location[0], y: territory.location[1] };
  //     }
  //   }
  //   return null;
  };

  return (
    <div
      className="flex flex-col items-start"
      style={{ position: 'relative', width: '100%', height: '100%' }}
    >
      {!isLoading && (
        <button
          onClick={initializeMultiplayerGame}
          disabled={!isAppInitialized}
          className="mb-4 ml-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Play Multiplayer
        </button>
      )}
      <div ref={containerRef} className="flex flex-col items-start" style={{ position: 'relative', width: '100%', height: '100%' }}>
        <div
          className={`w-full h-full flex-grow ${fadeIn ? 'fade-in' : ''}`}
          style={{ overflow: 'hidden', opacity: isLoaded ? 1 : 0 }}
        >
          <MultiplayerGameSettings />
        </div>
        {/* <div
          ref={pixiContainer}
          className={`pixi-container w-full h-full flex-grow ${fadeIn ? 'fade-in' : ''}`}
          style={{ overflow: 'hidden', opacity: isLoaded ? 1 : 0 }}
        ></div> */}
        {isLoading && !fadeIn && (
          <LoadingScreen progress={loadingProgress} message={loadingMessage} />
        )}
      </div>
    </div>
  );
};

export default MultiPlayerGame;
