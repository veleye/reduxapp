import firebase from '@firebase/app'
import '@firebase/database'

export const studentChange = ({props,value}) => {
    return (dispatch) => {
        dispatch({
            type: 'student_changed',
            payload: {props,value}
        });
    };
};


export const studentCreate = ({ studentName, studentSurname, studentNumber, branch }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        const database = firebase.database();
        database.ref(`/users/${currentUser.uid}/students`)
        .push({ studentName, studentSurname, studentNumber, branch })
         .then(() => {
            dispatch({
                type: 'create_request_success'
            });
         })
    }
};