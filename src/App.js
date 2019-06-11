import React from 'react';
import ToDoItem from './ToDoItem';
import todosData from './todosData';

class App extends React.Component {

	constructor (props){
		super(props);
		this.state = {
			todos: todosData
		}
	}

	// good place to do data loading
	//update this state
	componentDidMount(){
		//const todoItems = this.state.todos.map(item => <ToDoItem key={item.id} item={item} />);
		//this.setState((state) => ({todos: todoItems}));
		console.log(this.state.todos);
	}


	render(){
		
		return (
			<div className="App">
			</div>
		);
  	}

}

export default App;


