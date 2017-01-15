"use strict";

export default function (orm, db) {
  db.define('role', {
    type : { type: 'text', required: true},
  },
  {
    methods: {
      serialize: function () {
        return { type : this.type }
      }
    }
  });
};