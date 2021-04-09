export interface IProduct
{
    id:number,
    name:string,
    description:string,
    price:number,
    quantity:number,
    imgurl:string
}
export class Product implements IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    imgurl:string;

    constructor(name?:string,description?: string,price?: number,quantity?: number,imgurl?:string)
    {
        this.name=name;
        this.description=description;
        this.price=price;
        this.quantity=quantity;
        this.imgurl=imgurl;
    }
}
