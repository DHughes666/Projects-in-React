const List = ({people, removeItem}) => {
    
    return (
        <>
            {people.map((person) => {
                const {id, name, age, image} = person;
                return (
                    <article key={id} className="person">
                        <img src={image} alt={name} />
                        <div>
                            <h4>{name}</h4>
                            <p>{age}</p>
                        </div>
                        <button className="btn" onClick={() => removeItem(id)}>
                            Remove {name}
                        </button>
                    </article>)
            })}
        </>
    )
}

export default List;