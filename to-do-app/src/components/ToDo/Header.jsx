const Header = (props) => {
    return (
        <h2>
            {props.title ? props.title : 'To Do Component'}
        </h2>
    );
};

export default Header;
