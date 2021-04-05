class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    get name() {
        return this._name;
    }

    get id() {
        return this._id;
    }

    get email() {
        return this._email;
    }
}




module.exports = Employee;