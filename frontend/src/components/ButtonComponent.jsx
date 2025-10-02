const ButtonComponent = ({ icon, btnStyle, onClick }) => {
    return (
        <button onClick={onClick} className={`btn btn-${btnStyle}`} type="button">
            <i className={`bi bi-${icon}`}></i>
        </button>
    );
};

export default ButtonComponent;