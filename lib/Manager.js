// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Manager extends employee {
    constructor(name, email, id, officeNum) {
        //inherit existing attributes - super()
        super(name, id, email);
        //data difference for engineer is GitHub profile
        this.gitHub = gitHub;
        this.officeNum = officeNum;
    }
    getGitHub() {
        return this.gitHub;
    }
    getOfficeNum() {
        return this.officeNum;
    }
    getRole() {
        return "Manager";
    }

}

//export module
module.exports = Manager;