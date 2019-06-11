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
        items:  prevState.items.concat(newItem) 
      };
    });
    this.setState({newItem: ''});
    this.setState({isSubmitted: true});
    console.log(this.state.items);
    
  }

  // figures out what's to be added on input update
  newItemBuffer(event){
    this.setState({newItem: event.target.value});  
  }

  handleSubmit(){
    console.log("hit");
    if (this.isSubmitted === true){
      
      this.setState({isSubmitted:false});
      return <ToDoItems entries = {this.state.items} />
    }

    
  }

	render(){
		
    //<ToDoItem todos = {this.state.todos} />
		return (
			<div className="App">
          <div className ="ui action input">
            <input type="text" placeholder="Enter Task..." onChange = {this.newItemBuffer} value={this.state.newItem}/>
            <button className ="ui button" type = "submit" onClick = {this.addNewItem}>+</button>
          </div>
        {this.handleSubmit()}
     
			</div>

		);
  	}

}

export default App;


