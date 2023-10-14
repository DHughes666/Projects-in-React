import { useState, useEffect } from "react";
import Loading from "./loading";
import Tours from "./tours";

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  const fetchTours = async () => {
    setLoading(true);
    
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (err) {
      setLoading(false);
      console.log(err.message);
    }
  }

  useEffect(() => {
    fetchTours();
  }, [])


  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if(tours.length < 1) {
    return <main>
      <div className="title">
        <h2>No tours left</h2>
        <button onClick={() => fetchTours()} className="btn btn-block">
         Refresh
        </button>
      </div>
    </main>
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  )
};
export default App;
