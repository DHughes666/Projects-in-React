import { useState } from 'react';
import data from './data';
import Question from './singleQuestion';

const App = () => {
  const [questions, setQuestions] = useState(data)
  return (
    <main>
      <div className='container'>
        <h3>Questions and answers about login</h3>
        <br />
        <section className='info'>
          {
            questions.map((question) => {
              return <Question key={question.id} {...question} />
            })
          }
        </section>
      </div>
    </main>
  )
};
export default App;
