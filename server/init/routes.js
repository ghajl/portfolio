import getProjectsData from '../controllers/portfolio';

export default (app) => {
  app.all('/', (req, res) => {
    res.redirect(302, '/portfolio');
  });

  app.get('/projectsData', getProjectsData);
};
