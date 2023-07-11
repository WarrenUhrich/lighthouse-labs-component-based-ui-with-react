const ListItem = (props) => {
    return (
        <li>
            <input type="checkbox" />
            {props.toDo}
        </li>
    );
};

export default ListItem;