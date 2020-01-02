import React, { Component } from "react";
import * as THREE from "three";
import {OrbitControls } from "three-js";

const style = {
    height: 500
};

class Dprojects extends Component {
    componentDidMount() {
        this.sceneSetup();
        this.addCustomSceneObjects();
        this.startAnimationLoop();
        window.addEventListener('resize', this.handleWindowResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize);
        window.cancelAnimationFrame(this.requestID);
        //this.controls.dispose();
    }

        sceneSetup = () => {

            const width = this.innerWidth;
            const height = this.innerHeight;

            this.scene = new THREE.Scene();
            var camera = new THREE.PerspectiveCamera(
                75, //field of view
                width/height, //aspect ratio
                0.1, //near plane
                1000 //far plane
                );
            this.camera.position = 9;
            this.controls = new OrbitControls(this.camera, this.mount);
            this.renderer = new THREE.WebGLRenderer();
            this.renderer.setSize(width, height);
            this.mount.appendChild(this.renderer.domElement);

        };

        addCustomSceneObjects = () => {

            const geometry = new THREE.BoxGeometry(1, 1, 1);
            const material = new THREE.MeshBasicMaterial({
                color: 0x00ff00,
                emissive: 0x072534,
                side: THREE.DoubleSide,
                flatShading: true
            });

            this.cube = new THREE.Mesh(geometry, material);
            this.scene.add(this.cube);

            const lights = [];
            lights[0] = new THREE.PointLight(0xffffff, 1, 0);
            lights[1] = new THREE.PointLight(0xffffff, 1, 0);
            lights[2] = new THREE.PointLight(0xffffff, 1, 0);

            lights[0].position.set(0, 200, 0);
            lights[1].position.set(100, 200, 100);
            lights[2].position.set(-100, -200, -100);

            this.scene.add(lights[0]);
            this.scene.add(lights[1]);
            this.scene.add(lights[2]);

        };

        startAnimationLoop = () => {

            this.cube.rotation.x += 0.01;
            this.cube.rotation.y += 0.01;

            this.renderer.render(this.scene, this.camera);

            this.requestID = window.requestAnimationFrame(this.startAnimationLoop);
        };

        handleWindowResize = () => {

            const width = this.innerWidth;
            const height = this.innerHeight;

            this.renderer.setSize(width, height);
            this.camera.aspect = width/height;

            this.camera.updateProjectionMatrix();
        };
    
        render() {
            return <div style={style} ref = {ref => (this.el = ref)} />;
        }
    }

    class Container extends React.Component {
        state = {isMounted: true};

        render() {
            const {isMounted = true} = this.state;
            return (
                <>
                <button onClick={() => this.setState(state => ({isMounted: !state.isMounted}))}>
                    {isMounted ? "Unmount" : "Mount"}
                </button>
                {isMounted && <Dprojects />}
                {isMounted && <div>Scroll to zoom, drag to rotate</div>}
            </>
            )
        }
    }

export default Dprojects;