const UserService = require("./users.service");
const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
  const decoded = jwt.verify(token, "secret-key");
  return decoded;
};

class UserController {
  constructor() {
    console.log("Initializing User Controller");
    this.userService = new UserService();
  }

  async createUser(req, res) {
    const token = req.headers.accessToken;
    verifyToken(token);
    const user = req.body;
    try {
      await this.userService.createUser(user);
      return res.status(203).send({});
    } catch (error) {
      return res.status(500).send(error);
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
