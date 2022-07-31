export type ItemProps = {
    uniqueId: string;
    name: string;
    price: number;
    imageUrl: string;
    priceTags: DiscountProps[];
    onClick: Function;
}

export type DiscountProps = {
    value: number
}