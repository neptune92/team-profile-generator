const Intern = require("./employee");

class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email);
        this.school = school
    }

    get school() {
        return this._school;
    }
}

module.exports = Intern;