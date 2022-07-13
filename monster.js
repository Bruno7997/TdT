class Monster{
    constructor(x,y){
        this.X=0
        this.Y=0
this.x=x
this.y=y
this.width=100
this.heiht=100
    this.sprite = createSprite(this.z,this.y,this.width,this.heiht)
    this.sprite.shapeColor = "black"
    m.push(this.sprite)
}
speed(px,py){
if(this.sprite.x>px){this.X=-2}else if(this.sprite.x<px){this.X=2}
if(this.sprite.y>py){this.Y=2}else if(this.sprite.y<py){this.Y=-2}
this.sprite.setVelocity(X,Y)
}
}