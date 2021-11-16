import { GLTFLoader } from './GLTFLoader'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const loader = new GLTFLoader();

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
var obj;
loader.load( './hg.glb', function ( gltf ) {
	obj = gltf.scene
	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );

var light = new THREE.HemisphereLight("0xFFFFFF, 0x000000, 2");
scene.add(light);
camera.position.set(0, 0, 10);
function animate(){
	requestAnimationFrame(animate);
	renderer.render(scene,camera);
}

animate();
