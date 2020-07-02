import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';

//this is the actual root reducer combining all reducers (slices of state)
export default combineReducers({
    user: userReducer
});
