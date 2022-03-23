import { Types } from "../actions/users";

const INITIAL_STATE = {
  items: [],
  error: "",
};

export default function users(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case Types.GET_USERS_SUCCESS: {
      return {
        ...state,
        items: payload.items,
      };
    }
    case Types.CREATE_USER_REQUEST: {
      const maxId =
        Math.max.apply(
          null,
          state.items.map(({ id }) => id)
        ) + 1;
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: maxId,
            firstName: payload.firstName,
            lastName: payload.lastName,
          },
        ],
      };
    }
    case Types.DELETE_USER_REQUEST: {
      return {
        ...state,
        items: [...state.items.filter((user) => user.id !== payload.id)],
      };
    }
    case Types.USERS_ERROR: {
      console.log(payload.error);
      return {
        ...state,
        error: payload.error,
      };
    }
    case Types.GET_USERS_REQUEST:
    default:
      return state;
  }
}
