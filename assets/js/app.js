let canvas;

function setup(){
     canvas=document.getElementById('canvas')

}

function drawDiamond(){
    
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(150, 70);
    ctx.lineTo(250, 70);
    ctx.lineTo(300, 100);
    ctx.lineTo(200, 300);
    ctx.fill();
      }

}
function draw(){
    setup()
    drawDiamond()
}
draw()

