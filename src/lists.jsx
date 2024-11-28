

const Lists = (props) => { 
    
    const itemLists = props.items;

    const listItems = itemLists.map(item => 
        <li key={item.id}>
            {/* <img
                src={item.image}
                alt={item.name}
            /> */}
            <h1 className="text-red-400 font-extrabold text-4xl">{item.name}</h1>
        </li>
    );

    return <ol>{listItems}</ol>
}

export default Lists