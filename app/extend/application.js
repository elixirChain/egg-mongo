'use strict';

const { MongoClient, GridFSBucket } = require('mongodb');
const GRIDFS = Symbol.for('Application#gridfs');

module.exports = {
  get gridfs() {
    const config = this.config.mongo.client;
    if (!this[GRIDFS]) {
      // [CASE ONE]
      const client = new MongoClient(config.uri, config.options);
      client.connect(function(err) {
        if (!!err) {
          console.error('------ connecting mongo database error: ', err);
        }
      });
      this[GRIDFS] = new GridFSBucket(client.db(config.fileDbName), config.fileOptions);

      // [CASE TWO]
      // this[GRIDFS] = MongoClient.connect(config.uri, config.options)
      //   .then(function(client) {
      //     return new GridFSBucket(client.db(config.fileDbName), config.fileOptions);
      //   })
      //   .catch(function(err) {
      //     console.error('------ connecting mongo database error: ', err);
      //   });
    }
    return this[GRIDFS];
  },
};
