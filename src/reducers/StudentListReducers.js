const INITIAL_STATE = {
    studentName: '',
    studentSurname: '',
    studentNumber:'',
    branch:''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'student_changed':
            return { ...state, [action.payload.props]:action.payload.value };
               
        default:
            return state;
    }
};