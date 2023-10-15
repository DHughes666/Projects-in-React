import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';
import { useState } from 'react';

const Question = ({title, info}) => {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <article className='question'>
            <header>
                <h4>{title}</h4>
                <button onClick={() => setShowInfo(!showInfo)} className='btn'>
                    {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </header>
            {showInfo && <p>{info}</p>}
        </article>
    )
}

export default Question;