import Profile from '../../pages/backoffice/Profile/Profile';

export const backofficeRoutes = [
  { path: '/profile', component: Profile, requiresAuth: true },
];