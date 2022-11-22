export class Playground {
  public static CreateScene(engine: BABYLON.Engine, canvas: HTMLCanvasElement): BABYLON.Scene {
      // This creates a basic Babylon Scene object (non-mesh)
      var scene = new BABYLON.Scene(engine);

      var camera = new BABYLON.ArcRotateCamera("camera", BABYLON.Tools.ToRadians(90), BABYLON.Tools.ToRadians(65), 10, BABYLON.Vector3.Zero(), scene);

      // This attaches the camera to the canvas
      camera.attachControl(canvas, true);

      // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
      var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);

      // Default intensity is 1. Let's dim the light a small amount
      light.intensity = 0.7;

      // // Our built-in 'sphere' shape. Params: name, options, scene
      // var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 2, segments: 32}, scene);

      // // Move the sphere upward 1/2 its height
      // sphere.position.y = 1;

      // Our built-in 'ground' shape. Params: name, options, scene
      var ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 6, height: 6}, scene);
      ground.position.y = -1;
      let groundMaterial = new BABYLON.StandardMaterial("Ground Material", scene);

      let groundTexture = new BABYLON.Texture("https://assets.babylonjs.com/textures/", scene);
      groundMaterial.diffuseTexture = groundTexture;
      
      ground.material = groundMaterial;

      const yetiMesh = BABYLON.SceneLoader.ImportMesh(
        "",
        "https://assets.babylonjs.com/meshes/Yeti/MayaExport/glTF/",
        "Yeti.gltf",
        scene,
        function(newMeshes) {
          newMeshes[0].scaling = new BABYLON.Vector3(0.1, 0.1, 0.1);
          newMeshes[0].position.y = -1;
        },
      );

      return scene;
  }
}