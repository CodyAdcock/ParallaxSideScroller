const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;
// const FOREST_HEIGHT = 793;
// const FOREST_HEIGHT = 928;
let gameSpeed = 5;

//Forest Backgrounds
const backgroundLayerForest0 = new Image();
backgroundLayerForest0.src = 'resources/Forest/PNG/Background layers/Layer_0000_9.png'
//1
const backgroundLayerForest1 = new Image();
backgroundLayerForest1.src = 'resources/Forest/PNG/Background layers/Layer_0001_8.png'
//2
const backgroundLayerForest2 = new Image();
backgroundLayerForest2.src = 'resources/Forest/PNG/Background layers/Layer_0002_7.png'
//3
const backgroundLayerForest3 = new Image();
backgroundLayerForest3.src = 'resources/Forest/PNG/Background layers/Layer_0003_6.png'
//4
const backgroundLayerForest4 = new Image();
backgroundLayerForest4.src = 'resources/Forest/PNG/Background layers/Layer_0004_Lights.png'
//5
const backgroundLayerForest5 = new Image();
backgroundLayerForest5.src = 'resources/Forest/PNG/Background layers/Layer_0005_5.png'
//6
const backgroundLayerForest6 = new Image();
backgroundLayerForest6.src = 'resources/Forest/PNG/Background layers/Layer_0006_4.png'
//7
const backgroundLayerForest7 = new Image();
backgroundLayerForest7.src = 'resources/Forest/PNG/Background layers/Layer_0007_Lights.png'
//8
const backgroundLayerForest8 = new Image();
backgroundLayerForest8.src = 'resources/Forest/PNG/Background layers/Layer_0008_3.png'
//9
const backgroundLayerForest9 = new Image();
backgroundLayerForest9.src = 'resources/Forest/PNG/Background layers/Layer_0009_2.png'
//10
const backgroundLayerForest10 = new Image();
backgroundLayerForest10.src = 'resources/Forest/PNG/Background layers/Layer_0010_1.png'

window.addEventListener('load', function(){

    const slider = document.getElementById('slider');
    slider.value = gameSpeed;
    const showGameSpeed = document.getElementById('showGameSpeed');
    showGameSpeed.innerHTML = gameSpeed;
    
    slider.addEventListener('change', function(e){
        gameSpeed = e.target.value;
        showGameSpeed.innerHTML = gameSpeed;
    });
    
    class Layer {
    
        constructor(image, speedModifier){
            this.x = 0;
            this.y = -93;
            this.width = 928;
            this.height = 793;
            this.image = image;
            this.speedModifier = speedModifier;
            this.speed = gameSpeed * this.speedModifier;
        }
        update(){
            this.speed = gameSpeed * this.speedModifier;
            if (this.x <= -this.width){
                this.x = 0;
            }
            this.x = this.x - this.speed;
        }
        draw(){
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
            ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
        }
    
    }
    
    const layer0 = new Layer(backgroundLayerForest0, 0.8);
    const layer1 = new Layer(backgroundLayerForest1, 0.75);
    const layer2 = new Layer(backgroundLayerForest2, 0.7);
    const layer3 = new Layer(backgroundLayerForest3, 0.65);
    const layer4 = new Layer(backgroundLayerForest4, 0.6);
    const layer5 = new Layer(backgroundLayerForest5, 0.55);
    const layer6 = new Layer(backgroundLayerForest6, 0.5);
    const layer7 = new Layer(backgroundLayerForest7, 0.45);
    const layer8 = new Layer(backgroundLayerForest8, 0.4);
    const layer9 = new Layer(backgroundLayerForest9, 0.35);
    const layer10 = new Layer(backgroundLayerForest10, 0);
    
    const gameObjects = [layer10, layer9, layer8, layer7, layer6, layer5, layer4, layer3, layer2, layer1, layer0];
    
    function animate(){
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        gameObjects.forEach(object => {
            object.update();
            object.draw();
        })
        requestAnimationFrame(animate);
    
    };
    
    animate();

});

