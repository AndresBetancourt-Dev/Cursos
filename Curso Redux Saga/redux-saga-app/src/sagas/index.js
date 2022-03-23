import { all } from "redux-saga/effects";
import UsersSagas from "./users";

export default function* rootSaga() {
  yield all([...UsersSagas]);
}
