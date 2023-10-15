import {FaGithubSquare} from 'react-icons/fa';
import Review from './review';

const App = () => {
  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h2>Our reviews</h2>
          <div className='underline'/>
          <Review />
        </div>
      </section>
    </main>
  )
};
export default App;
