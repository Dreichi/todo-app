import React from 'react'

//Dans votre composant TaskList, utilisez la fonction useState pour initialiser l'état local de votreapplication avec une liste de tâches vide. Vous devrez également créer une fonction pour ajouter unenouvelle tâche à la liste.

export default function TaskList(task,props,tasks,setTasks) {
    const{title} = props;
    const addTask = (task) => {
        setTasks([...tasks, task]);
    }

    return (
    <div>
        <ul>
            <li>{title}</li>
            // vérifie si la tâche est complétée ou non en prenant le props completed
            <li>{completed}</li>
            <button onClick={addTask}>Ajouter une tâche</button>
        </ul>
    </div>

  )
}

