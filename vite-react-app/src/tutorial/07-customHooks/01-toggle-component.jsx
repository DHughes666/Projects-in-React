import { useState } from 'react';

const ToggleExample = (defaultValue) => {
  const [show, setShow] = useState(defaultValue);
  const toggle = () => {
    setShow(!show);
  };
  
  return (
    <div>
      <h4>toggle custom hook</h4>
      <button className='btn' onClick={() => setShow(!show)}>
        toggle
      </button>
      {show && <h4>some stuff</h4>}
    </div>
  );
};

export default ToggleExample;
