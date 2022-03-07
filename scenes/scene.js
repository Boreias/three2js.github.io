const coracao = new THREE.Shape();
const estrela = new THREE.Shape();

coracao.moveTo(0.3, 1.5);
coracao.quadraticCurveTo(0.3, 2.2, 0.9, 2.2);
coracao.quadraticCurveTo(1.3, 2.2, 1.4, 1.7);
coracao.quadraticCurveTo(1.5, 2.2, 1.9, 2.2);
coracao.quadraticCurveTo(2.5, 2.2, 2.5, 1.5);
coracao.quadraticCurveTo(2.5, 1, 1.4, 0.3);
coracao.quadraticCurveTo(0.3, 1, 0.3, 1.5);

estrela.moveTo(-5, 5);
estrela.lineTo(-4, 3);
estrela.lineTo(-2, 3);
estrela.lineTo(-3, 1);
estrela.lineTo(-2, -1);
estrela.lineTo(-4, -1);
estrela.lineTo(-5, -3);
estrela.lineTo(-6, -1);
estrela.lineTo(-8, -1);
estrela.lineTo(-7, 1);
estrela.lineTo(-8, 3);
estrela.lineTo(-6, 3);
estrela.lineTo(-5, 5);

/*
const geometry = new THREE.ShapeBufferGeometry(
    coracao
);
const geometry2 = new THREE.ShapeBufferGeometry(
    coracao
);
*/

const geometry = new THREE.ExtrudeBufferGeometry(
    coracao, {
        depth: 0.01,
        bevelEnabled: true,
        bevelSize: 0.1,
        bevelThickness: 0.1
    }
);
const geometry2 = new THREE.ExtrudeBufferGeometry(
    estrela, {
        depth: 0.01,
        bevelEnabled: true,
        bevelSize: 0.1,
        bevelThickness: 0.1
    }
);

const material = new THREE.MeshLambertMaterial(
    {color: 0xeb3452,
    side: THREE.DoubleSide}
);

const material2 = new THREE.MeshLambertMaterial(
    {color: 0xFFFF87,
    side: THREE.DoubleSide}
);

const draw = new THREE.Mesh(geometry,material);
const draw2 = new THREE.Mesh(geometry2,material2);

scene.add(draw);
scene.add(draw2);

renderer.setAnimationLoop(() => {

    x3.tick();

    x3.fps(() => {
        renderer.render(scene, camera);
    });
})
