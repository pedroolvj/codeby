import './Button.css'

type ButtonProps = {
    label: string;
    onClick: Function
}

export function Button(props: ButtonProps) {
    function handleClick() {
        props.onClick()
    }
    return(
        <button className='button' onClick={handleClick}>{props.label}</button>
    )
}