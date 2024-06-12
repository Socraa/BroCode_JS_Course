
class Rectangle{
    constructor(height){
        this.height = height;
    }
    

    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        }else{
            console.log("Height should be a positive Number!!");
        }
    }


    get height(){
        return this._height;
    }


}

const rectange1 = new Rectangle(23);

console.log(rectange1.height);
