import React, { Component } from 'react';
import './App.css';
import StudentList from './StudentList.js';
import ClassList from './ClassList.js';
import NewStudentForm from './NewStudentForm.js';
import firebase from './firebase.js';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      teachers: [
        // {
        //   name: "Teacher 1",
        //   class: 1,
        //   students: [],
        // },
        // {
        //   name: "Teacher 2",
        //   class: 2,
        //   students: [],
        // }
      ],
      database: firebase.database().ref("students"),
    }
  }

  componentDidMount = () => {
    this.state.database.once("value", snapshot => {
      if (snapshot && snapshot.exists()) {
        let students = snapshot.val();
        const newStudents = []
        
        Object.keys(students).forEach(key => newStudents.push({
          name: students[key].name,
          class: students[key].class,
          teacher: students[key].teacher,
          grade: students[key].grade,
          birthday: students[key].birthday,
          key: students[key].key,
          index: students[key].index
        }),
        console.log(students))
        this.setState({ students: newStudents })
      }
    })
  }

  addStudent = student => {
    var newStudents = [...this.state.students, student];
    this.setState({ students: newStudents });
    this.state.database.set(newStudents);
  }

  removeStudent = student => {
    const updatedStudents = this.state.students.filter(
      curstudent => curstudent.key !== student.key
    );
    console.log(updatedStudents)  // same problem as notes app
    this.setState({ students: updatedStudents });
    console.log(student.index)
    this.state.database.child(student.index).remove();
  }

  editStudent = (student, index) => {
    var newStudents = [...this.state.students]
    newStudents[index] = student;
    this.setState({ students: newStudents });
    this.state.database.set(newStudents);
  }

  render() {
    return (
      <div className="App">
        <h3>Thomas Jefferson Elementary School</h3>
        <h5>Dashboard</h5>

        <NewStudentForm
          students={this.state.students}
          teachers={this.state.teachers}
          addStudent={this.addStudent} />
        <StudentList
          students={this.state.students}
          removeStudent={this.removeStudent}
          editStudent={this.editStudent} />
        <ClassList />
      </div>
    );
  }
}