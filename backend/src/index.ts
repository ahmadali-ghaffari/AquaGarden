import * as config from './config';
import app from './app';

const PORT: number = Number(config.port) || 3001;

app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
})
