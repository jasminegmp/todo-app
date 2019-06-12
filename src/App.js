import React from 'react';
import ToDoItems from './ToDoItems';
import DoneItems from './DoneItems';
import todosData from './todosData';
import './App.css';



class App extends React.Component {

	constructor (props){
		super(props);
		this.state = {
			items: [],
      newItem: '',
      doneItems: [],
      weekday: new Date().getDay(),
      month: new Date().getMonth(),
      day: new Date().getDate(),
      year: new Date().getFullYear()
		}

    this.addNewItem = this.addNewItem.bind(this);
    this.newItemBuffer = this.newItemBuffer.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.updateCheckedItem = this.updateCheckedItem.bind(this);
    this.deleteDoneItem = this.deleteDoneItem.bind(this);
    

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

    const filteredItems = this.state.items.filter(item => {
      return (item.id !== id)
      }
    );
    this.setState({items:filteredItems});


  }

  deleteDoneItem(id){

    const filteredItems = this.state.doneItems.filter(item => {
      return (item.id !== id)
      }
    );
    this.setState({doneItems:filteredItems});


  }

  updateCheckedItem(id){

    this.setState(prevState => {
      const updatedTodo = prevState.items.map( item => {
        if (item.id === id)
        {
          item.completed = !item.completed
        }
        return item;
      })
      return {
        items: updatedTodo
    
      }
    })

    const doneItem = this.state.items.filter(item => {
      return (item.id === id)
      }
    );

    this.setState((prevState) => {
      return { 
        doneItems:  prevState.doneItems.concat(doneItem) 
      };
    });

    this.deleteItem(id);

  }


	render(){
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
      ];
    const weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		return (
			<div className="ui grid App">
        <div className="sixteen wide column">
          {`${weekdayNames[this.state.weekday]}` + ", " + `${this.state.day}` + " " + `${monthNames[this.state.month]}` +  " "+ +`${this.state.year}`}
        </div>
        <div className="sixteen wide column">
          <h1>To Do List</h1>
          <ToDoItems entries = {this.state.items} deleteItem = {this.deleteItem} updateCheckedItem = {this.updateCheckedItem}/>
        </div>
        <div className="sixteen wide column">
          <DoneItems entries = {this.state.doneItems} deleteDoneItem = {this.deleteDoneItem}/>
        </div>
        <div className="sixteen wide column">
          <form onSubmit = {this.addNewItem}>
            <div className ="ui action input">
              <input  type="text" placeholder="add task..." onChange = {this.newItemBuffer} value={this.state.newItem}/>
              <button className ="ui button" type = "submit" onClick = {this.addNewItem} >+</button>
            </div>
            </form>
        </div>
			</div>

		);
  	}

}

export default App;


