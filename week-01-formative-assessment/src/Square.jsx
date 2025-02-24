import"./index.css";

const Square = (props) =>{
    const style = {
        border: "1px solid #000",
        cursor: "pointer",
        fontSize: "30px",
        fontWeight: "800",
        outline: "none",
    };

return(
    <button style={style} onClick={props.onClick}>
        {props.value}
    </button>
)
};

export default Square;