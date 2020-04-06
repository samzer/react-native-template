import {put, call} from 'redux-saga/effects';
import QuestionActions from '../stores/Meta/Actions';

// import {dummyService} from '../services/DummyService';
// import { parseErrorData } from 'App/Services/UtilsService';

export function* loadDummySaga() {
  try {
    // const {data} = yield call(questionService.getQuestions);
    yield put(QuestionActions.loadDataSuccess('success'));
  } catch (err) {
    // const errorMsg = parseErrorData(err);
    yield put(QuestionActions.loadDataError(err.message));
  }
}
