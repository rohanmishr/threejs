import * as THREE from 'https://unpkg.com/three/build/three.module.js';
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );

camera.position.z = 5;
camera.position.y = 1;

//define util methods
function position(m, x, y, z){
    m.position.x = x;
    m.position.y = y;
    m.position.z = z;
}

function Box(w, h, d, material){
    const geometry = new THREE.BoxGeometry(w, h, d);
    const mesh = new THREE.Mesh( geometry, material );
    return mesh;
}

function Sphere(r, material){
    const geometry = new THREE.SphereGeometry(r, 32, 32);
    const mesh = new THREE.Mesh( geometry, material );
    return mesh;
}

//lock ctrls
const controls = new PointerLockControls( camera, document.body );

controls.addEventListener( 'lock', function () {
	menu.style.display = 'none';
} );

controls.addEventListener( 'unlock', function () {
	//menu.style.display = 'block';
} );

document.addEventListener("click", () => {
    controls.lock();
});

//generate map

//load map textures
const wood = new THREE.TextureLoader().load( 'textures/wood.jpg' );
wood.wrapS = THREE.RepeatWrapping;
wood.wrapT = THREE.RepeatWrapping;
wood.repeat.set( 10, 10 );
const woodMaterial = new THREE.MeshLambertMaterial( { map: wood } );

const concrete = new THREE.TextureLoader().load( 'textures/concrete.jpg' );
concrete.wrapS = THREE.RepeatWrapping;
concrete.wrapT = THREE.RepeatWrapping;
concrete.repeat.set( 10, 10 );
const concreteMaterial = new THREE.MeshLambertMaterial( { map: concrete } );

var map = [];

//floor
const floorMesh = Box(10, 1, 10, woodMaterial);
position(floorMesh, 0, -1, 0);
map.push(floorMesh);

//walls
const wallMesh = Box(1, 5, 10, concreteMaterial);
position(wallMesh, 5.5, 2, 0);
wallMesh.castShadow = true;
map.push(wallMesh);

const wall2Mesh = new Box(1, 5, 10, concreteMaterial);
position(wall2Mesh, -5.5, 2, 0);
wall2Mesh.castShadow = true;
map.push(wall2Mesh);

const wall3Mesh = new Box(10, 5, 1, concreteMaterial);
position(wall3Mesh, 0, 2, -5.5)
map.push(wall3Mesh);

const wall4Mesh = new Box(10, 5, 1, concreteMaterial);
position(wall4Mesh, 0, 2, 5.5)
map.push(wall4Mesh);

//ceiling
const ceiling = new THREE.BoxGeometry(10, 1, 10);
const ceilingMesh = new THREE.Mesh( ceiling, woodMaterial );
ceilingMesh.position.y = 5;
ceilingMesh.position.x = 0;
ceilingMesh.position.z = 0;
map.push(ceilingMesh);

//worktable
const worktableMesh = new Box(2, 1, 2, woodMaterial);
position(worktableMesh, 4.5, 0, 0);
map.push(worktableMesh);

//farming unit
const farmingUnitMesh = new Box(1, 1, 1, woodMaterial);
position(farmingUnitMesh, -4.5, 0, 2.5);
map.push(farmingUnitMesh);

//industrial unit
const industrialUnitMesh = new Box(1, 1, 1, woodMaterial);
position(industrialUnitMesh, -4.5, 0, -2.5);
map.push(industrialUnitMesh);

//render map elements
for(var i = 0; i < map.length; i++){
    scene.add(map[i]);
}

//generate map lights

//light parts
function LightPart(w, h, d, col){
    const geometry = new THREE.CylinderGeometry(w, h, d);
    const mesh = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { color: col }) );
    return mesh;
}

function Light(part, intensity){
    const light = new THREE.PointLight( part.color, intensity, 300 );
    light.position.set( part.position.x, part.position.y - 0.25, part.position.z );
    light.castShadow = true;
    return light;
}

const tubeLightMesh = LightPart(0.5, 0.5, 0.25, 0xffffff); position(tubeLightMesh, 4, 4.25, 4); scene.add( tubeLightMesh );
const tubePointLight = Light(tubeLightMesh, 1); scene.add( tubePointLight );

const tubeLightMesh2 = LightPart(0.5, 0.5, 0.25, 0xffffff); position(tubeLightMesh2, -4, 4.25, 4); scene.add( tubeLightMesh2 );
const tubePointLight2 = Light(tubeLightMesh2, 1); scene.add( tubePointLight2 );

const tubeLightMesh3 = LightPart(0.5, 0.5, 0.25, 0xffffff); position(tubeLightMesh3, 4, 4.25, -4); scene.add( tubeLightMesh3 );
const tubePointLight3 = Light(tubeLightMesh3, 1); scene.add( tubePointLight3 );

const tubeLightMesh4 = LightPart(0.5, 0.5, 0.25, 0xffffff); position(tubeLightMesh4, -4, 4.25, -4); scene.add( tubeLightMesh4 );
const tubePointLight4 = Light(tubeLightMesh4, 1);scene.add( tubePointLight4 );

