// import './App.css';
// import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/tasks/');
      setTasks(response.data);
    } catch (error) {
      console.log('Error fetching tasks:', error);
    }
  };
  
  const handleSaveTask = async (taskData) => {
    try {
      const currentDate = new Date().toISOString().split('T')[0]; // Get current date in 'YYYY-MM-DD' format
  
      taskData.created_date = currentDate;
      taskData.due_date = currentDate;
      taskData.close_date = currentDate;
  
      const response = await axios.post('http://127.0.0.1:8000/api/tasks/', taskData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Task saved:', response.data);
      fetchTasks(); // Refresh the task list after saving
    } catch (error) {
      console.log('Error saving task:', error);
    }
  };

  return ( 
           <div >
    
            <div className='text-center'>  
             <TaskForm onSave={handleSaveTask} />
             </div>
               <TaskList tasks={tasks} />
    
      
    </div>
  );
};

export default App;
