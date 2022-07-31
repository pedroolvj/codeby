import { CartItems } from '../../type/CartType';
import { ItemProps } from '../../type/ItemType'
import { Button } from '../Button/Button';
import './Cart.css'

type CartProps = {
    items: CartItems[];
    handleItems: Function;
    cartOpened: boolean;
    handleCartOpen: Function;
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

    function handleCartOpened() {
        props.handleCartOpen()
    }

    function removeItem(item: ItemProps) {
        props.handleItems(false, item)
    }

    function addItem(item: ItemProps) {
        props.handleItems(true, item)
    }

    function calcFreeShipping() {
        const freeShipping = calcCartValue(props.items)
        if(freeShipping > 10) {
            return (
            <div className="free--shipping">
                Parabéns, sua compra tem frete grátis!
            </div>
            )
        } else {
            return <></>
        }
    }

    window.addEventListener("resize", e => {
        verifyBackToShop()
    })

    function verifyBackToShop() {
        if(window.innerWidth < 768) {
            return(
                <div className="back--to--shop">
                    <Button label='Voltar a comprar' onClick={handleCartOpened}  />
                </div>
            )
        }
    }

    function buy() {

    }

    return(
        <div className={`cart--body ${props.cartOpened ? 'cart--body--opened' : ''}`}>
            <h1 className="cart--title">Meu carrinho</h1>
            <hr />
            <div className="cart--items">
                <span className={props.items.length == 0 ? 'empty--cart' : ''}>{props.items.length == 0 ? 'Seu carrinho está vazio.' : ''}</span>
                {props.items.map(item => {
                    return (
                        <div className="cart--item" key={item.item.uniqueId}>
                            <div className="cart--item--pic">
                                <img className='item--pic' src={item.item.imageUrl} alt="Item image" />
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
                                <div className="item--controls">
                                    <button className="item--control minus"
                                        onClick={event => removeItem(item.item)}
                                    >
                                        -
                                    </button>
                                    <span className='qnty'>{item.qty}</span>
                                    <button className='item--control plus'
                                        onClick={event => addItem(item.item)}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            {verifyBackToShop()}
            <hr />
            <div className="total--holder">
                <div className="total--container">
                    <div className="total">
                        Total
                    </div>
                    <div className="total--value">
                        R$ {calcCartValue(props.items).toFixed(2)}
                    </div>
                </div>
                {calcFreeShipping()}
            </div>
            <hr />
            <div className="button--holder">
                <Button onClick={buy} label="Finalizar compra"/>
            </div>
        </div>
    )
}