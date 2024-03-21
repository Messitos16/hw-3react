import React, { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskFrom';
import Card from './components/Card'
import data from './data/data.json'
function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(data)
  // const [color, setColor] = useState('')

  function onChange(e) {
    setSearchTerm(e.target.value);
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredData(filtered);
  }
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="App">

    <input onChange={onChange} type="text" />

      <h1>Task Manager</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} />
    <div className='container'>
      {
        filteredData.map((item) =>
          <Card
            key={item.id}
            price={item.price}
            oldPrice={item.oldPrice}
            description={item.description}
            title={item.title}
            img={item.image}
          />)
        }
        </div>
  </div>


  );
}

export default App;
