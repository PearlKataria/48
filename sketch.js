 

  function preload()
  {
    backgroundImg=loadImage("background.gif")
    title1Img=loadImage("Title1.png")
    startImg=loadImage("startButton.png")
    hindisongsImg=loadImage("hindisongs.png")
    engsongsImg=loadImage("englishsongs.png")
    back1Img=loadImage("back1.png")
    instruction1Img=loadImage("instruction1.png")
    elliegouldingnameImg=loadImage("elliegouldingname.png")
    edsheerannameImg=loadImage("edsheeranname.png")
    annemarienameImg=loadImage("annemariename.png")
    katyperrynameImg=loadImage("katyperryname.png")

  }

  function setup() {
    createCanvas(800, 600);
    title1=createSprite(400,250)
    title1.addImage(title1Img)
    title1.scale=0.55 

    start=createSprite(400,380)
    start.addImage(startImg)
    start.scale=0.3
  }
  function draw(){
  rectMode(CENTER);
  background("black")
  image(backgroundImg,0,0,width,height)
  
  if(mousePressedOver(start)) {
   title1.destroy();
   start.destroy();
   hollywood=createSprite(250,150)
   hollywood.addImage(engsongsImg)
   hollywood.scale=0.28
   bollywood=createSprite(550,450)
   bollywood.addImage(hindisongsImg)
   bollywood.scale=0.28

  }
  
  if(mousePressedOver(hollywood)){
    hollywood.destroy();
  }
  
    drawSprites();
  
  }
