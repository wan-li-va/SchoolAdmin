import React, { Component } from 'react';
import Student from './Student.js';

export default class StudentList extends Component {
    constructor(props) {
      super(props);
      this.state = {}
    }
  
    render() {
        var list = this.props.students.map((student, index) => {
            return (
                <Student
                    student={student} 
                    index={index} 
                    editStudent={this.props.editStudent} 
                    removeStudent={this.props.removeStudent} >
                </Student>
            )
        })

      return (
        <div>
            {list}
        </div>
      );
    }
  }