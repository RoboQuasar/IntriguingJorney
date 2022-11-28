import "babylonjs-viewer";
import { App } from './App';

console.log(`index.ts starting ${App.name}`);

window.addEventListener('DOMContentLoaded', () => {
    let canvas = document.getElementById('renderCanvas') as HTMLCanvasElement;
    let app = new App(canvas);

    app.run();
});
