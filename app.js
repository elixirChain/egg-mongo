'use strict';

module.exports = async app => {
  // load application 'getter' to app
  // app.mongo;
  app.beforeStart(async () => {
    await app.mongo.connect();
    app.coreLogger.info('[egg-gridfs] connecting mongodb...');
  });

};
