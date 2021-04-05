const Employee = require("./employee");

class Engineer extends Employee {
    constructor (name, id, email, username) {
        super(name, id, email);
        this.username = username
    }

    get username() {
        return this._username;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;