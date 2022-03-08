class bolo01{

constructor(x,y){

var propriedadesdabola = {
    isStatic:true
}
this.raio = 20
this.x=x;
this.y=y;
this.body=Bodies.circle(this.x,this.y,this.raio, propriedadesdabola);
this.image01=loadImage ("./assets/bola.png");
World.add(world,this.body);


}

show(){
push();

imageMode(CENTER);
image(this.image01,this.body.position.x,this.body.position.y,this.raio,this.raio);



pop();
}
shoot(){
    var novoangulo=canhao2.angle-28
    //Tranformando angulo de graus para radiano
    novoangulo=novoangulo*(3.14/180)
    //Criando velocidade vetorial 
    var velocidadevetorial=p5.Vector.fromAngle(novoangulo);
//Colando a bola em movimentios
Matter.Body.setStatic(this.body,false)
//Adicionando velocidade
Matter.Body.setVelocity(this.body,{
    //Tranformando angulo de radianos para graus
    x:velocidadevetorial.x*(180/3.14),y:velocidadevetorial.y*(180/3.14)
})
}
}

