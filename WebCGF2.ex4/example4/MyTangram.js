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
        this.triangleBig = new MyTriangleBig(scene);

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
		this.red_material = new CGFappearance(this.scene);
        this.red_material.setAmbient(0, 0, 0, 1.0);
        this.red_material.setDiffuse(1, 0, 0, 1.0);
        this.red_material.setSpecular(1, 0, 0, 1.0);
        this.red_material.setShininess(10.0);

        this.blue_material = new CGFappearance(this.scene);
        this.blue_material.setAmbient(0, 0, 0, 1.0);
        this.blue_material.setDiffuse(0, 0, 1, 1.0);
        this.blue_material.setSpecular(0, 0, 1, 1.0);
        this.blue_material.setShininess(10.0);

        this.green_material = new CGFappearance(this.scene);
        this.green_material.setAmbient(0, 0, 0, 1.0);
        this.green_material.setDiffuse(0, 1, 0, 1.0);
        this.green_material.setSpecular(0, 1, 0, 1.0);
        this.green_material.setShininess(10.0);
	
		this.orange_material = new CGFappearance(this.scene);
        this.orange_material.setAmbient(0, 0, 0, 1.0);
        this.orange_material.setDiffuse(1, 0.4, 0, 1.0);
        this.orange_material.setSpecular(1, 0.4, 0, 1.0);
        this.orange_material.setShininess(10.0);

        this.yellow_material = new CGFappearance(this.scene);
        this.yellow_material.setAmbient(0, 0, 0, 1.0);
        this.yellow_material.setDiffuse(1, 1, 0, 1.0);
        this.yellow_material.setSpecular(1, 1, 0, 1.0);
        this.yellow_material.setShininess(10.0);

        this.purple_material = new CGFappearance(this.scene);
        this.purple_material.setAmbient(0, 0, 0, 1.0);
        this.purple_material.setDiffuse(0.5, 0, 1, 1.0);
        this.purple_material.setSpecular(0.5, 0, 1, 1.0);
        this.purple_material.setShininess(10.0);

        this.pink_material = new CGFappearance(this.scene);
        this.pink_material.setAmbient(0, 0, 0, 1.0);
        this.pink_material.setDiffuse(1, 0.2, 1, 1.0);
        this.pink_material.setSpecular(1, 0.2, 1, 1.0);
        this.pink_material.setShininess(10.0);
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
        //this.green_material.apply();
        this.scene.updateCustomMaterial();
        this.scene.customMaterial.apply();
        this.diamond.display();
        this.scene.popMatrix();

        //Draw first big triangle
        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0);
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI, 0, 0, 1);
		this.blue_material.apply();
        this.triangleBig.display();
        this.scene.popMatrix();
        this.scene.popMatrix();

        //Draw second big triangle
        this.scene.pushMatrix();
        this.scene.translate(-2, 0.5, 0);
        this.orange_material.apply();
        this.triangleBig.display();
        this.scene.popMatrix();

        //Draw first small triangle
        this.scene.pushMatrix();
        this.scene.translate(1, 0.5, 0);
        this.purple_material.apply();
        this.triangleSmall.display();
        this.scene.popMatrix();
        
        //Draw second small triangle
        this.scene.pushMatrix();
        this.scene.translate(0, -2.5, 0);
        this.red_material.apply();
        this.triangleSmall.display();
        this.scene.popMatrix();

        //Draw triangle
        this.scene.pushMatrix();
        this.scene.translate(2, 0.5 - Math.sqrt(2), 0);
        this.scene.pushMatrix();
        this.scene.rotate(-135*Math.PI/180, 0, 0, 1);
        this.pink_material.apply();
        this.triangle.display();
        this.scene.popMatrix();
        this.scene.popMatrix();

        //Draw Parallelogram
        this.scene.pushMatrix();
        this.scene.translate(2-Math.sqrt(8)/2, 0.5 - Math.sqrt(2), 0);
        this.scene.pushMatrix();
        this.scene.scale(1, -1, 1);
        this.yellow_material.apply();
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

