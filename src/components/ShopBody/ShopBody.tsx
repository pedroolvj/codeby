import axios from "axios";
import { useEffect, useState } from "react";
import { ItemProps } from "../../type/ItemType";
import { Cart } from "../Cart/Cart";
import { CartIcon } from "../CartIcon/CartIcon";
import { Item } from "../Item/Item";

import './ShopBody.css'

export function ShopBody() {
    const [items, setItems] = useState<ItemProps[]>([]) 

    const [httpRequest, setHttpRequest] = useState(false)

    useEffect(() => {
        axios({
            url: "https://codeby-teste-api.herokuapp.com/",
            method: "GET",
        })
        .then(response => {
            const data: ItemProps[] = response.data.items
            setItems(data)
            console.log(items)
        })
        .catch(error => {
            
        })
    }, [])

    function createItems(data: ItemProps[]) {
        data.forEach((element: ItemProps) => {
            setItems([...items, {
                uniqueId: element.uniqueId,
                name: element.name,
                price: element.price,
                imageUrl: element.imageUrl,
                priceTags: element.priceTags,
                onClick: AddToCart
            }])
        })
    }

    const [cart, setCart] = useState<ItemProps[]>([])

    function AddToCart(item: ItemProps) {
        setCart([...cart, item])
    }

return (
        <>  
            <div className="shop--body">
                <div className="items--container">
                    {items.map(item => {
                        return <Item 
                            key={item.uniqueId}
                            onClick={AddToCart}
                            name={item.name}
                            uniqueId={item.uniqueId}
                            price={item.price}
                            priceTags={item.priceTags}
                            imageUrl={item.imageUrl}
                         />
                    })}
                </div>
                
                <Cart />
            </div>

           { 
           //<CartIcon items={cart}  />
            }
        </>
    )
}