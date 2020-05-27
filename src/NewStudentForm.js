import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

export default class NewStudentForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
          name: "",
          class: null,
          teacher: "",
          grade: 0,
          birthday: "",
          teacherList: null,
          invalidInput: "",
      }
    }

    // componentDidMount = () => {
    //     var numTeachers = this.props.teachers.length;
    //     let teachers;
    //     for(var i = numTeachers-1; i>=0; i++) {
    //         teachers += (
    //             <input 
    //                 type="radio" 
    //                 value= {this.props.teachers[i].name}
    //                 onClick={this.setClass} />
    //         )
    //     }
    //     this.setState({ teacherList: teachers })
    // }

    // setClass = e => {
    //     const curTeacher = this.props.teachers.filter(
    //         teacher => teacher.name === e.target.value
    //     )
    //     this.setState({
    //         teacher: e.target.value,
    //         class: curTeacher[0].class,
    //     })
    // }

    handleClick = () => {
        if(this.state.name !== "" && this.state.teacher !== "") {
            const newStudent = {
                name: this.state.name,
                class: this.state.class,
                teacher: this.state.teacher,
                grade: this.state.grade,
                birthday: this.state.birthday,
                key: Date.now(),
                index: this.props.students.length,
            }
            this.props.addStudent(newStudent);
            this.setState({
                name: "",
                class: null,
                teacher: "",
                grade: 0,
                birthday: "",
                invalidInput: "",
            })
        }
        else {
            this.setState({ invalidInput: "Please enter a name and select a teacher." })
        }
    }
  
    render() {
      return (
        <div>
            <p>Enroll Student</p>

            <label>Name: </label>
            <input type="text" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />

            <label>Grade: </label>
            <input type="number" min="0" max="6" onChange={e => this.setState({ grade: e.target.value })} />

            <label>Birthday: </label>
            <input type="text" value={this.state.birthday} onChange={e => this.setState({ birthday: e.target.value })} />

            <label>Teacher: </label>
            <input type="text" value={this.state.teacher} onChange={e => this.setState({ teacher: e.target.value })} />
            {/* {this.state.teacherList} */}

            <p>Your class is: {this.state.class} </p>

            <Button onClick={this.handleClick}>Enroll Student</Button>
            <p>{this.state.invalidInput}</p>
        </div>
      );
    }
  }