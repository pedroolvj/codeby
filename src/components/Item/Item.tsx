type ItemProps = {
    name: string;
    click: Function;
}


export function Item(props: ItemProps) {
    function handleClick() {
        props.click(props.name)
    }

    return (
        <>
            <p>{props.name}</p>
            <button onClick={handleClick} >Comprar</button>
        </>
    )
}