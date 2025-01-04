// const Options = ({ value, onUpdate, children}) => {

//     return (
//         <div>
//             <button onClick={onUpdate}>
//             {children} {value}
//         </button>
//         </div>
//     );
// };

// export default Options;

const Options  = ({ onFeebback, onReset, hasFeedback }) => {

    return (
        <div>
            <button onClick={() => onFeebback('good')}>Good</button>
            <button onClick={() => onFeebback('neutral')}>Neutral</button>
            <button onClick={() => onFeebback('bad')}>Bad</button>
            {hasFeedback && <button onClick={onReset}>Reset</button>}
        </div>
    );
};

export default Options;