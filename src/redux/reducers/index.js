import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import AuthReducer from './login/AuthReducer';
import PostCardReducer from './create_postcard/PostCardReducer';

const authConfig = {
  key: 'auth',
  storage,
  stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
  // can add exlusions blacklist:['navigation'] and whitelist for those that do want to persist
  blacklist: ['error', 'loading'],
};
const postCardConfig = {
  key: 'postCard',
  storage,
  stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
  // can add exlusions blacklist:['navigation'] and whitelist for those that do want to persist
};
export default combineReducers({
  auth: persistReducer(authConfig, AuthReducer),
  postCard: persistReducer(postCardConfig, PostCardReducer),
});
