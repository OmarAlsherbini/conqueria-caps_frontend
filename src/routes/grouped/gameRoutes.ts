import Game from '../../pages/game/Game/Game';

export const gameRoutes = [
  { path: '/game', component: Game, requiresAuth: true },
];