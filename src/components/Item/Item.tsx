import { ItemProps } from "../../type/ItemType";
import { Button } from "../Button/Button";
import './Item.css'


export function Item(props: ItemProps) {

    function handleClick() {
        props.onClick(props)
    }

    function calcDiscountValue() {
        let discounts = props.priceTags

        let value = props.price
        discounts.forEach(element  => {
            value = value + element.value
        })

        let calc = value / 100

        return (value / 100).toFixed(2);
    }

    return (
        <div className="items--holder">
            <div className="item--pic--holder">
                <img
                    src={props.imageUrl} 
                    alt="Product Image" 
                    className="item--pic"
                />
            </div>
            <div className="item--information">
                <div className="item--name">
                    {props.name}
                </div>
                <div className="item--value">
                   R$ {(props.price / 100).toFixed(2)}
                </div>
                <div className="item--discount--value">
                    R$ { calcDiscountValue() }
                </div>
            </div>
            <Button onClick={handleClick} label="Comprar"/>
        </div>
)
}