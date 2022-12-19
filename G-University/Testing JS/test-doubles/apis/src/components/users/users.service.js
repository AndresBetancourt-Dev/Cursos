class UserService {
  constructor() {
    console.log("Initializing User Service");
    this.users = [];
  }

  async createUser(userData) {
    this.users.push(userData);
  }

  async getUsers() {
    return this.users;
  }
}

module.exports = UserService;
