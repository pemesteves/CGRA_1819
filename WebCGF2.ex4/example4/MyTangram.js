/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
		this.diamond = new MyDiamond(scene);
        this.triangle = new MyTriangle(scene);
        this.parallelogram = new MyParallelogram(scene);
        this.triangleSmall = new MyTriangleSmall(scene);
        this.triangleSmall2 = new MyTriangleSmall2(scene);
        this.triangleBig = new MyTriangleBig(scene);
        this.triangleBig2 = new MyTriangleBig2(scene);

        this.initMaterials();
	}
	initBuffers() {
		this.vertices = [];

		//Counter-clockwise reference of vertices
		this.indices = [];
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
	

	initMaterials(){
        this.tangram_material = new CGFappearance(this.scene);
        this.tangram_material.setAmbient(0, 0, 0, 1.0);
        this.tangram_material.setDiffuse(0.8, 0.8, 0.8, 1.0);
        this.tangram_material.setSpecular(0.8, 0.8, 0.8, 1.0);
        this.tangram_material.setShininess(10.0);
        //this.tangram_material.loadTexture('images/tangram-lines.png');
        //this.tangram_material.loadTexture('images/tangram.png');
        this.tangram_material.loadTexture('images/tangram-pattern.jpg');
        this.tangram_material.setTextureWrap('REPEAT', 'REPEAT');
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
        this.tangram_material.apply();
        this.diamond.display();
        this.scene.popMatrix();

        //Draw first big triangle
        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0);
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI, 0, 0, 1);
        this.tangram_material.apply();
        this.triangleBig.display();
        this.scene.popMatrix();
        this.scene.popMatrix();

        //Draw second big triangle
        this.scene.pushMatrix();
        this.scene.translate(-2, 0.5, 0);
        this.tangram_material.apply();
        this.triangleBig2.display();
        this.scene.popMatrix();

        //Draw first small triangle
        this.scene.pushMatrix();
        this.scene.translate(1, 0.5, 0);
        this.tangram_material.apply();
        this.triangleSmall.display();
        this.scene.popMatrix();
        
        //Draw second small triangle
        this.scene.pushMatrix();
        this.scene.translate(0, -2.5, 0);
        this.tangram_material.apply();
        this.triangleSmall2.display();
        this.scene.popMatrix();

        //Draw triangle
        this.scene.pushMatrix();
        this.scene.translate(2, 0.5 - Math.sqrt(2), 0);
        this.scene.pushMatrix();
        this.scene.rotate(-135*Math.PI/180, 0, 0, 1);
        this.tangram_material.apply();
        this.triangle.display();
        this.scene.popMatrix();
        this.scene.popMatrix();

        //Draw Parallelogram
        this.scene.pushMatrix();
        this.scene.translate(2-Math.sqrt(8)/2, 0.5 - Math.sqrt(2), 0);
        this.scene.pushMatrix();
        this.scene.scale(1, -1, 1);
        this.tangram_material.apply();
        this.parallelogram.display();
        this.scene.popMatrix();
        this.scene.popMatrix();

	}

	updateBuffers(){}

	enableNormalViz(){
		this.diamond.enableNormalViz();
		this.triangleBig.enableNormalViz();
		this.triangleSmall.enableNormalViz();
		this.triangle.enableNormalViz();
		this.parallelogram.enableNormalViz();
	}

	disableNormalViz(){
		this.diamond.disableNormalViz();
		this.triangleBig.disableNormalViz();
		this.triangleSmall.disableNormalViz();
		this.triangle.disableNormalViz();
		this.parallelogram.disableNormalViz();
	}
}

