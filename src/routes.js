import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Liste = React.lazy(() => import('./views/liste/Liste'));
const About = React.lazy(() => import('./views/about/About'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/liste', name: 'Liste', component: Liste },
  { path: '/about', name: 'About', component: About },
];

export default routes;
