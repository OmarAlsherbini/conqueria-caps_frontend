import AdminDashboard from '../../pages/management/AdminDashboard/AdminDashboard';

export const managementRoutes = [
  { path: '/admin-dashboard', component: AdminDashboard, requiresAuth: true },
];