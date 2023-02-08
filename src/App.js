import './App.css';
import TaskList from './Components/TaskList';
import React from 'react';

// Ce composant devra prendre en entrée une liste de tâches sous forme de tableau et les afficher à l'aide d'une fonction map.

function App() {
  const [tasks] = React.useState([{
    title: 'Faire les courses',
    completed: false,
}, {
    title: 'Faire la vaisselle',
    completed: false
}])
  return (
    <div className="App">
      {tasks.map((todo, index) => {
        return <TaskList key={index} title={todo.title} completed={todo.completed} />;
        // permet d'ajouter une tache a la liste



      })}
    </div>

  );
}

export default App;
