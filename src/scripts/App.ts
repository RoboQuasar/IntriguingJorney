import { Playground } from './Playground';

export class App {
    engine: BABYLON.Engine;
    scene: BABYLON.Scene;

    constructor(readonly canvas: HTMLCanvasElement) {
        this.engine = new BABYLON.Engine(canvas, true);  // Generate the BABYLON 3D engine

        window.addEventListener('resize', () => {
            this.engine.resize();
        });
        this.scene = Playground.CreateScene(this.engine, this.engine.getRenderingCanvas()); // createScene(this.engine, this.canvas)
    }

    debug(debugOn: boolean = true) {
        if (debugOn) {
            this.scene.debugLayer.show({ overlay: true });
        } else {
            this.scene.debugLayer.hide();
        }
    }

    run() {
        this.debug(true);
        this.engine.runRenderLoop(() => {
            this.scene.render();
        });
    }

}