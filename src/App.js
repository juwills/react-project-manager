import React, { Component } from 'react';
import uuid from 'uuid';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import './App.css';

class App extends Component {
	constructor(){
		super();
		this.state = {
			projects: []
		}
	}

	componentWillMount(){
		this.setState({
			projects: [
				{
					id: uuid.v4(),
					title: 'ACME Website',
					category: 'Website'
				},
				{
					id: uuid.v4(),
					title: 'ACME Email Campaign',
					category: 'Emails'
				},
				{
					id: uuid.v4(),
					title: 'ACME Banners',
					category: 'Banners'
				}
			]
		});
	}

	saveNewProject(newProject){
		let allProjects = this.state.projects;
		allProjects.push(newProject);
		this.setState({
			projects: allProjects
		});
	} 

	deleteProject(projectId){
		let allProjects = this.state.projects;
		let index = allProjects.findIndex(x => x.id === projectId);
		allProjects.splice(index, 1);
		this.setState({
			projects: allProjects
		});
	} 


	render() {
		return (
			<div className="App">
				<h1>Project Management App</h1>
				<AddProject saveProject={this.saveNewProject.bind(this)}/>
				<Projects projects={this.state.projects} onDelete={this.deleteProject.bind(this)}/> 
			</div>
		);
	}
}

export default App;
