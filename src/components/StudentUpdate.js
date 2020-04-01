import React, { Component } from 'react'
import {TextInput,Picker,Text} from 'react-native'
import {connect} from 'react-redux'
import { studentChange, studentUpdate } from '../actions'
import Card from './Card'
import Button from './Button'
import CardSection from './CardSection'
import Spinner from './Spinner'


class StudentUpdate extends Component {

    state = {
        studentName: '',
        studentSurname: '',
        studentNumber: '',
        branch: ''
    }

    componentWillMount() {
        const {studentName,studentSurname,studentNumber,branch} = this.props.student;
        this.setState({
            studentName,
            studentSurname,
            studentNumber,
            branch
        });
    }

    clickUpdate(){
        const {studentName,studentSurname,studentNumber,branch} = this.state;
        this.props.studentUpdate({ studentName, studentSurname, studentNumber, branch, uid: this.props.student.uid})
    }

    clickDelete(){
        const {studentName,studentSurname,studentNumber,branch} = this.state;
        this.props.studentUpdate({ studentName, studentSurname, studentNumber, branch, uid: this.props.student.uid})
    }

    renderAdd(){
        if(!this.props.loading){
            return (
                <Button onPress={this.clickUpdate.bind(this)}>Güncelle</Button>
            );
        }else{
            return(
                <Spinner size = "small"/>
            );
        }
    }

    renderDelete(){
        if(!this.props.loading){
            return (
                <Button onPress={this.clickDelete.bind(this)}>Sil</Button>
            );
        }else{
            return(
                <Spinner size = "small"/>
            );
        }
    }

    render() {
        const { inputStyle } = styles;
        return (
            <Card>
                <CardSection>
                    <TextInput 
                        style={inputStyle} 
                        placeholder="isim"
                        value={this.state.studentName} 
                        onChangeText= { studentName => this.setState({ studentName })}
                    />
                </CardSection>
                <CardSection>
                <TextInput 
                    style={inputStyle} 
                    placeholder="soyisim"
                    value={this.state.studentSurname} 
                    onChangeText={studentSurname =>  this.setState({ studentSurname })}
                />
                </CardSection>
                <CardSection>
                <TextInput 
                    style={inputStyle} 
                    placeholder="öğrenci no"
                    value={this.state.studentNumber} 
                    onChangeText={studentNumber => this.setState({ studentNumber })}
                />
                </CardSection>
                <CardSection>
                    <Text>Şube</Text>
                    <Picker
                        style={{flex:1}} 
                        selectedValue={this.state.branch}
                        onValueChange={branch => this.setState({ branch })}>
                        <Picker.Item label="A Şubesi" value="abranch" />
                        <Picker.Item label="B Şubesi" value="bbranch" />
                        <Picker.Item label="C Şubesi" value="cbranch" />
                        <Picker.Item label="D Şubesi" value="dbranch" />
                    </Picker>
                </CardSection>
                    
                <CardSection>
                    { this.renderAdd() }
                </CardSection>

                <CardSection>
                    { this.renderDelete() }
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    inputStyle:{
        color:'#000',
        paddingRight:5,
        paddingLeft:5,
        fontSize:18,
        lineHeight:23,
        flex:2
    }
}

const mapToStateProps=({studentResponse})=>{
    const { loading } = studentResponse;
    return { loading };
}

export default connect(mapToStateProps, { studentChange, studentUpdate })(StudentUpdate);