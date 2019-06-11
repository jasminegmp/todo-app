import React from 'react';
import ToDoItems from './ToDoItems';
//import todosData from './todosData';

class App extends React.Component {

	constructor (props){
		super(props);
		this.state = {
			items: [],
      newItem: ''
		}

    this.addNewItem = this.addNewItem.bind(this);
    this.newItemBuffer = this.newItemBuffer.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);

	}


  // adds to state.newItem on add button click
  addNewItem(event){
    const newItem = {id: (this.state.items.length),
                    text: this.state.newItem,
                    completed: false
    }

    this.setState((prevState) => {
      return { 
        items:  prevState.items.concat(newItem) 
      };
    });
    this.setState({newItem: ''});
    console.log(this.state.items);
    event.preventDefault();
  }

  // figures out what's to be added on input update
  newItemBuffer(event){
    this.setState({newItem: event.target.value});  
  }

  deleteItem(id){
    const filteredItems = this.state.items.filter( function (item){
      return (item.id !== id)
      }
    );
    this.setState({items:filteredItems});
  }

  handleCheckbox(id){
    this.setState(prevState => {
      const updatedTodo = prevState.todos.map( todo => {
        if (todo.id === id)
        {
          todo.completed = !todo.completed
        }
        return todo;
      })
      return {
        todos: updatedTodo
    
      }
    })

  }


	render(){
		
    //<ToDoItem todos = {this.state.todos} />
		return (
			<div className="App">
        <form onSubmit = {this.addNewItem}>
          <div className ="ui action input">
            <input type="text" placeholder="Enter Task..." onChange = {this.newItemBuffer} value={this.state.newItem}/>
            <button className ="ui button" type = "submit" onClick = {this.addNewItem} >+</button>
          </div>
          </form>
        <ToDoItems entries = {this.state.items} delete = {this.deleteItem} check = {this.handleCheckbox}/>
     
			</div>

		);
  	}

}

export default App;


