function Elements(props) {
    return (
    <>
        <h1>{props.title}</h1>
        <input type="checkbox" checked={props.completed}/>
    </>
    );
}

export default Elements;