import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import { useState } from 'react';

function TodoContainer() {

    const [activityArr,setactivityArr]=useState([
        {
            id:1,
            activity:"Go for a walk"
        },

        {
            id:2,
            activity:"Define your vision."
        },
        {
            id:3,
            activity:"Measure and evaluate results"
        },
        {id:4,
            activity:"Determine your priorities and objectives."}
    ])
    return (
        <div>
            <div className="flex flex-wrap gap-5 ">
            <AddTodoForm activityArr={activityArr} setactivityArr={setactivityArr}/>
                <TodoList activityArr={activityArr} setactivityArr={setactivityArr}/>
            </div>
           
        </div>
    )
}
export default TodoContainer;