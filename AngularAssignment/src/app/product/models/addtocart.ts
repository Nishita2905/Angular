export interface IAddtocart
{
    id:number,
    name:string,
    description:string,
    price:number,
    quantity:number,
    imgurl:string
}
export class Addtocart implements IAddtocart  {
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
