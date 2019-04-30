/**
* MyLeaf
* @constructor
*/
class MyLeaf extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
        this.triangle = new MyTriangle(this.scene);
        
        this.initMaterials();
    }
    initBuffers() {
        this.vertices = [];
        this.indices = [];

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
    
    initMaterials(){
        this.leaf_material = new CGFappearance(this.scene);
        this.leaf_material.setAmbient(1, 1, 1, 1);
        this.leaf_material.setDiffuse(0.9, 0.9, 0.9, 1);
        this.leaf_material.setSpecular(0.1, 0.1, 0.1, 1);
        this.leaf_material.setShininess(10.0);
        this.leaf_material.loadTexture('images/leaf.jpg');
    }

    display(){
        this.leaf_material.apply();
        this.triangle.display();
    }
}


