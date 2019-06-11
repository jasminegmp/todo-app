import React from 'react';

class TodoItems extends React.Component {

	constructor(props){
		super(props);
	}

	delete(id){
		this.props.delete(id);
	}

	check(id){
		this.props.check(id);
	}

	render(){
		const listItems = this.props.entries.map(item =>
			<div className = "field"  key = {item.id}>
				<div className = "ui checkbox">
					<input type = "checkbox"/>
					<label className = "item" checked = {item.completed} onChange = {() => this.check(item.id)}>{item.text}</label>
				</div>
				<button className ="mini ui icon button" onClick = {() => this.delete(item.id)} ><i className ="minus circle icon"></i></button>
			</div>
		)
		return(
			<div>{listItems}</div>
		)
	}

}

export default TodoItems