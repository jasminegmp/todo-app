import React from 'react';

class TodoItems extends React.Component {

	render(){
		const listItems = this.props.entries.map(item => <li key = {item.id}>{item.text}</li>);
		return(
			<p>{listItems}</p>
		)
	}

}

export default TodoItems