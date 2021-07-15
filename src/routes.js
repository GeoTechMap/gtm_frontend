import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
// const Liste = React.lazy(() => import('./views/liste/Liste'));
const About = React.lazy(() => import('./views/about/About'));
const Legende = React.lazy(() => import('./views/legende/Legende'));
const PDF = React.lazy(() => import('./views/dashboard/carte/Carte/PDF'));
const Essais = React.lazy(() => import('./views/liste/Essais'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/liste', name: 'Liste', component: Essais },
  { path: '/legende', name: 'Legende', component: Legende },
  { path: '/about', name: 'About', component: About },
  { path: '/pdf/:id', exact: true, name: 'Document PDF', component: PDF },
];

export default routes;
