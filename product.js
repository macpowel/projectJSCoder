class miniature{
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

class setting{
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

class request{
    constructor(name, tel, email, request){
        this.name = name;
        this.tel = tel;
        this.email = email;
        this.request = request;
        this.price = "price to be seen";
    }
}