export class Dbproduct {
    name!:string;
    price:number;
    stock:number;
    id?:string;

    constructor(id,name,price,stock){
        this.id=id;
        this.name=name;
        this.price=price;
        this.stock=stock;
    }
}