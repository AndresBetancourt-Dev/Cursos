const UserController = require("../users/users.controller");
const UserService = require("../users/users.service");
const { getMockReq, getMockRes } = require("@jest-mock/express");

jest.mock("../users/users.service");

describe("User Component", () => {
  beforeEach(() => {
    UserService.mockClear()
  });

  it("Should check if userService constructor and methods have been called", async () => {
    expect(UserService).not.toHaveBeenCalled();

    const userController = new UserController();
    expect(UserService).toHaveBeenCalledTimes(1);

    const mockUserData = {
      "firstName": "Andres",
      "lastName": "Betancourt",
      "email": "test@demo.com",
    };

    const mockRequest = getMockReq({ body: mockUserData });

    const { res: mockResponse } = getMockRes();

    await userController.createUser(mockRequest, mockResponse);

    const mockUserServiceInstance = UserService.mock.instances[0];
    
    //expect(mockUserServiceInstance.createUser).toHaveBeenCalledWith(mockUserData);
    expect(mockUserServiceInstance.createUser).toHaveBeenCalledTimes(1);
  });
});
