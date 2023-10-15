import { useState } from "react";
import Menu from "./menu";
import Categories from "./categories";
import items from "./data";

// This returns all categories, which isn't okay because 
// there are duplicates
// const allCategories = items.map((item) => item.category)

// This returns unique values for categories
// const allCategories = new Set(items.map((item) => item.category))

// In order to add 'all' to the categories list we use the spread operator
const allCategories = ['all', ...new Set(items.map((item) => item.category))]

const App = () => {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

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
        <Categories categories={categories} filterItems={filterItems}/>
        <Menu items={menuItems}/>
      </section>
    </main>
  )
};
export default App;
