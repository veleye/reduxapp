import firebase from '@firebase/app'
import '@firebase/database'
import { Actions } from 'react-native-router-flux';

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
        dispatch({
            type: 'create_request'
        });
        const database = firebase.database();
        database.ref(`/users/${currentUser.uid}/students`)
        .push({ studentName, studentSurname, studentNumber, branch })
         .then(() => {
            dispatch({
                type: 'create_request_success'
            });
            Actions.pop()
         })
    }
};

export const getStudentList = () => {
    const { currentUser } = firebase.auth();
    return(dispatch) => {
        const database = firebase.database();
        database.ref(`/users/${currentUser.uid}/students`)
        .on('value', snapshot => {
            dispatch({
                type: 'get_student_list',
                payload: snapshot.val()
            })
        })
    }
}

export const studentUpdate = ({ studentName, studentSurname, studentNumber, branch, uid }) => {

    const { currentUser } = firebase.auth();
    return (dispatch) => {
        dispatch({
            type: 'update_request'
        });
        const database = firebase.database();
        database.ref(`/users/${currentUser.uid}/students/${uid}`)
        .set({ studentName, studentSurname, studentNumber, branch })
         .then(() => {
            dispatch({
                type: 'update_request_success'
            });
            Actions.pop()
         })
    }
};