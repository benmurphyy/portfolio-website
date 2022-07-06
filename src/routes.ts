/**
 * Contains information on all the routes in the app.
 * Each routes key must match the name of the page(folder name) it routes to.
 * The title of a route is the title of the link in the navbar that directs to it.
 */
const routes: {
  [key: string]: {
    title: string;
    path: string;
  };
} = {
  home: {
    title: 'Home',
    path: '/',
  },
  knowledge: {
    title: 'Knowledge',
    path: '/knowledge',
  },
  experience: {
    title: 'Experience',
    path: '/experience',
  },
};

export default routes;
