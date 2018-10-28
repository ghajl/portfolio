import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import createServer from '../projects/barcoordinator/server/server';
import initRoutes from './init/routes';
import createApp from './PageRenderer';
import { isProduction } from '../config/app';

const app = express();

const barcoordinatorConfig = {
  root: `${process.cwd()}/projects/barcoordinator`,
};
const appBarcoordinator = createServer().withConfig(barcoordinatorConfig);

if (isProduction) {
  app.use(helmet({ noCache: true }));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/barcoordinator', appBarcoordinator);
app.use('/public', express.static(`${process.cwd()}/public`));
app.use('/dist', express.static(`${process.cwd()}/dist`));

initRoutes(app);

app.get('*', async (req, res) => {
  const { html, context } = await createApp(req.url);
  const { url = null } = context;
  if (url) {
    res.writeHead(302, {
      Location: url,
    });
    res.end();
  } else {
    res.send(html);
  }
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app listening on port ${port}\n`);
});
