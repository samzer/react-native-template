import produce from 'immer';

import {MetaTypes} from './Actions';

export const INITIAL_STATE = {
  data: false,
  error: false,
  loading: false,
};

const reducer = (state = INITIAL_STATE, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case MetaTypes.LOAD_DATA:
        draft.loading = true;
        draft.error = false;
        break;
      case MetaTypes.LOAD_DATA_SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.data = action.payload;
        break;
      case MetaTypes.LOAD_DATA_ERROR:
        draft.loading = false;
        draft.error = action.error;
        break;
      case MetaTypes.LOAD_DATA_RESET:
        return INITIAL_STATE;
    }
  });

export default reducer;
