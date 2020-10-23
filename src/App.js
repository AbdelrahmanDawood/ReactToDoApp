import React,{Component} from 'react';
import ToDoItems from './components/ToDoItems/ToDoItems';
import AddItem from './components/AddItem/AddItem';
import './App.css';

class App extends Component{
  state={
    items:[
      {id:1,name:'Abdelrahman',age:25},
      {id:2,name:'Mai',age:31},
      {id:3,name:'Dina',age:35}
    ]
  }
  delete=(id)=>{
    const items=this.state.items.filter(e=>{return e.id!==id});
    this.setState({
      items:items
    })
  }
  addItem=(item)=>{
    item.id=Math.random();
    const items=this.state.items;    
    items.push(item);
    this.setState({
      items:items
    })
  }
  render() {
    return (
      <div className="App container">
        <h1 className="text-center">To Do App</h1>
        <ToDoItems items={this.state.items} deleteItem={this.delete}/>
        <AddItem addItem={this.addItem}/>
      </div>
    );
  }  
}

export default App;
