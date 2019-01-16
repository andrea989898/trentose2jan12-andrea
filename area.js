class Area{

    static isNumeric(n){
        if ((typeof n) == "number") {
            return true
        }else{
            return false
        }
    }

    static isInt(n){
        if (this.isNumeric(n) && (n%1 ==0)) {
            return true
        }else{
            return false
        }
    }

    static getArea(sides){
        var ris 
        if(this.isInt(sides[0]) && sides[0]>0 && this.isInt(sides[1]) && sides[1]>0){
            ris = sides[0]*sides[1]
        }else{
            ris = -1
        }
        return ris
    }
};

module.exports = Area;