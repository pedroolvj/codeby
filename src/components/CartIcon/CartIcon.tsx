import { CartItems } from '../../type/CartType'
import { ItemProps } from '../../type/ItemType'
import './CartIcon.css'

type CartProps = {
    items: CartItems[]
}

function countItems(items: CartItems[]) {
    let count = 0

    items.forEach(element => {
        count = count + element.qty
    })

    return count
}

export function CartIcon(props: CartProps) {
    return(
        <div className="icon--holder">
            <div className="icon--cart">
                0
            </div>
            <div className="cart--counter">
                {countItems(props.items)}
            </div>
        </div>
    )
}