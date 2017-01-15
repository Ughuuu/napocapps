"use strict";
const moment = require("moment");
function default_1(orm, db) {
    var User = db.define('user', {
        name: { type: 'text', required: true },
        password: { type: 'text', required: true },
        email: { type: 'text', required: true },
        createdAt: { type: 'date', required: true, time: true },
    }, {
        hooks: {
            beforeValidation: function () {
                this.createdAt = new Date();
            }
        },
        validations: {
            name: orm.enforce.security.username(2, "^[a-z0-9_-]{2,15}$", "Name cannot be smaller than 2 or bigger than 15 characters. Name must have only letters or digits, _ or -."),
            password: orm.enforce.security.password("6", "Password must have minimal size of 6."),
            email: orm.enforce.patterns.email("Email must have the structure of an email"),
        },
        methods: {
            serialize: function () {
                return {
                    name: this.name,
                    email: this.email,
                    createdAt: moment(this.createdAt).fromNow()
                };
            }
        }
    });
    User.hasOne('role', db.models.role, { required: true });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
;
//# sourceMappingURL=user.model.js.map