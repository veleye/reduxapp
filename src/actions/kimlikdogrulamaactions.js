import {Alert} from 'react-native'
import firebase from '@firebase/app'
import '@firebase/auth'
import {Actions} from 'react-native-router-flux'

export const emailChanged = (email) => {
    return (dispatch) => {
        dispatch({
            type: 'email_changed',
            payload: email
        });
    };
};

export const passwordChanged = (password) => {
    return (dispatch) => {
        dispatch({
            type: 'password_changed',
            payload: password
        });
    };
};

export const loginUser = (email, password) => {
    return(dispatch)=>{
        dispatch({
            type:'login_user'
        });

        if(email === '' || password === ''){
            Alert.alert(
                'Mesaj',
                'Kullanıcı adı ve şifre boş bırakılamaz',
                [{
                    text:'Tamam', onPress:()=>null
                }]
            );
        }else{
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user=>loginSuccess(dispatch,user))
            .catch(()=>{
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(user=>loginSuccess(dispatch,user))
                .catch(()=>loginFail(dispatch));
                
            });

        }
    };
};

const loginFail=(dispatch)=>{
    if(email === '' || password === ''){
        Alert.alert(
            'Mesaj',
            'Kullanıcı adı ve şifre boş bırakılamaz',
            [{
                text:'Tamam', onPress:()=>null
            }]
        );
    }
    dispatch({
        type:'login_user_fail'
    });
}

const loginSuccess=(dispatch,user)=>{
    dispatch({
        type:'login_user_success',
        payload:user
    });
    Actions.studentList();
};