import { Button } from "../Button/Button";
import './Item.css'

type ItemProps = {
    name: string;
    click: Function;
}


export function Item(props: ItemProps) {
    function handleClick() {
        props.click(props.name)
    }

    return (
        <div className="items--holder">
            <img
                src="https://via.placeholder.com/600.png/09f/fff" 
                alt="" 
                className="item--pic"
            />
            <div className="item--information">
                <div className="item--name">
                    Bombom
                </div>
                <div className="item--value">
                    R$ 4,10
                </div>
            </div>
            <Button />
        </div>
)
}