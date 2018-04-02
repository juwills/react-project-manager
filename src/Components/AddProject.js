import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

class AddProject extends Component {
	static defaultProps = {
		projectCats: ['Website', 'Emails', 'Banners', 'Mobile App']
	}

	constructor(){
		super();
		this.state = {
			newProject: {}
		}
	}

	handleSubmit(e){
		e.preventDefault();
		if(this.refs.title.value === ''){
			alert('Please enter a title');
		} else {
			this.setState({
				newProject: {
					id: uuid.v4(),
					title: this.refs.title.value,
					category: this.refs.category.value
				}
			}, function(){
				this.props.saveProject(this.state.newProject);
			});
		}
	}

	render() {
		let categoryOptions = this.props.projectCats.map(category => {
			return(<option key={category} value={category}>{category}</option>);
		});
		return (
			<div className="AddProject">
				<h2>Add Project</h2>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<div>
						<label>Title:</label>
						<input type="text" ref="title"/>
					</div>
					<div>
						<label>Category:</label>
						<select ref="category">
							{categoryOptions}	
						</select>
					</div>
					<div>
						<input type="submit" value="Submit" />
					</div>          
				</form>
			</div>
		);
	}
}

AddProject.propTypes = {
	projectCats: PropTypes.array,
	saveProject: PropTypes.func
}

export default AddProject;
