class Area{
    static getArea(array){
        if(array == null){
            return -1;
        }
        if(Array.isArray(array)){
            if(isNaN(array[0]) && parseInt(array[0])>=0 && isNaN(array[1]) && parseInt(array[1])>=0){
                return array[0]*array[1]
            }
        }
        return -1;
    }
}