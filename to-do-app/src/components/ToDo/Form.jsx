const Form = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        props.addTaskToList();
    };

    const handleChange = (event) => {
        const currentTypedInValue = event.target.value;
        props.setNewTask(currentTypedInValue);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter new task:
                <input
                    type="text"
                    onChange={handleChange}
                    value={props.newTask}
                    />
            </label>
            <button type="submit">
                Add To-Do
            </button>
        </form>
    );
};

export default Form;
