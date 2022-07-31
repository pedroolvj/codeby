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

    const [cartOpened, setCartOpened] = useState<boolean>(false)

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

    function handleOpenCart() {
        setCartOpened(!cartOpened)
    }

    window.addEventListener("resize", e => {
        if(window.innerWidth > 768) {
            setCartOpened(false)
        }
    })

    function AddToCart(addItem: ItemProps) {
        let newArr: CartItems[] = [...cart]

        const arrIndex = newArr.findIndex(
            (element) => element.item.uniqueId == addItem.uniqueId
        )

        if(arrIndex < 0) {

            let createItem: CartItems = {
                item: addItem,
                qty: 1,
            }

            setCart([...cart, createItem])
        } else {
            newArr[arrIndex].qty++
            setCart(newArr)
        }
    }

    function handleItems(add: boolean, item: ItemProps) {
        let newArr: CartItems[] = [...cart]

        const arrIndex = newArr.findIndex(
            (element) => element.item.uniqueId == item.uniqueId
        )
        
        if(add == true) {
            newArr[arrIndex].qty++
        } else {
            if(newArr[arrIndex].qty > 1) {
                newArr[arrIndex].qty--
            } else {
                newArr.splice(arrIndex, 1)
            }
        }

        setCart(newArr)
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

                <CartIcon openCart={handleOpenCart} items={cart}/>
                <Cart
                 cartOpened={cartOpened} 
                 items={cart} 
                 handleItems={handleItems}
                 handleCartOpen={handleOpenCart}
                 />
            </div>
        </>
    )
}