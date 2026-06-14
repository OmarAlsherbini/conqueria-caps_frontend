import Game from '../../pages/game/Game/Game';
import FlamethrowerSimulation from '../../pages/game/FlamethrowerSimulation/FlamethrowerSimulation';
import GeneralizedSimulation from '../../pages/game/GeneralizedSimulation/GeneralizedSimulation';
import MultiPlayerGame from '../../pages/game/MultiplayerGame/MultiPlayerGame';

export const gameRoutes = [
  { path: '/game', component: Game, requiresAuth: true },
  { path: '/game/flamethrower-simulation', component: FlamethrowerSimulation, requiresAuth: false, },
  { path: '/game/generalized-simulation', component: GeneralizedSimulation, requiresAuth: false, },
  { path: '/game/play-multiplayer', component: MultiPlayerGame, requiresAuth: false, }
];
