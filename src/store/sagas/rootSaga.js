import { all } from 'redux-saga/effects';
import entitySaga from './entitySaga';

export default function* () {
  yield all([
    entitySaga(),
  ]);
}