// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, email, id, school) {
        //inherit existing attributes - super()
        super(name, id, email);
        //data difference for engineer is GitHub profile
        this.school = school;
    }
    getGitHub() {
        return this.gitHub;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }


}

//export module
module.exports = Intern;