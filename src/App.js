import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';


function App() {
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: "walk the dog",
        day: "Feb 5th at 2:30pm",
        reminder: false,
      },
      {
        id: 2,
        text: "drop of dry-cleaning",
        day: "Feb 6th at 3:30pm",
        reminder: false,
      }
    ]
  );

  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter(
      (task) => task.id !== id )
    )
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map(
      (task) => task.id === id
        ? { ...task, reminder: !tasks.reminder } : task )
    )
  }

  const addTask = (task) => {
    
  }

  return (
    <div className='container'>
      <Header />
      <AddTask onAdd={addTask} />
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
    </div>
  );
}


export default App;
