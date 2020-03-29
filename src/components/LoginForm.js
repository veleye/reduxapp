import React, { Component } from 'react'
import firebase from '@firebase/app'
import '@firebase/auth'
import {View, TextInput} from 'react-native'
import { connect } from 'react-redux'
import Button from './Button'
import Card from './Card'
import CardSection from './CardSection'
import Spinner from './Spinner'
import { emailChanged, passwordChanged,loginUser} from '../actions'


class LoginForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
            loading:false
        }
    }

    clickLoginBtn(){
        const {email, password} = this.props;
        this.props.loginUser(email,password);
    }

    renderContents(){
        if(!this.props.loading){
            return(
                <Button onPress={this.clickLoginBtn.bind(this)} > 
                        GİRİŞ
                </Button>
            );
        }else{
            return(
                <Spinner size = "small"/>
            );
        }
    }

    render() {
        console.log('email response: ' + this.props.email);
        console.log('password response: ' + this.props.email);
        const {containerStyle, subContainerStyle, inputStyle} = styles;
        return (
            <View style={{flex:1,backgroundColor:'white'}}>
                <Card style={containerStyle}>

                    <CardSection>
                        <TextInput 
                            style={inputStyle} 
                            placeholder="E-mail"
                            value={this.props.email} 
                            onChangeText={email => this.props.emailChanged(email)}
                        />
                    </CardSection>

                    <CardSection>
                        <TextInput 
                            secureTextEntry
                            style={inputStyle} 
                            placeholder="Şifre"
                            value={this.props.password} 
                            onChangeText={password => this.props.passwordChanged(password)}
                        />
                    </CardSection>

                    <CardSection>
                        {this.renderContents()}
                    </CardSection>
                </Card>
            </View>
        )
    }
}

const styles = {
    subContainerStyle:{
        borderBottomWidth:1,
        padding:5,
        backgroundColor:'#fff',
        justifyContent:'flex-start',
        flexDirection:'row',
        borderColor:'#ddd',
        position:'relative'
    },
    inputStyle:{
        color:'#000',
        paddingRight:5,
        paddingLeft:5,
        fontSize:18,
        lineHeight:23,
        flex:2
    }
}

const mapStateToProps = ({kimlikdogrulamaResponse}) => {
    const { email, password, loading } = kimlikdogrulamaResponse;
    return { 
        email:'erk@erk.com', 
        password:'123456',
        loading
    };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged,loginUser })(LoginForm);