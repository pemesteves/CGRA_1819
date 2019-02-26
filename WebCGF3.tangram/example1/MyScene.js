/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.diamond = new MyDiamond(this);
        this.triangle = new MyTriangle(this);
        this.parallelogram = new MyParallelogram(this);
        this.triangleSmall = new MyTriangleSmall(this);
        this.triangleBig = new MyTriangleBig(this);

        //Objects connected to MyInterface
        this.displayAxis = true;
        this.displayDiamond = true;
        this.displayTriangle = false;
        this.displayParallelogram = false;
        this.displaySmallTriangle = false;
        this.displayBigTriangle = false;
        this.scaleFactor = 1;
    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();
        
        // Draw axis
        if (this.displayAxis)
            this.axis.display();

        this.setDefaultAppearance();

        var sca = [this.scaleFactor, 0.0, 0.0, 0.0,
                    0.0, this.scaleFactor, 0.0, 0.0,
                    0.0, 0.0, this.scaleFactor, 0.0,
                    0.0, 0.0, 0.0, 1.0];
        this.multMatrix(sca);


        // ---- BEGIN Primitive drawing section
        
        /*if(this.displayDiamond){
            this.diamond.display();
        }

        if(this.displayTriangle){
            this.triangle.display();
        }
        
        if(this.displayParallelogram){
            this.parallelogram.display();
        }
        
        if(this.displaySmallTriangle){
            this.triangleSmall.display();
        }

        if(this.displayBigTriangle){
        this.triangleBig.display();
        }*/
        
        //Create translation matrix for the diamond
        const m = [
                1, 0, 0, 0,
                0, 1, 0, 0, 
                0, 0, 1, 0, 
                0, 1.5, 0, 1 
        ]

        //Draw Diamond
        this.pushMatrix();
        this.multMatrix(m);
        this.diamond.display();
        this.popMatrix();

        //Draw first big triangle
        this.pushMatrix();
        this.translate(0, 0.5, 0);
        this.pushMatrix();
        this.rotate(Math.PI, 0, 0, 1);
        this.triangleBig.display();
        this.popMatrix();
        this.popMatrix();

        //Draw second big triangle
        this.pushMatrix();
        this.translate(-2, 0.5, 0);
        this.triangleBig.display();
        this.popMatrix();

        //Draw first small triangle
        this.pushMatrix();
        this.translate(1, 0.5, 0);
        this.triangleSmall.display();
        this.popMatrix();
        
        //Draw second small triangle
        this.pushMatrix();
        this.translate(0, -2.5, 0);
        this.triangleSmall.display();
        this.popMatrix();

        //Draw triangle
        this.pushMatrix();
        this.translate(2, 0.5 - Math.sqrt(2), 0);
        this.pushMatrix();
        this.rotate(-135*Math.PI/180, 0, 0, 1);
        this.triangle.display();
        this.popMatrix();
        this.popMatrix();

        //Draw Parallelogram
        this.pushMatrix();
        this.translate(2-Math.sqrt(8)/2, 0.5 - Math.sqrt(2), 0);
        this.pushMatrix();
        this.scale(1, -1, 1);
        this.parallelogram.display();
        this.popMatrix();
        this.popMatrix();


        // ---- END Primitive drawing section
    }
}