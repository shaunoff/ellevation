import React, { Component } from 'react';
import {Button, Input} from 'graphene-ui'
class AddComment extends Component {
	state = {
		comment: false,
		text: ""
	}
	toggleComment = () => {
		this.setState({comment: !this.state.comment})
	}
	handleChange = (name, text) => {
		this.setState({text})
	}
	handleSubmit = () => {
		this.props.addComment({text: this.state.text})
		this.setState({
			comment: false,
			text: ''
		})
	}
	render() {
		console.log(this.state.text)
		return (
			<div style={{marginTop: '10px', display: 'flex',alignItems: 'center'}}>
				{this.state.comment ?
					<React.Fragment>
						<Input name="text" label='Add Comment' onChange={(name,text)=>this.handleChange(name,text)}/>
						<Button style={{position: 'relative', top: '10px', marginLeft: '10px'}} onClick={this.handleSubmit}>submit</Button>
					</React.Fragment>
					:
					<Button onClick={this.toggleComment}>Add Comment</Button>
				}
			</div>
		);
	}

}

export default AddComment;
