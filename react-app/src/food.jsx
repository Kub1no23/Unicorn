
function Food(props) {

    const listItems = props.itemList.map(item => {
        return <li key={item.id}>{item.name}  {item.calories}</li>
    });

    return (
        <>
            <h2>{props.category}</h2>
            <ul>{listItems}</ul>
        </>
    );
}

export default Food