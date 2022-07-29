import { useState } from "react";
import { Cart } from "../Cart/Cart";
import { Item } from "../Item/Item";

export function ShopBody() {
    const [items, setItems] = useState<string[]>([
        'bombom',
        'bala',
        'chocolate'
    ])

    const [cart, setCart] = useState<string[]>([])

    function AddToCart(addItem: string) {
        setCart([...cart, addItem])
    }

    return (
        <>
            <Item click={AddToCart} name="barra de chocolate" />
            
            {items.map(item => {
                return <Item click={AddToCart}  name={item}  key={item} />
            })}

            <Cart items={cart}  />
        </>
    )
}