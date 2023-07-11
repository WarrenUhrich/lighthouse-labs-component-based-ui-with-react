import { useState } from 'react';

import Header from "./Header";
import Form from "./Form";
import List from "./List";

const ToDo = () => {
    const headerProps = {title: 'React To-Dos!'};

    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState([
        {toDo: 'Buy Milk', completed: false},
        {toDo: 'Study React', completed: true}
    ]);

    const addTaskToList = () => {
        setTasks(prev => {
            const newTaskList = [
                ...prev, // Our old tasks...
                { // Our new task!
                    toDo: newTask,
                    completed: false
                }
            ];

            setNewTask(''); // Empty task field.

            return newTaskList;
        });

    };

    return (
        <section>
            <Header {...headerProps} />
            <Form
                newTask={newTask}
                setNewTask={setNewTask}
                addTaskToList={addTaskToList}
                />
            <List tasks={tasks} />
        </section>
    );
};

export default ToDo;
