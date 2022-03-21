/**
 * What is a decorator
 * Class Definitions, not functions
 * Method decorators
 * Params Decorators
 * Class Decorators
 */

import { important, logTimings, timing } from "./performanceDecorators";

const delay = <T>(time: number, data: T): Promise<T> =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(data);
    }, time)
  );

@logTimings
class Users {
  @timing()
  async getUsers() {
    return await delay(1000, []);
  }

  @timing()
  async getUser(@important id: number) {
    return await delay(50, {
      id: `user:${id}`,
    });
  }
}

(async () => {
  const users = new Users();
  const user = await users.getUser(2);
  console.log(`Got ${JSON.stringify(user)}`);

  await users.getUser(42);
  await users.getUsers();

  //@ts-ignore
  console.log(users.__timings);
})();
