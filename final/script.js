import * as THREE from "https://esm.sh/three";
import { OrbitControls } from "https://esm.sh/three/addons/controls/OrbitControls.js";


// Defining key variables
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({
  alpha: true,
  antialias: false
});

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  1000
);
const controls = new OrbitControls(camera, renderer.domElement);

// //controls.update() must be called after any manual changes to the camera's transform
camera.position.set(50, 30, 200);
// controls.update();
function animate() {

	requestAnimationFrame( animate );

	// required if controls.enableDamping or controls.autoRotate are set to true
	controls.update();

	renderer.render( scene, camera );

}
// animate();


renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


window.addEventListener("resize", onWindowResize, false);
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

let x = 50
function Cubic(){
const geometry = new THREE.BoxGeometry( x, 50, 50);
const material = new THREE.MeshBasicMaterial( { color: "purple"} );

const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

renderer.render(scene, camera);
  

  
requestAnimationFrame(Cubic);
}

requestAnimationFrame(Cubic);