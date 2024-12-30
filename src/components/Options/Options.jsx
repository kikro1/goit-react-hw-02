const Options = ({ value, onUpdate, children}) => {

    return (
        <div>
            <button onClick={onUpdate}>
            {children} {value}
        </button>
        </div>
    );
};

export default Options;