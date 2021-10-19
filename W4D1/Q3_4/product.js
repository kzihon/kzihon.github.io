module.exports = class Product{
    constructor(name,price,description,id){
        this.name=name;
        this.price=price;
        this.description=description;
        this.id=id;
    }

    getName(){
        return this.name;
    }
    getPrice(){
        return this.price;
    }

    getdescr(){
        return this.description;
    }

    getid(){
        return this.id;
    }

}