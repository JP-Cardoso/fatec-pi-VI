import app from './server/server.js';

const main = () => {
  const port = 3000;
  const server = app;
  server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  })
}
main();