import _ from 'lodash'
import React, { Component } from 'react'
import { FlatList  } from 'react-native'
import { connect } from 'react-redux'
import { getStudentList } from '../actions'
import ListItem from './ListItem'

class StudentList extends Component {

    UNSAFE_componentWillMount() {
        this.props.getStudentList();
    }


    renderRow({ item, index }) {
        return <ListItem student = { item } />

    }

    render() {
        return (
            <FlatList
                data={this.props.studentRecords}
                renderItem={this.renderRow}
                keyExtractor={( item, index ) => index.toString()}
            />
        )
    }
}

const mapStateToProps = ({ studentResponse }) => {
    const studentRecords = _.map(studentResponse, (val, uid) => {
        return { ...val, uid };
    });
    return { studentRecords }; // {studentName:'erkan', studentSurname:'obut', branch.... , uid: 'qwerty...'}
}

export default connect(mapStateToProps, { getStudentList })(StudentList)