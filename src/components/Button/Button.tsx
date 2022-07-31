type ButtonProps = {
    onClick: Function
}

export function Button(props: ButtonProps) {
    function handleClick() {
        props.onClick()
    }
    return(
        <button onClick={handleClick}>Comprar</button>
    )
}