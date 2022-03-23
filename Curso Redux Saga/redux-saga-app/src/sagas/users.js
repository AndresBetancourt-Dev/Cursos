/**
 * TakeEvery, non blocking saga
 */

import {
  takeEvery,
  call,
  fork,
  put,
  take,
  takeLatest,
} from "redux-saga/effects";
import * as actions from "../actions/users";
import * as api from "../api/users";

function* getUsers() {
  try {
    const results = yield call(api.getUsers);
    yield put(actions.getUsersSuccess({ items: results.data.data }));
  } catch (error) {
    yield put(
      actions.usersError({
        error: "An error ocurred when trying to geth the users",
      })
    );
  }
}

function* createUser({ firstName, lastName }) {
  try {
    yield call(api.createUser, { firstName, lastName });
    /* yield call(getUsers); */
  } catch (error) {
    yield put(
      actions.usersError({
        error: "An error ocurred when trying to create the user",
      })
    );
  }
}

function* deleteUser({ id }) {
  try {
    yield call(api.deleteUser, { id });
  } catch (error) {
    yield put(
      actions.usersError({
        error: "An error ocurred when trying to delete the user",
      })
    );
  }
}

function* watchGetUsersRequest() {
  /**
   * Take each request
   */
  yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}

function* watchCreateUserRequest() {
  /**
   * Creating or updating records
   * The current call is cancelled assumit it's still resolving and only the latest call is actually used
   */
  yield takeLatest(actions.Types.CREATE_USER_REQUEST, createUser);
}

function* watchDeleteUserRequest() {
  while (true) {
    const action = yield take(actions.Types.DELETE_USER_REQUEST);
    yield call(deleteUser, {
      id: action.payload.id,
    });
  }
}

const usersSagas = [
  fork(watchGetUsersRequest),
  fork(watchCreateUserRequest),
  fork(watchDeleteUserRequest),
];
export default usersSagas;
