console.log(THREE);

const renderer = new THREE.WebGLRenderer();
const scene = new THREE.Scene();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(0, 0, 100);
camera.lookAt(0,0,0);


const LineMaterial = new THREE.LineBasicMaterial( {color: 0x00ffff} );
const points = [];
points.push( new THREE.Vector3 (-10,0,0) );
points.push( new THREE.Vector3 (0,10,0) );
points.push( new THREE.Vector3 (10,0,0) );
points.push( new THREE.Vector3 (-10,0,0) );

for (let i=1; i<5; i++){
    points.push( new THREE.Vector3 (Math.random()*i*10,Math.random()*i*10,Math.random()*i*10) );
    points.push( new THREE.Vector3 (Math.random()*20,Math.random()*6,Math.random()*i*i) );
}

const lineGeometry = new THREE.BufferGeometry().setFromPoints( points );
const line = new THREE.Line( lineGeometry, LineMaterial);
scene.add(line);
// renderer.render( scene, camera);


const light1 = new THREE.PointLight({color: 0x0fff00});
scene.add(light1);
light1.position.x = 50;
light1.position.y = -50;
light1.position.z = -10;

const light2 = new THREE.PointLight({color: 0x0fff00});
scene.add(light2);
light1.position.set(-50,50,10);

const colorWhite = new THREE.Color('hsl(106,100%,90%)');

const width = 20;
const height = 20;
const depth = 20;
const cubeGeometry = new THREE.BoxGeometry(width, height, depth);
const cubeMaterial = new THREE.MeshPhongMaterial({
    color: colorWhite,
    shininess: 80,
})

const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);

cube.rotation.x = 150;
cube.rotation.y = -100;
cube.rotation.z = 200;

// renderer.render( scene, camera);

const animate = () => {
    requestAnimationFrame(animate)
    cube.rotation.x +=100.5
    renderer.render(scene, camera);
}

animate()