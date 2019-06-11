import React from 'react';

class TodoItems extends React.Component {

	constructor(props){
		super(props);
	}

	removeItem(id){
		this.props.deleteItem(id);
	}

	checkItem(id){
		this.props.updateCheckedItem(id);
	}


	render(){
		const listItems = this.props.entries.map(item =>
			<div className = "field"  key = {item.id}>
				<div className = "ui checkbox">
					<input type = "checkbox" onChange = {() => this.checkItem(item.id)}/>
					<label className = "item" checked = {item.completed} >{item.text}</label>
				</div>
				<button className ="mini ui icon button" onClick={() => { this.removeItem(item.id)}}><i className ="minus circle icon"></i></button>
			</div>
		)

		return(
			<div>
				<div>{listItems}</div>
				<div class="ui divider"></div>
			</div>
		)
	}

}

export default TodoItems