import {takeLatest, all} from 'redux-saga/effects';
import {MetaTypes} from '../stores/Meta/Actions';
import {loadDummySaga} from './DummySaga';

export default function* root() {
  yield all([takeLatest(MetaTypes.LOAD_DATA, loadDummySaga)]);
}
