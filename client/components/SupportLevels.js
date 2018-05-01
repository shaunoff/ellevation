import React, { Component } from 'react';
import {Avatar,Segment,Switch,Table,Icon,Input,Divider} from 'graphene-ui'

const filterStudentsByLevel = (level,students) => students.filter(student => student.level === level)


const StudentTable = ({students,level}) => {
	let filteredStudents = filterStudentsByLevel(level,students)
	return (
			<Table>
			 <Table.Header compact>
				 <Table.HeaderCell>Avatar</Table.HeaderCell>
				 <Table.HeaderCell>Name</Table.HeaderCell>
				 <Table.HeaderCell>Grade</Table.HeaderCell>
			 </Table.Header>
			 <Table.Body>
				 {filteredStudents.map(student => (
					 <Table.Row key={student.id} compact>
						 <Table.Cell>
							 <Avatar size="mini"/>
						 </Table.Cell>
						 <Table.Cell>
							 {student.name}
						 </Table.Cell>
						 <Table.Cell>
							 {student.grade}
						 </Table.Cell>
					 </Table.Row>
				 ))}
			 </Table.Body>
		 </Table>
	)
}
const Level = ({students,level, label,studentActive}) => (
	<div style={{marginTop: '10px'}}>
		<Segment style={{marginBottom: '10px'}}>
			<div style={{display: 'flex', justifyContent: 'space-between',alignItems: 'center'}}>
				<h3 style={{marginTop: '0px', color: '#6bada7'}}>{label} Support</h3>
				<div style={{display: 'flex', alignItems: 'center'}}>
					<Icon name='user'/>
					<div style={{color: '#6bada7', fontWeight: 700}}>
						{filterStudentsByLevel(level, students).length}
					</div>
				</div>
			</div>
			<Divider style={{marginTop: '0px'}}/>
			{studentActive ?
				<StudentTable students={students} level={level}/>
				:
				<Content/>
			}
		</Segment>
	</div>
)
const filterByGrade = (students, max, min) => {
	return students.filter(student => student.grade >=min && student.grade <=max)
}
const Content = () => (
	<ul>
		<li>Lorem ipsum dolor sit amet, dicunt incorrupte cu ius, duo cu mazim laudem utamur.</li>
		<li>Duo mutat pertinax te, id phaedrum elaboraret ius. Timeam virtute quaestio no ius.</li>
		<li>Paulo honestatis ne nam, iriure animal ei pri. Ut vis saepe causae.</li>
	</ul>
)

class SupportLevels extends Component {
	state = {
		students: false,
		studentList: this.props.students,
		min: 1,
		max: 10
	}
	toggleStudents =(value)=>{
		this.setState({students: !this.state.students})
	}
	changeMin = (event) => {
		const value = event.target.value;
		this.setState({min: value})
	}
	changeMax = (event) => {
		const value = event.target.value;
		this.setState({max: value})
	}
	render() {
		const filteredStudents = filterByGrade(this.props.students, this.state.max, this.state.min)
		return (
			<div style={{marginRight: '10px'}}>
				<h2 style={{color: '#6bada7'}}>SupportLevels</h2>
				<div style={{marginBottom: "10px", display: 'flex', justifyContent: 'space-between',alignItems: 'center'}}>
					<div style={{display: 'flex'}}>
						<div>
							Min
							<input onChange={this.changeMin} style={{width: '50px', marginLeft: '10px'}} value={this.state.min} label="Min"/>
						</div>
						<div style={{marginLeft: '10px'}}>
							Max
							<input onChange={this.changeMax} style={{width: '50px', marginLeft: '10px'}} value={this.state.max} label="Min"/>
						</div>
					</div>
					<Switch onClick={this.toggleStudents} icon="user"	/>
				</div>
				<Level students={filteredStudents} level="high" label="High" studentActive={this.state.students}/>
				<Level students={filteredStudents} level="med" label="Medium" studentActive={this.state.students}/>
				<Level students={filteredStudents} level="low" label="Low" studentActive={this.state.students}/>
			</div>
		);
	}

}

export default SupportLevels;
