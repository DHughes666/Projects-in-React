import { useState } from "react";
import { Link } from 'react-router-dom';
import Select from "./options-component";

const Generate = () => {
    const [name, setName] = useState('');
    const [day, setDay] = useState(1);
    const [month, setMonth] = useState(1);
    const [link, setLink] = useState('');

    const generateLink = () => {
        setLink(`https://birthday-chrono.netlify.app/birthday${name}/${day}/{month}`);
    };

    return (
        <div>
            <h1>Generate Here</h1>
            <div>
                <input 
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input 
                    type="number"
                    placeholder="Enter Day"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    max={31}
                    min={1}
                />
                <Select value={month} 
                onChange={(e) => setMonth(e.target.value)}/>
            </div>
            <button className="btn" onClick={() => generateLink()}>
                Generate Link
            </button>

            {link !== '' ? (
                <>
                    <p className="gen-link">{link}</p>
                    <Link to={`birthday/${name}/${day}/${month}`}>
                        <button className="btn">Visit Link</button>
                    </Link>
                </>
            ):('')}
        </div>
    )

}

export default Generate;