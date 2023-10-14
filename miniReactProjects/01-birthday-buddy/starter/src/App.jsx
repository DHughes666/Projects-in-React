import { useState } from "react";
import data from "./data";
import List from "./list";

const App = () => {
  const [people, setPeople] = useState(data)
  
  const removeItem = (id) => {
    setPeople(people.filter(p => p.id !== id))
  }
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} removeItem={removeItem}/>
        {people.length < 1 ? (
          <>
        <button className="btn btn-block" onClick={() => setPeople(data)}>
          Show Birthdays
        </button>
          </>
        ) : (
          <button className="btn btn-block" onClick={() => setPeople([])}>
          Clear all
          </button>
        )}
      </section>
    </main>
  )
};
export default App;
