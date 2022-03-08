class Baraco {

constructor(x,y,width,height, posicaodobarco){



this.width=width 
this.height=height
this.posicaodobarco=posicaodobarco
this.body=Bodies.rectangle (x,y,this.width,this.height)
this.Barco000=loadImage("./assets/boat.png")
World.add (world,this.body)
}
show(){
push()

translate(this.body.position.x,this.body.position.y)
rotate(this.body.angle)

imageMode(CENTER)
image(this.Barco000,this.posicaodobarco,this.width,this.height);

pop()
}
}
