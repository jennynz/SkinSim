if ( ! Detector.webgl ) Detector.addGetWebGLMessage();
var stats;
var camera, controls, scene, renderer;
var params = {};
var test = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];



	scene = new THREE.Scene();
	scene.fog = new THREE.Fog( 0x72645b, 2, 15 );

	params.scalpel = 1;
	var gui = new DAT.GUI({height : 1 * 32 - 1});
	gui.add(params, "scalpel").min(1).max(24).step(1);

	renderer = new THREE.WebGLRenderer();
	renderer.setClearColor( scene.fog.color );
	renderer.setPixelRatio( window.devicePixelRatio );
	// renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setSize(600, 500)
	//renderer.shadowMap.enabled = true;

	var container = document.getElementById( 'canvas' );
	container.appendChild( renderer.domElement );
	camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.01, 1000 );
	camera.position.y = 0.15;

	controls = new THREE.OrbitControls( camera, renderer.domElement );
	controls.addEventListener( 'change', render ); // add this only if there is no animation loop (requestAnimationFrame)
	controls.enableDamping = true;
	controls.dampingFactor = 0.25;
	controls.enableZoom = true;

	scene = new THREE.Scene();
	scene.fog = new THREE.Fog( 0x72645b, 2, 30 );
	// Ground
	var plane = new THREE.Mesh(
		new THREE.PlaneBufferGeometry( 500, 500 ),
		new THREE.MeshPhongMaterial( { color: 0x999999, specular: 0x101010 } )
	);
	plane.rotation.x = -Math.PI/2;
	plane.position.y = -3.1;
	scene.add( plane );
	plane.receiveShadow = true;
	// world
	var loader = new THREE.STLLoader();
	

	// texture
	var manager = new THREE.LoadingManager();
	manager.onProgress = function ( item, loaded, total ) {
		console.log( item, loaded, total );
	};
	var texture = new THREE.Texture();
	var onProgress = function ( xhr ) {
		if ( xhr.lengthComputable ) {
			var percentComplete = xhr.loaded / xhr.total * 100;
			console.log( Math.round(percentComplete, 2) + '% downloaded' );
		}
	};
	var onError = function ( xhr ) {
	};
	var loader = new THREE.ImageLoader( manager );
	loader.load( 'textures/skin.jpg', function ( image ) {
		texture.image = image;
		texture.needsUpdate = true;
	} );
	// model
	var loader = new THREE.OBJLoader( manager );
	loader.load( 'models/obj/skin/Test1.obj', function ( object ) {
		object.traverse( function ( child ) {
			if ( child instanceof THREE.Mesh ) {
				child.material.map = texture;
			}
		} );
		object.position.set = (0, 0, 0);
		object.rotation.set( 0, 0, 0 );
		object.scale.set = (1000, 1000, 1000);
		scene.add( object );
	}, onProgress, onError );

	// Lights
	light = new THREE.DirectionalLight( 0x443333 );
	light.position.set( 0, 5, 0 );
	scene.add( light );
	light = new THREE.DirectionalLight( 0x002288 );
	light.position.set( -1, -1, -1 );
	scene.add( light );
	light = new THREE.AmbientLight( 0x222222 );
	scene.add( light );
	//
	addShadowedLight( 0, 5, 1, 0xffffff, 0.2 );
	addShadowedLight( 5, 5, 5, 0xffaa00, 0.1 );
	// stats
	stats = new Stats();
	container.appendChild( stats.dom );
	//
	window.addEventListener( 'resize', onWindowResize, false );

animate();

function assignUVs(geometry) {

		geometry.computeBoundingBox();

		var max     = geometry.boundingBox.max;
		var min     = geometry.boundingBox.min;

		var offset  = new THREE.Vector2(0 - min.x, 0 - min.y);
		var range   = new THREE.Vector2(max.x - min.x, max.y - min.y);

		geometry.faceVertexUvs[0] = [];
		var faces = geometry.faces;

		for (i = 0; i < geometry.faces.length ; i++) {

				var v1 = geometry.vertices[faces[i].a];
				var v2 = geometry.vertices[faces[i].b];
				var v3 = geometry.vertices[faces[i].c];

				geometry.faceVertexUvs[0].push([
				new THREE.Vector2( ( v1.x + offset.x ) / range.x , ( v1.y + offset.y ) / range.y ),
				new THREE.Vector2( ( v2.x + offset.x ) / range.x , ( v2.y + offset.y ) / range.y ),
				new THREE.Vector2( ( v3.x + offset.x ) / range.x , ( v3.y + offset.y ) / range.y )
				]);

		}

		geometry.uvsNeedUpdate = true;

}

function addShadowedLight( x, y, z, color, intensity ) {
	var directionalLight = new THREE.DirectionalLight( color, intensity );
	directionalLight.position.set( x, y, z );
	scene.add( directionalLight );
	directionalLight.castShadow = true;
	var d = 1;
	directionalLight.shadow.camera.left = -d;
	directionalLight.shadow.camera.right = d;
	directionalLight.shadow.camera.top = d;
	directionalLight.shadow.camera.bottom = -d;
	directionalLight.shadow.camera.near = 0;
	directionalLight.shadow.camera.far = 50;
	directionalLight.shadow.mapSize.width = 1024;
	directionalLight.shadow.mapSize.height = 1024;
	directionalLight.shadow.bias = -0.005;
}
function obtain() {
}
function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
}
function animate() {
	requestAnimationFrame( animate );
	controls.update(); // required if controls.enableDamping = true, or if controls.autoRotate = true
	render();				
	stats.update();
}
function render() {
	//scenes = [scene1, scene2, scene3, scene4, scene5, scene6, scene7, scene8, scene9, scene10, scene11, scene12, scene13, scene14, scnene15, scene16, scene17, scene18, scene19, scene20, scene21, scene22, scene23, scene24];
	test[params.scalpel] = true;
	renderer.render( scene, camera );
}