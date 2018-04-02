import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProjectItem from './ProjectItem';

class Projects extends Component {
	deleteProject(projectId){
		this.props.onDelete(projectId);
	}

	render() {
		let projectItems;
		if(this.props.projects){
			projectItems = this.props.projects.map(project => {
				return(<ProjectItem key={project.title} project={project} onDelete={this.deleteProject.bind(this)}/>);
			});
		}
		return (
			<div className="Projects">
				<h2>My Projects</h2>
				<ul>{projectItems}</ul>
			</div>
		);
	}
}

Projects.propTypes = {
	projects: PropTypes.array,
	onDelete: PropTypes.func
}

export default Projects;
