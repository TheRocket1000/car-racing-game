class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter Your Name");
    this.playButton = createButton("Play");
    this.titleImage = createImg("assets/title.png");

    this.greeting = createElement("h1")
  }
setElementPosition(){
  this.input.position(width/2, height/2)
  this.titleImage.position(120, 100);
  this.playButton.position(width/2-19, height/2-20);
  this.greeting.position(width/2-100, height/2-50);
}
handleMousePressed(){
  this.playButton.mousePressed(()=>{
    this.input.hide();
    this.playButton.hide();
    var message = "Hello Welcome to the Car Racing Game"
    this.greeting.html(message);
    player.name = this.input.value();
  })
}

hide(){
  this.greeting.hide();
  this.playButton.hide();
  this.input.hide();
}

display() {
setElementPosition();
handleMousePressed();
}
}
