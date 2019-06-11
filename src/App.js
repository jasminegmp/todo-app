import React from 'react';
import ToDoItems from './ToDoItems';
//import todosData from './todosData';

class App extends React.Component {

	constructor (props){
		super(props);
		this.state = {
			items: [],
      newItem: '',
      isSubmitted: false
		}
    this.addNewItem = this.addNewItem.bind(this);
    this.newItemBuffer = this.newItemBuffer.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

	}

	// good place to do data loading
	//update this state
	componentDidMount(){
		//const todoItems = this.state.todos.map(item => <ToDoItem key={item.id} item={item} />);
		//this.setState((state) => ({todos: todoItems}));
		//console.log(this.state.todos);
	}


  // adds to state.newItem on add button click
  addNewItem(event){
    const newItem = {id: (this.state.items.length),
                    text: this.state.newItem,
                    completed: false
    }

    this.setState((prevState) => {
      return { 
        items:  prevState.items.concat([newItem]) 
      };
    });
    this.setState({newItem: ''});
  }

  // figures out what's to be added on input update
  newItemBuffer(event){
    this.setState({newItem: event.target.value});  
  }

  handleSubmit(event){
    this.setState({isSubmitted: true})
    event.preventDefault();
  }

	render(){
		
    //<ToDoItem todos = {this.state.todos} />
		return (
			<div className="App">
        <form onSubmit={this.handleSubmit}>
          <div className ="ui action input">
            <input type="text" placeholder="Enter Task..." onChange = {this.newItemBuffer}/>
            <button className ="ui button" onClick={this.addNewItem}>+</button>
          </div>
          
        </form>
        {this.state.isSubmitted && <ToDoItems items = {this.state.items}/>}
			</div>
		);
  	}

}

export default App;


