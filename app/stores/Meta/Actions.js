import {createActions} from 'reduxsauce';

const {Types, Creators} = createActions({
  loadData: ['id'],
  loadDataSuccess: ['payload'],
  loadDataError: ['error'],
  loadDataReset: [],
});

export const MetaTypes = Types;
export default Creators;
