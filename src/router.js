import React, { Component } from 'react'
import {Scene,Router, Actions} from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import StudentList from './components/StudentList'
import StudentCreate from './components/StudentCreate'
import StudentUpdate from './components/StudentUpdate'

const RouterComponent=()=>{
    return(
        <Router>
            <Scene key="kimlik">
                <Scene  
                    key="loginScreen" 
                    component={LoginForm} 
                    title="Giriş Ekranı"
                />
                <Scene  
                    key="studentList" 
                    component={StudentList} 
                    title="Öğrenci Listesi" 
                    onRight={()=>Actions.studentCreate()} 
                    rightTitle="Yeni"
                />
                 <Scene  
                    key="studentCreate" 
                    component={StudentCreate} 
                    title="Öğrenci Kaydet"
                />    
                <Scene  
                    key="studentUpdate" 
                    component={StudentUpdate} 
                    title="Öğrenci Güncelle"
                />  
            </Scene>
        </Router>
    );
};

export default RouterComponent;