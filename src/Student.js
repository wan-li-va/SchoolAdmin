import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

export default class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.student.name,
            teacher: this.props.student.teacher,
            grade: this.props.student.grade,
            birthday: this.props.student.birthday,
            isEditing: false
        }
    }

    editStudent = () => {
        const c = {
            name: this.state.name,
            teacher: this.state.teacher,
            grade: this.state.grade,
            birthday: this.state.birthday,
        }
        this.props.editStudent(c, this.props.index)
        this.setState({ isEditing: false })
    }

    render() {
        return (
            <div>
                <Card>
                    <Card.Body>
                        {/* <Card.Text> */}
                            {(this.state.isEditing) ?
                                <div>
                                    <div className="labels">
                                        <label>Name: </label>
                                        <input type="text" onChange={e => this.setState({ name: e.target.value })} value={this.state.name} />
                                        <label>Teacher: </label>
                                        <input type="text" onChange={e => this.setState({ teacher: e.target.value })} value={this.state.teacher} />
                                        <label>Grade: </label>
                                        <input type="number" max="6" min="0" onChange={e => this.setState({ grade: e.target.value })} value={this.state.grade} />
                                        <label>Birthday: </label>
                                        <input type="text" onChange={e => this.setState({ birthday: e.target.value })} value={this.state.birthday} />
                                    </div>
                                    <Button onClick={this.editStudent}>Save Changes</Button>
                                    <Button onClick={() => this.props.removeStudent(this.props.student)}>Delete Note</Button>
                                </div>
                                :
                                <div>
                                    <em>Name: {this.state.name}</em> <br />
                                    <em>Teacher: {this.state.teacher}</em> <br />
                                    <em>Grade: {this.state.grade}</em> <br />
                                    <em>Birthday: {this.state.birthday}</em> <br />
                                    <Button className="button" onClick={() => this.setState({ isEditing: true })}>
                                        Edit Student Information
                                </Button> <br />
                                    <Button onClick={() => this.props.removeStudent(this.props.student)}>Delete Student</Button>
                                </div>
                            }
                        {/* </Card.Text> */}
                    </Card.Body>
                </Card>
            </div>
        );
    }
}