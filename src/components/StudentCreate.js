import React, { Component } from 'react'
import {TextInput,Picker,Text} from 'react-native'
import {connect} from 'react-redux'
import { studentChange, studentCreate } from '../actions'
import Card from './Card'
import Button from './Button'
import CardSection from './CardSection'


class StudentCreate extends Component {

    clickSave(){
        const {studentName,studentSurname,studentNumber,branch} = this.props;
        this.props.studentCreate({ studentName, studentSurname, studentNumber, branch})
    }

    render() {
        const {inputStyle} = styles;
        return (
            <Card>
                <CardSection>
                    <TextInput 
                        style={inputStyle} 
                        placeholder="isim"
                        value={this.props.studentName} 
                        onChangeText={studentName => this.props.studentChange({props:'studentName',value:studentName})}
                    />
                </CardSection>
                <CardSection>
                <TextInput 
                    style={inputStyle} 
                    placeholder="soyisim"
                    value={this.props.studentSurname} 
                    onChangeText={studentSurname => this.props.studentChange({props:'studentSurname',value:studentSurname})}
                />
                </CardSection>
                <CardSection>
                <TextInput 
                    style={inputStyle} 
                    placeholder="öğrenci no"
                    value={this.props.studentNumber} 
                    onChangeText={studentNumber => this.props.studentChange({props:'studentNumber',value:studentNumber})}
                />
                </CardSection>
                <CardSection>
                    <Text>Şube</Text>
                    <Picker
                        style={{flex:1}} 
                        selectedValue={this.props.studentBranch}
                        onValueChange={branch=>this.props.studentChange({props:'branch',value:branch})}>
                        <Picker.Item label="A Şubesi" value="abranch" />
                        <Picker.Item label="B Şubesi" value="bbranch" />
                        <Picker.Item label="C Şubesi" value="cbranch" />
                        <Picker.Item label="D Şubesi" value="dbranch" />
                    </Picker>
                </CardSection>
                    
                <CardSection>
                <Button onPress={this.clickSave.bind(this)}>Kaydet</Button>
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
    const {studentName,studentSurname,studentNumber,branch}=studentResponse;
    return{studentName,studentSurname,studentNumber,branch};
}

export default connect(mapToStateProps, { studentChange, studentCreate })(StudentCreate);