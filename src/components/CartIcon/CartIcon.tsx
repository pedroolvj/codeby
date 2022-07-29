type CartProps = {
    items: string[]
}

export function CartIcon(props: CartProps) {
    return(
        <p>
            {props.items.length}
        </p>   
    )
}