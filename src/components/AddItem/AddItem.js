import React,{Component} from 'react';
import './AddItem.css';

class AddItem extends Component{
    state={
        id:'',
        name:'',
        age:''
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        if(e.target.name.value===''||e.target.age.value===''){
            return false;
        }
        this.props.addItem(this.state);
        this.setState({
            name:'',
            age:''
        })
    }
    render(){
        return(
            <div>
               <form onSubmit={this.handleSubmit}>
                   <input type="text" placeholder="Enter The Name" id="name" onChange={this.handleChange} value={this.state.name}/>
                   <input type="number" placeholder="Enter The Age" id="age" onChange={this.handleChange} value={this.state.age}/>
                   <input type="submit" value="Add Item"/>
               </form>
            </div>
        )
    }
}
export default AddItem;