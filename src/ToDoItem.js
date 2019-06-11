import React from 'react';

function ToDoItem (props) {
	console.log(props.todos);
	const mappedToDos = props.todos.map(todos => <div key={todos.id}>{todos.text}</div>);
	return (
		<div>
			{mappedToDos}
		</div>
	);
}

export default ToDoItem;