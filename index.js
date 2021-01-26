const serve = require('koa-static');
const Koa = require('koa');
const app = new Koa();

app.use(serve('./public'));

const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
  console.info(`-- server is listening on port ${port}`);
});
