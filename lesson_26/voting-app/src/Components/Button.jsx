export function Button({ bgc, text, handelClick, disabled }) {
    
    return (
        <>
         <button style={{ backgroundColor:bgc}} onClick={handelClick} disabled={!disabled}>{text} </button>
         </>
    )
}