import React from 'react';

function ToDoItem (props) {
	console.log(props);
	return (
		<div>
			<p>{props.item.id}</p>
		</div>
	);
}

export default ToDoItem;