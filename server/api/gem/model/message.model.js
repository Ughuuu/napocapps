"use strict";
var moment = require('moment');
function default_1(orm, db) {
    var Models = db.define('message', {
        title: { type: 'text', required: true },
        content: { type: 'text', required: true, big: true },
        createdAt: { type: 'date', required: true, time: true },
    }, {
        hooks: {
            beforeValidation: function () {
                this.createdAt = new Date();
            }
        },
        validations: {
            content: orm.enforce.ranges.length(1, 1024)
        },
        methods: {
            serialize: function () {
                return {
                    title: this.title,
                    content: this.content,
                    createdAt: moment(this.createdAt).fromNow()
                };
            }
        }
    });
    Models.hasOne('user', db.models.user, { required: true });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
;
//# sourceMappingURL=message.model.js.map