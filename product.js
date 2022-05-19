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
