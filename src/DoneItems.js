import React from 'react';

class DoneItems extends React.Component {

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
		const listItems = this.props.entries.map(doneItems =>
			<div className = "field"  key = {doneItems.id}>
				<div className = "ui checkbox">
					<input type = "checkbox" onChange = {() => this.removeItem(doneItems.id)}/>
					<label className = "item" checked = {doneItems.completed} >{doneItems.text}</label>
				</div>
				<button className ="mini ui icon button" onClick={() => { this.removeItem(doneItems.id)}}><i className ="minus circle icon"></i></button>
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

export default DoneItems