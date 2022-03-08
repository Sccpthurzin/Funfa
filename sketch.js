const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;

var fundoimagem
var torreimagem

var torre

var canhao2

var bola1

var matriz=[]

var Barco1
var matrix=[]

function preload() {
 
  fundoimagem = loadImage ("./assets/background.gif");
  torreimagem = loadImage ("./assets/tower.png");
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES)
 options={
 isStatic:true
 }
 
 ground= Bodies.rectangle(0,height-1, width*2,1,options);
 World.add(world,ground);

 var propriedadesdatorre ={
   isStatic:true
   
 }
 torre = Bodies.rectangle (160,350,160,310,propriedadesdatorre);
 World.add(world,torre);

 canhao2 = new canhao(180,119,130,100,30)

 

 

}

function draw() {
  background(fundoimagem);
  Engine.update(engine);
 
 rect(ground.position.x, ground.position.y,width*2,1);

  push();
  
   imageMode(CENTER);
   
   image(torreimagem, torre.position.x, torre.position.y,160,310);

  pop();

  canhao2.show();
  
  mostrarbaracos();
  
  
  
  //Lenght e a quantidade total de um elemento na matriz
  for(var indice=0;indice<matriz.length;indice=indice+1){
    mostrarbolas(matriz[indice],indice)
  }
}
function keyReleased(){
  if (keyCode==DOWN_ARROW){
    matriz[matriz.length-1].shoot();
  }
}
function keyPressed(){
  if (keyCode==DOWN_ARROW){
    bola1 = new bolo01(canhao2.x,canhao2.y);
    //Adicionando bola dentro da matriz
    matriz.push(bola1);
  }
     
}
function mostrarbolas(matriz,indice){
  if(matriz){
    matriz.show();
  }
}
function mostrarbaracos(){
  if(matrix.length>0){
    if(matrix[matrix.length-1].body.position.x<width-300 || matrix[matrix.length-1]==undefined){
      var posicoes=[-40,-60,-70,-20]
      var posicoesaleatorias=random(posicoes) 
      Barco1 = new Baraco(width,height-100,170,170, posicoesaleatorias) 
      matrix.push(Barco1);
    }
    //Adicionando velocidade aos barcos
    for (var indice4=0;indice4<matrix.length;indice4=indice4+1 ){
         if (matrix[indice4]){
           //Velocidade para o barco
          Matter.Body.setVelocity(Barco1.body,{
          x:-0.5,y:0
          })
          matrix[indice4].show();
         }
    }
  }
  else{
    Barco1 = new Baraco(width,height-100,170,170,-60) 
    matrix.push(Barco1);
  }
}
