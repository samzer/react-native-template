import {createSelector} from 'reselect';
// import {has, sortBy, filter} from 'lodash';

import {INITIAL_STATE} from './Reducers';

const selectMeta = (state) => state.meta || INITIAL_STATE;

const makeSelectData = () =>
  createSelector(selectMeta, (subState) => subState.data);

export default selectMeta;
export {makeSelectData};
