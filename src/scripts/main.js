import { Playground } from './index';

var canvas = document.getElementById("renderCanvas");

var startRenderLoop = function (engine, canvas) {
  engine.runRenderLoop(function () {
      if (sceneToRender && sceneToRender.activeCamera) {
          sceneToRender.render();
      }
  });
}

var engine = null;
var scene = null;
var sceneToRender = null;
var createDefaultEngine = function () {
  return new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true, disableWebGL2Support: false });
};

var createScene = function () {
  return Playground.CreateScene(engine, engine.getRenderingCanvas());
}

window.initFunction = async function () {
  var asyncEngineCreation = async function () {
    try {
      return createDefaultEngine();
    } catch (e) {
      console.log("the available createEngine function failed. Creating the default engine instead");
      return createDefaultEngine();
    }
  }

  engine = await asyncEngineCreation();

  if (!engine) throw 'engine should not be null.';

  startRenderLoop(engine, canvas);
  scene = createScene();
};
initFunction().then(() => {
  sceneToRender = scene;
});

// Resize
window.addEventListener("resize", function () {
  engine.resize();
});