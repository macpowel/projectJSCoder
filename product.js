class Miniature{
    constructor(name, detailLevel, size){
        this.name = name;
        this.detailLevel = detailLevel
        this.size = size
        this.price = 100
        
    }
    priceCalculator(){
        switch(this.detailLevel){
            case "high":
                this.price = this.price * 2 * this.size;

            case "low":
                this.price = this.price * this.size;
                
        }

    }
  
}

class Setting{
    constructor(name, detailLevel, squares){
        this.name = name;
        this.detailLevel = detailLevel;
        this.squares = squares;
        this.price = 300;
        this.foldable = false;
    }
    priceCalculator(){
        switch(this.detailLevel){
            case "high":
                this.price = this.price * 2 * this.squares;

            case "low":
                this.price = this.price * this.squares;
                this.foldable = true;
                
        }

    }
}

class Order{
    constructor(name, tel, email, order){
        this.name = name;
        this.tel = tel;
        this.email = email;
        this.order = order;
        this.price = "price to be seen";
    }
}