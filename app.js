import { GLTFLoader } from './GLTFLoader'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const loader = new GLTFLoader();

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.SetClearColor(0x132644);
document.body.appendChild( renderer.domElement );

const loader = new GLTFLoader();

loader.load( './hg.glb', function ( gltf ) {

	obj = gltf.scene;
	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );

function animate() {
	requestAnimationFrame( animate );
	obj.rotation.x = += 0.010
	renderer.render(scene,camera);
}
animate();

