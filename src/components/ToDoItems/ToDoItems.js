import React from 'react';
import './ToDoItems.css';

const ToDoItems=(props)=>{
    const {items,deleteItem}=props;
    const length=items.length;
    const listItems=length?
        (items.map(e=>{        
            return(
                <div key={e.id}>
                    <span className="name">{e.name}</span>
                    <span className="age">{e.age}</span>
                    <span className="action icon" onClick={()=>deleteItem(e.id)}>&times;</span>
                </div>
            )})
        ):
        (<p>No Items To Show</p>);
    return(
        <div className="list-items">
            <div>
                <span className="name title">Name</span>
                <span className="age title">Age</span>
                <span className="action title">Action</span>
            </div>
            {listItems}
        </div>
    )
}
export default ToDoItems;