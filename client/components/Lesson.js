import React, { Component } from 'react';
import Header from './Header'
import Content from './Content'

class Lesson extends Component {
	render() {
		return (
			<div style={{display: 'flex', flexDirection: 'column'}}>
				<Header/>
				<Content/>
			</div>
		);
	}
}

export default Lesson;
