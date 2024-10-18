import { backofficeRoutes } from './grouped/backofficeRoutes';
import { gameRoutes } from './grouped/gameRoutes';
import { landingRoutes } from './grouped/landingRoutes';
import { managementRoutes } from './grouped/managementRoutes';

export const routes = [
  ...landingRoutes,    // No authentication required
  ...gameRoutes,       // Authentication required
  ...backofficeRoutes, // Authentication required
  ...managementRoutes, // Authentication required
];
