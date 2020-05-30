class Roof extends BaseClass{
    constructor(){
        super();
    }
    display(){
        super.display();
        pos.x = mouseX;
        pos.y = mouseY;
    }
}