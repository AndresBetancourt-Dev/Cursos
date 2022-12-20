class UserService {
  constructor() {
    console.log("Initializing User Service");
    this.users = [];
  }

  async createUser(userData) {
    if (userData === null || Object.keys(userData).length === 0 ) {
      throw new Error("You need to provide the user data.");
    }
    this.users.push(userData);
  }

  async getUsers() {
    return this.users;
  }
}

module.exports = UserService;
