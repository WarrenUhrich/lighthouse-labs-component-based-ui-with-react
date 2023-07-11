import ListItem from "./ListItem";

const List = (props) => {
    const uncompletedTasks = props.tasks.filter(task => task.completed === false);

    return (
        <ul>
            {uncompletedTasks.map((task, index) => <ListItem
                    key={index}
                    toDo={task.toDo}
                    completed={task.completed}
                />)}
        </ul>
    );
};

export default List;
