import React from 'react';

function TodoItems(props) {
	
	const todoItems = props.items.map(item => <li key={item.id}>{item.text}</li>);
	return(
	<div className = "field">
		<div class = "ui checkbox">
			<input type = "checkbox"
				checked = {todoItems.completed} 
			/>
			<label className = "item">{todoItems.text}</label>
		</div>
	</div>
	)	


}

export default TodoItems