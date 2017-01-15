"use strict";
function default_1(orm, db) {
    var Plugin = db.define('plugin', {
        name: { type: 'text', required: true },
        version: { type: 'text', required: true },
    }, {
        hooks: {
            beforeValidation: function () {
                this.createdAt = new Date();
            }
        },
        validations: {
            body: orm.enforce.ranges.length(1, 1024)
        },
        methods: {
            serialize: function () {
                return {
                    name: this.name,
                    version: this.version,
                };
            }
        }
    });
    Plugin.hasOne('message', db.models.message, { required: true });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
;
