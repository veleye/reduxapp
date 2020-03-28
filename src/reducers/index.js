import { combineReducers } from 'redux';
import kimlikdogrulamareducers from './kimlikdogrulamareducers';

export default combineReducers({
    kimlikdogrulamaResponse : kimlikdogrulamareducers
});