import * as THREE from "https://esm.sh/three";

// Defining key variables
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({
  alpha: true,
  antialias: true
});

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  1000
);

// camera.position.set(70, 40, 100);
// camera.lookAt(new THREE.Vector3(0, 0, 0));
// const controls = new THREE.OrbitControls(camera, renderer.domElement);
// controls.enableZoom = true;
// controls.enableKeys = true;
// controls.keyPanSpeed = 100
// controls.keys = {
//   LEFT: 37, //left arrow
//   UP: 38, // up arrow
//   RIGHT: 39, // right arrow
//   BOTTOM: 40 // down arrow
// }


renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


window.addEventListener("resize", onWindowResize, false);
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function Cubic(){
const geometry = new THREE.BoxGeometry( 1, 3, 1 );
const material = new THREE.MeshBasicMaterial( { color: "yellow"} );

const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;
camera.position.x = 2
camera.position.y = 0

renderer.render(scene, camera);

}

Cubic();