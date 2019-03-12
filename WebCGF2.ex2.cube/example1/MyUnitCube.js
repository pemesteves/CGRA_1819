/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			0.5, -0.5, -0.5, 	//0
			0.5, 0.5, -0.5,		//1
			-0.5, 0.5, -0.5, 	//2
			-0.5, -0.5, -0.5, 	//3
			0.5, -0.5, 0.5, 	//4
			0.5, 0.5, 0.5, 		//5
			-0.5, 0.5, 0.5, 	//6
			-0.5, -0.5, 0.5		//7
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			//Right face
			0, 1, 5, 
			0, 5, 4,
			
			//Left face
			2, 7, 6,
			2, 3, 7,

			//Front face
			4, 5, 6,
			4, 6, 7,
			
			//Back face
			0, 3, 1,
			2, 1, 3, 	

			//Up face
			1, 2, 6,
			1, 6, 5, 	

			//Down face 
			0, 4, 3,
			3, 4, 7 		
		];
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

