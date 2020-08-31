import { createStore } from 'redux';
import suscriberReducer from './subscriber/reducer';

const store = createStore( suscriberReducer );

export default store;