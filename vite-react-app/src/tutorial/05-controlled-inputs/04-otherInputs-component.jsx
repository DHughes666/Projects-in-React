import { useState } from "react";

const frameworks = ['react', 'angular', 'vue', 'svelte', 'django']

const OtherInputs = () => {
    const [shipping, setShipping] = useState(false);
    const [framework, setFramework] = useState('react');

    const handleFramework = (e) => {
        setFramework(e.target.value);
    }

    const handleShipping = (e) => {
        setShipping(e.target.checked);
    }
    
    return (
        <div>
            <form className="form">
                <h4>Other Inputs</h4>
                <div className="form-row" style={{ textAlign: 'left'}}>
                    <label htmlFor="shipping"> Free Shipping </label>
                    <input 
                    type="checkbox" 
                    name="shipping" 
                    id="shipping" 
                    checked={shipping}
                    onChange={handleShipping} />
                </div>
                <div className="form-row" style={{textAlign: 'left'}}>
                    <label htmlFor="framework" 
                    className="form-label"> Framework </label>
                    <select 
                    id="framework" 
                    name="framework" 
                    value={framework} 
                    onChange={handleFramework}>
                        {frameworks.map((framework) => {
                            return <option key={framework}>{framework}</option>
                        })}
                    </select>
                </div>
                <button type="submit" className="btn btn-block">
                    submit
                </button>
            </form>
        </div>
    )
}

export default OtherInputs;