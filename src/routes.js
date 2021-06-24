import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Liste = React.lazy(() => import('./views/liste/Liste'));
const About = React.lazy(() => import('./views/about/About'));
const PDF = React.lazy(() => import('./views/dashboard/carte/Carte/PDF'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/liste', name: 'Liste', component: Liste },
  { path: '/about', name: 'About', component: About },
  { path: '/pdf/:id', exact: true, name: 'Document PDF', component: PDF },
];

export default routes;
