'use strict';

const { MongoClient, GridFSBucket } = require('mongodb');
const CLIENT = Symbol.for('Application#client');
const MONGO = Symbol.for('Application#mongo');
const GRIDFS = Symbol.for('Application#gridfs');

module.exports = {
  get client() {
    const config = this.config.mongo.client;
    if (!this[CLIENT]) {
      // [CASE ONE]
      this[CLIENT] = new MongoClient(config.uri, config.options);
      this[CLIENT].connect(function(err) {
        if (!!err) {
          console.error('------ connecting mongo database error: ', err);
        }
      });

      // [CASE TWO]
      // this[CLIENT] = MongoClient.connect(config.uri, config.options)
      //   .then(function(client) {
      //     return client;
      //   })
      //   .catch(function(err) {
      //     console.error('------ connecting mongo database error: ', err);
      //   });

      console.log('------ connecting mongo database ------');
    }
    return this[CLIENT];
  },
  get mongo() {
    const config = this.config.mongo.client;
    if (!this[MONGO]) {
      // [CASE ONE]
      this[MONGO] = this[CLIENT].db(config.dbName);
      // [CASE TWO]
      // this[MONGO] = this[CLIENT].then(function(client) {
      //   return client.db(config.dbName);
      // });
      console.log(`------ using mongo database: ${config.dbName} ------`);
    }
    return this[MONGO];
  },
  get gridfs() {
    const config = this.config.mongo.client;
    if (!this[GRIDFS]) {
      // [CASE ONE]
      this[GRIDFS] = new GridFSBucket(this[CLIENT].db(config.fileDbName), config.fileOptions);
      // [CASE TWO]
      // this[GRIDFS] = this[CLIENT].then(function(client) {
      //   return new GridFSBucket(client.db(config.fileDbName), config.fileOptions);
      // });
      console.log('------ new mongo GridFs bucket ------');
    }
    return this[GRIDFS];
  },
};
