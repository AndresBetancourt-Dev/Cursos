const UserService = require("./users.service");

class UserController {
  constructor() {
    console.log("Initializing User Controller");
    this.userService = new UserService();
  }

  async createUser(req, res) {
    const user = req.body;
    try {
      await this.userService.createUser();
      res.status(203).send({});
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getUsers(req, res) {
    try {
      const users = await this.userService.getUsers();
      res.status(200).send(users);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = UserController;
