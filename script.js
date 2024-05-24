import * as THREE from "https://esm.sh/three";
import { OrbitControls } from "https://esm.sh/three/addons/controls/OrbitControls.js";

console.clear();

let song = new Audio('Last Train Home.mp3');

song.play();


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

let left = false;
let right = false;
let up = false;
let down = false;
let space = false;

window.addEventListener("keyup", function (event) {
  switch (event.code) {
    case "ArrowRight":
      right = false;
      break;
    case "ArrowLeft":
      left = false;
      break;
    case "ArrowUp":
      up = false;
      break;
    case "ArrowDown":
      down = false;
      break;
    case "Space":
      space = false;
      break;
  }
});

window.addEventListener("keydown", function (event) {
  switch (event.code) {
    case "ArrowRight":
      right = true;
      break;
    case "ArrowLeft":
      left = true;
      break;
    case "ArrowUp":
      up = true;
      break;
    case "ArrowDown":
      down = true;
      break;
    case "Space":
      space = true;
      break;
  }
});

scene.background = new THREE.Color("black");
camera.position.set(0, 1, 50);

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener("resize", onWindowResize, false);
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

var cube = [];
var index;
function Cubic(randomColor, randy) {
  let syze = Math.floor(100 * Math.random()) + 1;

  index = cube.length;
  //cube
  cube[index] = new THREE.Mesh(
    new THREE.BoxGeometry(1, syze, 1),
    new THREE.MeshBasicMaterial({ color: randomColor })
  );
  var wireframe = new THREE.LineSegments(
    new THREE.EdgesGeometry(cube[index].geometry),
    new THREE.LineBasicMaterial({ color: 0x000000 })
  );

  cube[index].add(wireframe);
  cube[index].position.set(randy, 0, -Math.floor(700 * Math.random()));

  scene.add(cube[index]);

  renderer.render(scene, camera);
}

function flour() {
  const floor = new THREE.Mesh(
    new THREE.BoxGeometry(1000, 0, 2000),
    new THREE.MeshBasicMaterial({ color: "gray" })
  );

  scene.add(floor);

  renderer.render(scene, camera);
}

flour();

for (let i = 0; i < 200; i++) {
  var randomColor =
    "#" + (((1 << 15) * Math.random()) | 0).toString(16).padStart(6, "0");
  let randy = Math.floor(100 * Math.random()) - Math.floor(100 * Math.random());
  Cubic(randomColor, randy);
  // console.log(cube.position)
}

// const controls = new OrbitControls(camera, renderer.domElement);
// //controls.update() must be called after any manual changes to the camera's transform
// controls.update();

let changes = 1;

function degInRad(deg) {
  return (deg * Math.PI) / 180;
}

let kimeraX = 0;
let kimeraZ = 90;
let speederZ = 1;
let speederX = 1;
var isCollideU 
var isCollideD 

function animate() {
  //   if(camera.position.x == cube.position.x) {
  //   console.log("Hi");
  // }

  var posX = Math.floor(camera.position.x);
  var posY = Math.floor(camera.position.y);
  var posZ = Math.floor(camera.position.z);

  //   Camera controls
  if (right == true) {
    camera.rotateOnAxis(new THREE.Vector3(0, 1, 0), degInRad(-1));
    kimeraX -= speederX;
    kimeraZ += speederZ;

    // console.log(kimeraX)
  }

  if (left == true) {
    camera.rotateOnAxis(new THREE.Vector3(0, 1, 0), degInRad(1));
    kimeraX += speederX;
    kimeraZ -= speederZ;

    // console.log(kimeraX)
  }

  const reinge = 2;
  isCollideU = false;
  isCollideD = false;

  if (up && !isCollideU) {
    for (let i = 0; i < cube.length; i++) {
      if (
        cube[i].position.x > posX - reinge &&
        cube[i].position.x < posX + reinge &&
        cube[i].position.z > posZ - reinge &&
        cube[i].position.z < posZ + reinge
      ) {
        // isCollideU = true;
        
        camera.position.z -= -1* kimeraZ / 180
        camera.position.x -= -1* kimeraZ / 180
       
      }
    }

    if (!isCollideU) {
      camera.position.z -= kimeraZ / 180;
      camera.position.x -= kimeraX / 180;
    }
    if (up) {
      console.log(isCollideU);
    }
  } else if (down && !isCollideD) {
    for (let i = 0; i < cube.length; i++) {
      if (
        cube[i].position.x > posX - reinge &&
        cube[i].position.x < posX + reinge &&
        cube[i].position.z > posZ - reinge &&
        cube[i].position.z < posZ + reinge
      ) {
        // isCollideD = true;
        camera.position.z += -1* kimeraZ / 180
        camera.position.x += -1* kimeraZ / 180
      }
    }

    if (!isCollideD && down) {
      camera.position.z += kimeraZ / 180;
      camera.position.x += kimeraX / 180;
    }
  }

  if (space == true) {
    camera.position.set(0, 1, 50);
    isCollideD = false
    isCollideU = false
  }

  // how camera works for z axis
  if (kimeraZ >= 90) {
    kimeraZ = 90;
    speederZ = -speederZ;
  }

  if (kimeraZ <= 90) {
    speederZ = +speederZ;
  }

  if (kimeraZ >= -90) {
    speederZ = +speederZ;
  }

  if (kimeraZ <= -90) {
    kimeraZ = -90;
    speederZ = -speederZ;
  }

  // how camera works for x axis
  if (kimeraX >= 90) {
    kimeraX = 90;
    speederX = -speederX;
  }

  if (kimeraX <= 90) {
    speederX = +speederX;
  }

  if (kimeraX >= -90) {
    speederX = +speederX;
  }

  if (kimeraX <= -90) {
    kimeraX = -90;
    speederX = -speederX;
  }

  //  if(kimeraX <= -360){
  //     kimeraX = 0
  //   }

  //   if(kimeraX >= 360){
  //     kimeraX = 0
  //   }

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();

// var raycaster = new THREE.Raycaster();

// // Define the origin and direction of the ray
// // For example, casting a ray from the position of a moving object in the direction of movement
// var originPoint = camera.position.clone();
// var directionVector = camera.getDirectionVector(); // You need to implement this method

// // Set the raycaster's origin and direction
// raycaster.set(originPoint, directionVector);

// // Check for intersections with collidable objects
// var collisionResults = raycaster.intersectObjects(collidableObjs);

// // Handle collisions
// if (collisionResults.length > 0) {
//     // Collision detected, handle it here
//     console.log("Collision detected with:", collisionResults[0].object);
//     // Example: Stop the movement of the moving object
//     camera.stopMovement();
// }

// case 'ArrowUp': // Up arrow key
//     camera.rotateOnAxis(new THREE.Vector3(1, 0, 0), degInRad(1));
//     break;
// case 'ArrowDown': // Down arrow key
//     camera.rotateOnAxis(new THREE.Vector3(1, 0, 0), degInRad(-1));
//     break;
