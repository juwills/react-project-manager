import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProjectItem extends Component {
	deleteProject(projectId){
		this.props.onDelete(projectId)
	}

	render() {
		return (
			<li className="ProjectItem">
				<strong>{this.props.project.title}</strong> - <a onClick={this.deleteProject.bind(this, this.props.project.id)}>Delete</a>
			</li>
		);
	}
}

ProjectItem.propTypes = {
	project: PropTypes.object,
	onDelete: PropTypes.func
}

export default ProjectItem;
