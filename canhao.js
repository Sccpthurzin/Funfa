class canhao {

constructor(x,y,width,heigth,angle){

this.x=x
this.y=y 
this.width=width
this.heigth=heigth
this.angle=angle

this.basecanhao=loadImage("./assets/cannonBase.png")
this.canhao01=loadImage("./assets/canon.png")


}

show(){

  console.log(this.angle);

if (keyIsDown(RIGHT_ARROW)&& this.angle < 60){
  this.angle=this.angle+1

}
if (keyIsDown(LEFT_ARROW)&& this.angle > -77){
  this.angle=this.angle-1
  
}

push();
translate(this.x,this.y)
rotate(this.angle)
imageMode(CENTER);
image(this.canhao01,0,0,this.width,this.heigth);

pop();
image(this.basecanhao,70,20,200,200);

}
   
}
