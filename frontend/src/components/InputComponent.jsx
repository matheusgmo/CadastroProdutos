const InputComponent = ({ type, name, placeholder, value, onChange }) => {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="form-control"
        />
    );
};

export default InputComponent;