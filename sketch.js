
//VARIÁVEIS

var xMenu = 220
var xtextMenu = 290
var yMenu1 = 150
var ytextMenu1 = yMenu1 + 50
var yMenu2 = 200
var ytextMenu2 = yMenu2 + 50
var yMenu3 = 250
var largMenu = 150
var alturaMenu = 30
var cantoMenu = 50
var tela = 1


//IMAGENS

let img1;
let img2;
let img3;


//FUNDO

function setup() {
  createCanvas(400, 400);
  img1 = loadImage('Menu_teste.jpg');
  img2 = loadImage('Manual_teste.jpg');
  img3 = loadImage('Créditos_teste.jpg');
}

// QUADROS DE OPÇÕES

function botaoMenu(texto, x, y, telaEscolhida){
   if(mouseX > x && mouseX < x + largMenu && mouseY > y && mouseY < y + alturaMenu){
     fill(200, 200, 400);
     if(mouseIsPressed){
       tela = telaEscolhida;
     }
   }
   else{
     fill(255);
   }
   rect(x, y, largMenu, alturaMenu, cantoMenu);
   fill(10);
   text(texto, xtextMenu, y+20);
}

// CONFIGURAÇÕES DOS QUADROS DE OPCÕES

function draw() {

// MENU  
    if (tela == 1){
      background(200);
      image(img1, 0, 0);
      textAlign(CENTER);
      textSize(20);

      botaoMenu("Iniciar", xMenu, yMenu1, 2);
      botaoMenu("Manual", xMenu, yMenu2, 3);
      botaoMenu("Créditos", xMenu, yMenu3, 4);
    }
  
// JOGO INICIADO
  
  if (tela == 2){
     background(0)
     fill(255);
     text("Jogo iniciado...", 200, 200);
     if(keyCode == ESCAPE){
       tela = 1;
       keyCode = 0;
     }
  }
  
// MANUAL
 
  if (tela == 3){
     background(0)
     image(img2, 0, 0);
     if(keyCode == ESCAPE){
       tela = 1;
       keyCode = 0;
     }
  }
  
// CRÉDITOS
  
  if (tela == 4){
     background(0)
     image(img3, 0, 0);
     if(keyCode == ESCAPE){
       tela = 1;
       keyCode = 0;
     }
  }
}