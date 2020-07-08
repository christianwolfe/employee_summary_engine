// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Engineer extends employee {
    constructor(name, email, id) {
        //inherit existing attributes - super()
        super(name, id, email);
        //data difference for engineer is GitHub profile
        this.gitHub = gitHub;
    }
    getGitHub() {
        return this.gitHub;
    }
    getRole() {
        return "Engineer";
    }

}
module.exports = Engineer;