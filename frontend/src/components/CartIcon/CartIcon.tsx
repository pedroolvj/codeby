import './CartIcon.css'

type CartProps = {
    items: string[]
}

export function CartIcon(props: CartProps) {
    return(
        <div className="icon--holder">
            <div className="icon--cart">
                0
            </div>
            <div className="cart--counter">
                {props.items.length}
            </div>
        </div>
    )
}