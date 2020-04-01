const INITIAL_STATE = {
    studentName: '',
    studentSurname: '',
    studentNumber:'',
    branch:'',
    loading:false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'student_changed':
            return { ...state, [action.payload.props]:action.payload.value };
        case 'create_request':
            return { ...state, loading: true }
        case 'create_request_success':
            return INITIAL_STATE
        case 'get_student_list':
            return action.payload
        case 'update_request':
            return {}
        case 'update_request_success':
            return {}
            
        default:
            return state;
    }
};