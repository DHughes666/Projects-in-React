import { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

const App = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  return (<h2>Slider setup</h2>)
}

export default App;