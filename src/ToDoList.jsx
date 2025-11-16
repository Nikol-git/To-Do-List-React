import React, {useState} from 'react';

function ToDoList(){

const [tasks, SetTasks] = useState([]);
const [newTask, SetNewTask] = useState("");


function handleInputChange(event){
SetNewTask(event.target.value)
}

function addTask(){
    if(newTask.trim()!==""){
        SetTasks(t => [...t , newTask]);
        SetNewTask("");
    }

}

function deleteTask(index){
    const  updatedTasks = tasks.filter((_, i ) => i !== index)
    SetTasks(updatedTasks);

}

function moveTaskUp(index){
    if(index > 0){
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index - 1]]=
        [updatedTasks[index - 1], updatedTasks[index]];
    
    SetTasks(updatedTasks);
    }

}

function moveTaskDown(index){
      if(index < tasks.length - 1){
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index + 1]]=
        [updatedTasks[index + 1], updatedTasks[index]];

        SetTasks(updatedTasks);
    }

}




    return(
        <div className="to-do-list">
            <h1>To-Do-List</h1>

            <div>
              <input type="text"
               placeholder="Enter A Task"
               value={newTask}
               onChange={handleInputChange}/>
         <button 
           className="add-button"
           onClick={addTask}>
            Add Task
        </button>
            </div>

            <ol>
                {tasks.map((task, index) =>
                  <li key={index}>
                    <span className="text">{task}</span>
                    <button
                       className="delete-button"
                       onClick={() => deleteTask(index)}>
                       Delete
                    </button>

                    <button 
                       className="move-button"
                       onClick={() => moveTaskUp(index)}>
                       move up
                    </button>

                     <button 
                       className="move-button"
                       onClick={() => moveTaskDown(index)}>
                       move down
                    </button>
                  </li>
                )}

            </ol>

        </div>
    )
}

export default ToDoList