import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <button
            className='btn'
            onClick={() => setCount(count + 1)}
            style={{ marginBottom: '1rem' }}
            >
            count {count}
            </button>
        </div>
    )
}

export default Counter;