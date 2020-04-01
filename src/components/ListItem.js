import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'
import { Text, View, TouchableWithoutFeedback } from 'react-native'
import CardSection from './CardSection'

class ListItem extends Component {

    studentClick() {
        Actions.studentUpdate( {student: this.props.student });
    }

    render() {
        const { studentName, studentSurname } = this.props.student
        return (
            <TouchableWithoutFeedback onPress = {this.studentClick.bind(this)}>
            <View>
                <CardSection>
                    <Text>
                       {studentName} {studentSurname}  
                    </Text>
                </CardSection>
            </View>
            </TouchableWithoutFeedback>     
        );
    };
}

export default ListItem;