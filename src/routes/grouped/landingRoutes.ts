import Home from '../../pages/landing/Home/Home';
import Login from '../../pages/landing/Login/Login';

export const landingRoutes = [
  { path: '/', component: Home, requiresAuth: false },
  { path: '/login', component: Login, requiresAuth: false },
];