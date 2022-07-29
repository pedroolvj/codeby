type CartProps = {
    items: string[]
}

export function Cart(props: CartProps) {
    return(
        <p>
            {props.items.length}
        </p>   
    )
}