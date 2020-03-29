import { combineReducers } from 'redux';
import kimlikdogrulamareducers from './kimlikdogrulamareducers';
import StudentListResponse from './StudentListReducers'

export default combineReducers({
    kimlikdogrulamaResponse : kimlikdogrulamareducers,
    studentResponse:StudentListResponse
});