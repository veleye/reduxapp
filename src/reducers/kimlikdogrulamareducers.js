const INITIAL_STATE = {
    email: '',
    password: '',
    loading:false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'email_changed':
            return { ...state, email: action.payload };
            case 'password_changed':
                return { ...state, password: action.payload };
            case 'login_user':
                return {...state, loading:true}
            case 'login_user_success':
                return {...state, loading:false}
            case 'login_user_fail':
                    return {...state, loading:false}    
        default:
            return state;
    }
};