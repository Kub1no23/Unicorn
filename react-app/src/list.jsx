
function List(props) {

    const listItems = props.itemList.map(item => {
        return <li key={item.id}>{item.name}  {item.calories}</li>
    });

    return (
        <>
            <h2 className='list-category'>{props.category}</h2>
            {props.itemList.length > 0 ? <ul className='list-items'>{listItems}</ul> : <p>This list does not contain any items!!!</p>}
        </>
    );
}

export default List