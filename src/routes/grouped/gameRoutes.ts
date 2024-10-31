import Game from '../../pages/game/Game/Game';
import FlamethrowerSimulation from '../../pages/game/FlamethrowerSimulation/FlamethrowerSimulation';

export const gameRoutes = [
  { path: '/game', component: Game, requiresAuth: true },
  { path: '/game/flamethrower-simulation', component: FlamethrowerSimulation, },
];
