import Game from '../../pages/game/Game/Game';
import FlamethrowerSimulation from '../../pages/game/FlamethrowerSimulation/FlamethrowerSimulation';
import GeneralizedSimulation from '../../pages/game/GeneralizedSimulation/GeneralizedSimulation';

export const gameRoutes = [
  { path: '/game', component: Game, requiresAuth: true },
  { path: '/game/flamethrower-simulation', component: FlamethrowerSimulation, },
  { path: '/game/generalized-simulation', component: GeneralizedSimulation, }
];
