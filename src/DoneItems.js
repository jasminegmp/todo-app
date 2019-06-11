import React from 'react';

class DoneItems extends React.Component {


	removeDoneItem(id){
		this.props.deleteDoneItem(id);
	}



	render(){
		const completedStyle = {
			color: '#34b1ba',
			textDecoration: "line-through",
			fontWeight: 400
		}

		const listItems = this.props.entries.map(doneItems =>
			<div className = "field"  key = {doneItems.id}>
				<label className = "item" style = {completedStyle}>{doneItems.text}</label>
				<button className ="mini ui icon button" onClick={() => { this.removeDoneItem(doneItems.id)}}><i className ="minus circle icon"></i></button>
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