'use strict';

const Mongo = require('./lib/mongo').default;
const MONGO = Symbol.for('Application#mongo');

module.exports = {
  get mongo() {
    const config = this.config.mongo.client;
    if (!this[MONGO]) {
      // [CASE ONE]
      this[MONGO] = new Mongo(config);
      // this[MONGO].connect(function(err) {
      //   if (!!err) {
      //     console.error('------ connecting mongo database error: ', err);
      //   }
      // });
      console.log('------ connecting mongo database ------');
    }
    return this[MONGO];
  },
};
