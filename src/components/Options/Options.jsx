// import { useState } from "react";
const Options = ({ value, onUpdate, children}) => {
    // const [good, setGood] = useState(0);

    return (
        <div>
            <button onClick={onUpdate}>
            {children} {value}
        </button>
        {/* <button onClick={onUpdate}>
            Neutral: {value}
        </button>
        <button onClick={onUpdate}>
            Bad: {value}
        </button>
        <button onClick={onUpdate}>
            Reset: {value}
        </button> */}
        </div>

        // <button onClick={onUpdate}>
        //     Good: {value}
        // </button>
        
    );
};

export default Options;