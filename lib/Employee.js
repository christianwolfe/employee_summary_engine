class Employee {
    constructor(name, email, id) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    //return data points
    returnName() {
        return this.name;
    }
    returnEmail() {
        return this.email;
    }
    returnId() {
        return this.id;
    }
}
module.exports = Employee;