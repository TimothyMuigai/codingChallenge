

const Lists = (props) => { 
    
    const itemLists = props.items;

    const listItems = itemLists.map(item => 
        <li key={item.id} className="relative w-96 list-none">
            <img className="w-52"
                src={item.image}
                alt={item.name}
            />
            <h1 className="z-10 absolute top-0 text-[#00FFFF] text-lg bg-black">{item.name}</h1>
        </li>
    );

    return <ol>{listItems}</ol>
}

export default Lists