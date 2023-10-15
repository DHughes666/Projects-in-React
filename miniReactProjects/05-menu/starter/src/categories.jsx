

const Categories = ({filterItems}) => {
    
    return (
        <div className="btn-container">
            <button onClick={() => filterItems('all')} className="filter-btn">
                All
            </button>
            <button onClick={() => filterItems('breakfast')} className="filter-btn">
                Breakfast
            </button>
            <button onClick={() => filterItems('lunch')} className="filter-btn">
                Lunch
            </button>
        </div>
    )
}

export default Categories;