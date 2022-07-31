import { CartItems } from '../../type/CartType'
import { ItemProps } from '../../type/ItemType'
import './CartIcon.css'

type CartProps = {
    items: CartItems[];
    openCart: Function
}

function countItems(items: CartItems[]) {
    let count = 0

    items.forEach(element => {
        count = count + element.qty
    })

    return count
}

export function CartIcon(props: CartProps) {

    function handleClick() {
        if(countItems(props.items)> 0) {
            props.openCart()
        }
    }

    return(
        <div className="icon--holder"
            onClick={handleClick}
        >
            <div className="icon--cart">
            <span className="material-symbols-outlined">
                shopping_cart
            </span>
            </div>
            <div className="cart--counter">
                {countItems(props.items)}
            </div>
        </div>
    )
}