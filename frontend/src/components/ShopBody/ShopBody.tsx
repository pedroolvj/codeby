import { useState } from "react";
import { Cart } from "../Cart/Cart";
import { CartIcon } from "../CartIcon/CartIcon";
import { Item } from "../Item/Item";

import './ShopBody.css'

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
            <div className="shop--body">
                <div className="items--container">
                    {items.map(item => {
                        return <Item click={AddToCart}  name={item}  key={item} />
                    })}
                </div>
                
                <Cart />
            </div>

            <CartIcon items={cart}  />
        </>
    )
}