import { CartItems } from '../../type/CartType';
import { ItemProps } from '../../type/ItemType'
import './Cart.css'

type CartProps = {
    items: CartItems[];
}

function calcDiscountValue(item: ItemProps) {
    let discounts = item.priceTags

    let value = item.price
    discounts.forEach(element  => {
        value = value + element.value
    })

    let calc = value / 100

    return (value / 100).toFixed(2);
}

function calcCartValue(cart: CartItems[]) {
    let value = 0.00
    
    cart.forEach(element => {
        let itemPrice: any = calcDiscountValue(element.item)
        value = value + itemPrice * element.qty
    });

    return value
}

export function Cart(props: CartProps) {
    return(
        <div className="cart--body">
            <h1 className="cart--title">Meu carrinho</h1>
            <hr />
            <div className="cart--items">
                {props.items.map(item => {
                    return (
                        <div className="cart--item">
                            <div className="cart--item--pic">
                                <img src={item.item.imageUrl} alt="Item image" />
                            </div>
                            <div className="cart--item--information">
                                <div className="item--name">
                                    {item.item.name}
                                </div>
                                <div className="item--value">
                                    {(item.item.price / 100).toFixed(2)}
                                </div>
                                <div className="item--discount--value">
                                    {calcDiscountValue(item.item)}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="free--shipping">
                {calcCartValue(props.items) > 10 ? 'Free' : 'Not free'}
            </div>
        </div>
    )
}