const ambientLight = new THREE.AmbientLight( 0x404040 ); // soft white light
ambientLight.shadow = true;
//scene.add( ambientLight );

//define
var player = {speed: 0.05};

//movement
var wpress, apress, spress, dpress, rpress, lpress;
const direction = new THREE.Vector3();

document.addEventListener("keydown" , (event) => {
    Log("EVENTFIRE??keydown");
    if(event.code == "KeyA"){
        apress = true;
    }else if(event.code == "KeyD"){
        dpress = true;
    }else if(event.code == "KeyW"){
        wpress = true;
    }else if(event.code == "KeyS"){
        spress = true;
    }else if(event.code == "ArrowRight"){
        rpress = true;
    }else if(event.code == "ArrowLeft"){
        lpress = true;
    }else if(event.code == "KeySpace"){
    
    }
});

document.addEventListener("keyup" , (event) => {
    if(event.code == "KeyA"){
        apress = false;
    }else if(event.code == "KeyD"){
        dpress = false;
    }else if(event.code == "KeyW"){
        wpress = false;
    }else if(event.code == "KeyS"){
        spress = false;
    }else if(event.code == "ArrowRight"){
        rpress = false;
    }else if(event.code == "ArrowLeft"){
        lpress = false;
    }
});

//document.addEventListener("mousemove" , (event) => {
    //camera.rotation.y = event.clientX / 500;
    //camera.rotation.x = event.clientY / 500;
//});

//collision
function collision(){
    for(var i = 0; i < map.length; i++){
        if(map[i] !== floorMesh){
            if(camera.position.x > map[i].position.x - 0.5 && camera.position.x < map[i].position.x + 0.5 && camera.position.z > map[i].position.z - 0.5 && camera.position.z < map[i].position.z + 0.5){
                if(camera.position.y > map[i].position.y - 0.5 && camera.position.y < map[i].position.y + 0.5){
                    Log("EVENTFIRE??collision");
                    return true;
                }
            }
        }
    }
}

//vicinity
var nearWorktable = false;
var nearFarmingUnit = false;
var nearIndustrialUnit = false;
function checkForVicinity(){
    if(camera.position.x > 3 && camera.position.x < 6 && camera.position.z > -1 && camera.position.z < 1){
        nearWorktable = true;
    }else{
        nearWorktable = false;
    }

    if(camera.position.x > -5.5 && camera.position.x < -3.5 && camera.position.z > 1.5 && camera.position.z < 3.5){
        nearFarmingUnit = true;
    }else{
        nearFarmingUnit = false;
    }

    if(camera.position.x > -5.5 && camera.position.x < -3.5 && camera.position.z > -3.5 && camera.position.z < -1.5){
        nearIndustrialUnit = true;
    }else{
        nearIndustrialUnit = false;
    }
}
//debug
function Log(t){
    document.getElementById("debuglog").innerHTML = "";
    document.getElementById("debuglog").innerHTML += t;
}
//main loop
function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
    if(wpress){
        const worldDir = camera.getWorldDirection(direction);
        const twoWorldDir = new THREE.Vector3(worldDir.x, 0, worldDir.z);
        camera.position.addScaledVector(twoWorldDir, 0.1);
    }else if(spress){
        const worldDir = camera.getWorldDirection(direction);
        const twoWorldDir = new THREE.Vector3(worldDir.x * -1, 0, worldDir.z * -1);
        camera.position.addScaledVector(twoWorldDir, 0.1);
    }else if(apress){
        const worldDir = camera.getWorldDirection(direction);
        const twoWorldDir = new THREE.Vector3(worldDir.z, 0, worldDir.x * -1);
        camera.position.addScaledVector(twoWorldDir, 0.1);
    }else if(dpress){
        const worldDir = camera.getWorldDirection(direction);
        const twoWorldDir = new THREE.Vector3(worldDir.z * -1, 0, worldDir.x);
        camera.position.addScaledVector(twoWorldDir, 0.1);
    }else if(rpress){
        camera.rotation.y -= 0.025;
    }else if(lpress){
        camera.rotation.y += 0.025;
    }

    if(nearWorktable || nearFarmingUnit || nearIndustrialUnit){
        controls.unlock();
    }else{
        controls.lock();
    }

    collision();
    checkForVicinity();
    if(nearWorktable){
        document.getElementById("dashboard").style.display = "block";
    }else{
        document.getElementById("dashboard").style.display = "none";
    }

    if(nearFarmingUnit){
        document.getElementById("farming").style.display = "block";
    }else{
        document.getElementById("farming").style.display = "none";
    }

    if(nearIndustrialUnit){
        document.getElementById("machine").style.display = "block";
    }else{
        document.getElementById("machine").style.display = "none";
    }

    document.getElementById("debug2").innerHTML = "CamVector3" + camera.getWorldDirection(direction).x + " " + camera.getWorldDirection(direction).y + " " + camera.getWorldDirection(direction).z;
    document.getElementById("debug3").innerHTML = "vicinity_worktable" + nearWorktable;
}
console.clear();
animate();