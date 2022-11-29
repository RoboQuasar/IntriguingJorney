import { Playground } from './Playground';
import { HousesPlayground } from './houses';

export class App {
    engine: BABYLON.Engine;
    scene: BABYLON.Scene;

    constructor(readonly canvas: HTMLCanvasElement) {
        this.engine = new BABYLON.Engine(canvas, true);  // Generate the BABYLON 3D engine

        window.addEventListener('resize', () => {
            this.engine.resize();
        });
        if (window.location.href.includes('houses')) {
            this.scene = HousesPlayground.CreateScene(this.engine, this.engine.getRenderingCanvas());
        } else {
            this.scene = Playground.CreateScene(this.engine, this.engine.getRenderingCanvas());
        }
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