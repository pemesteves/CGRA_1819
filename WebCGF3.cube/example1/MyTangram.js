/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			-1, -1, 0,	//0
			1, -1, 0,	//1
			-1, 1, 0	//2
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2
		];
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}

	display(){
        //Create translation matrix for the diamond
        const m = [
                1, 0, 0, 0,
                0, 1, 0, 0, 
                0, 0, 1, 0, 
                0, 1.5, 0, 1 
        ]

        //Draw Diamond
        this.scene.pushMatrix();
        this.scene.multMatrix(m);
        this.scene.diamond.display();
        this.scene.popMatrix();

        //Draw first big triangle
        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0);
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI, 0, 0, 1);
        this.scene.triangleBig.display();
        this.scene.popMatrix();
        this.scene.popMatrix();

        //Draw second big triangle
        this.scene.pushMatrix();
        this.scene.translate(-2, 0.5, 0);
        this.scene.triangleBig.display();
        this.scene.popMatrix();

        //Draw first small triangle
        this.scene.pushMatrix();
        this.scene.translate(1, 0.5, 0);
        this.scene.triangleSmall.display();
        this.scene.popMatrix();
        
        //Draw second small triangle
        this.scene.pushMatrix();
        this.scene.translate(0, -2.5, 0);
        this.scene.triangleSmall.display();
        this.scene.popMatrix();

        //Draw triangle
        this.scene.pushMatrix();
        this.scene.translate(2, 0.5 - Math.sqrt(2), 0);
        this.scene.pushMatrix();
        this.scene.rotate(-135*Math.PI/180, 0, 0, 1);
        this.scene.triangle.display();
        this.scene.popMatrix();
        this.scene.popMatrix();

        //Draw Parallelogram
        this.scene.pushMatrix();
        this.scene.translate(2-Math.sqrt(8)/2, 0.5 - Math.sqrt(2), 0);
        this.scene.pushMatrix();
        this.scene.scale(1, -1, 1);
        this.scene.parallelogram.display();
        this.scene.popMatrix();
        this.scene.popMatrix();

	}
}

