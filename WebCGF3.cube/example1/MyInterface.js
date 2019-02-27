/**
* MyInterface
* @constructor
*/
class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();
      
        var obj = this;

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayAxis').name('Display Axis');

        //Checkbox for diamond
        this.gui.add(this.scene, 'displayDiamond').name('Display Diamond');

        //Checkbox for triangle
        this.gui.add(this.scene, 'displayTriangle').name('Display Triangle');
            
        //Checkbox for small triangle
        this.gui.add(this.scene, 'displaySmallTriangle').name('Small Triangle');
        
        //Checkbox for big triangle
        this.gui.add(this.scene, 'displayBigTriangle').name('Big Triangle');

        //Checkbox for parallelogram
        this.gui.add(this.scene, 'displayParallelogram').name('Parallelogram');
          
        //Slider element in GUI
        this.gui.add(this.scene, 'scaleFactor', 0.1, 5).name('Scale Factor');

        return true;
    }
}