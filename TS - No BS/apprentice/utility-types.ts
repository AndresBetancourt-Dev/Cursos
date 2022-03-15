interface User {
  name: string;
  id: string;
  email?: string;
  phone?: string;
}

/**
 * Makes the full object attributes optional
 */

type UserOptionals = Partial<User>;

/**
 * Makes the full object attributes required
 */
type UserRequired = Required<User>;

/**
 * New Type with the Picked Attributes
 */
type JustEmailAndName = Pick<User, "email" | "name">;

type UserWithoutId = Omit<User, "id">;

const merge = (user: User, overrides: UserOptionals): User => {
  return {
    ...user,
    ...overrides,
  };
};

console.log(
  merge(
    {
      name: "Jack",
      id: "foo",
      email: "something@gmail.com",
    },
    { email: "jack-email@gmail.com", phone: " 778888" }
  )
);

const mapById = (users: User[]): Record<User["id"], UserWithoutId> => {
  return users.reduce((a, v: User) => {
    const { id, ...user } = v;
    return { ...a, [v.id]: user };
  }, {});
};

console.log(
  mapById([
    {
      name: "Jack",
      id: "foo",
      email: "something@gmail.com",
    },
    { name: "Papito", id: "pap", email: "papito@gmail.com", phone: " 778855" },
  ])
);
