import axios from "axios";
import { useEffect, useState } from "react";
import { CartItems } from "../../type/CartType";
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

    const [cart, setCart] = useState<CartItems[]>([])

    function AddToCart(addItem: ItemProps) {
        let newArr: CartItems[] = [...cart]

        const arrIndex = newArr.findIndex(
            (element) => element.item.uniqueId == addItem.uniqueId
        )

        if(arrIndex < 0) {

            let createItem: CartItems = {
                item: addItem,
                qty: 1
            }

            setCart([...cart, createItem])
        } else {
            newArr[arrIndex].qty++
            setCart(newArr)
        }

        
        console.log(cart)
    }

    function addMore(item: ItemProps) {
        // todo
    }

    function removeItem(item: ItemProps) {
        
    }

return (
        <>  
            <div className="shop--body">
            <h1 className="shop--title">Produtos</h1>
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

                <CartIcon items={cart}/>
                <Cart items={cart}/>
            </div>
        </>
    )
}