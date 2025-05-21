
function Food(props) {

    const listItems = props.itemList.map(item => {
        return <li key={item.id}>{item.name}  {item.calories}</li>
    });

    return (
        <ul>{listItems}</ul>
    );
}

export default Food