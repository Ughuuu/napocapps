"use strict";

var moment = require('moment');

export default function (orm, db) {
  var Plugin = db.define('plugin', {
    name        : { type: 'text', required: true },
    version     : { type: 'text', required: true},
  },
  {
    hooks: {
      beforeValidation: function () {
        this.createdAt = new Date();
      }
    },
    validations: {
      body   : orm.enforce.ranges.length(1, 1024)
    },
    methods: {
      serialize: function () {
        return {
          name      : this.name,
          version   : this.version,
        }
      }
    }
  });
  Plugin.hasOne('message', db.models.message, { required: true });
};