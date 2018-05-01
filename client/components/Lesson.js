import React, { Component } from 'react';
import Header from './Header'
import Content from './Content'

class Lesson extends Component {
	render() {
		return (
			<div style={{display: 'flex', flexDirection: 'column'}}>
				<Header lesson={this.props.lesson} updateLesson={this.props.updateLesson} />
				<Content students={this.props.students} commentFilter={this.props.commentFilter} changeSearch={this.props.changeSearch} lesson={this.props.lesson} comments={this.props.comments} addComment={this.props.addComment}/>
			</div>
		);
	}
}

export default Lesson;
