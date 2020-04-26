'use strict';

/**
 * egg-mongo default config
 * @member Config#mongo
 * @property {String} SOME_KEY - some description
 */
exports.mongo = {
  client: {
    // uri: 'mongodb://username:password@127.0.0.1:12017?authSource=admin',
    // uri: 'mongodb://127.0.0.1:12017',
    uri: 'mongodb://139.196.80.85:12017',
    dbName: 'dataDb',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      authSource: 'admin',
      auth: {
        user: 'wjfile',
        password: 'wjfile',
      },
      // poolSize: 2,
      // ssl: true,
      // replicaSet: 'xxx',
    },
    fileDbName: 'wj',
    // fileOptions: {
    //   bucketName: 'test',
    //   chunkSizeBytes: 261120,
    // },
  },
};
