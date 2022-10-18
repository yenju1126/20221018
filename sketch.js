function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  stroke(255) //框線顏色
  noFill() //不要填滿顏色
  rectMode(CENTER)
  

for(var j=0;j<(height/50);j++){
  for(var i=0;i<(width/50);i=i+1)//i++ ==> i=i+1
  {

    stroke("#b3001b")
    ellipse(50+(i*100),50+(j*100),100+mouseX/20)
		//ellipse(50,50,100)
    stroke("#37515f")
    rect(50+(i*100),50+(j*100),100)
    //rect(50,50,100)
		stroke("#1055FA")
		ellipse(100+(i*100),100+(j*100),30)
		//ellipse(100,100,30)
	  stroke("#EB7034") //框線顏色
    rect(100+(i*100),100+(j*100),30+mouseY/10)
		//rect(100,100,30)
	
  }
}
}