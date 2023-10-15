import { useState } from "react";
import Menu from "./menu";
import Categories from "./categories";
import items from "./data";

const App = () => {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState([])

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter(item => item.category === category)
    setMenuItems(newItems)
  }

  return (
    <main>
      <section className="menu section">
        <div className='title'>
          <h2>Our Menu</h2>
          <div className="underline"/>
        </div>
        <Categories filterItems={filterItems}/>
        <Menu items={menuItems}/>
      </section>
    </main>
  )
};
export default App;
