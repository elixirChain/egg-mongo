'use strict';

const mock = require('egg-mock');

describe('test/mongo.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/mongo-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, mongo')
      .expect(200);
  });

  it('should not be undefined', async () => {
    const gridfs = app.gridfs;

    console.log(gridfs);
  });

});
