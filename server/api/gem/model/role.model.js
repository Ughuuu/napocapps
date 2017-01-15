"use strict";
function default_1(orm, db) {
    db.define('role', {
        type: { type: 'text', required: true },
    }, {
        methods: {
            serialize: function () {
                return { type: this.type };
            }
        }
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
;
