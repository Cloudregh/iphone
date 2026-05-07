import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ModelView from "./ModelView";
import { useEffect, useRef, useState } from "react";
import { yellowImg } from "../utils";
import * as THREE from 'three';
import { models, sizes } from "../constants";
import { animateWithGsapTimeline } from "../utils/animations";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";

gsap.registerPlugin(ScrollTrigger);

const Model = () => {

    const [size, setSize] = useState('small');
    const [activeSize, setActiveSize] = useState('small');
    const canvasWrapperRef = useRef(null);
    const [model, setModel] = useState({
        title:"iPhone 15 pro in Natural Titanium",
        color:['#8F8A81', '#FFE7B9', '#6F6C64'],
        img: yellowImg,
    })

    // camera control for iphone 15 pro
    const cameraControlSmall = useRef();
    const cameraControlLarge = useRef();

    //model
    const small = useRef(new THREE.Group());
    const large = useRef(new THREE.Group());

    //rotation
    const[smallRotation, setSmallRotation] = useState(0);
    const[largeRotation, setLargeRotation] = useState(0);
    
    const tl = useRef(gsap.timeline());

    useEffect(() => {
        if (size === activeSize) return;

        if (small.current) small.current.rotation.y = 0;
        if (large.current) large.current.rotation.y = 0;

        tl.current.clear();
        tl.current.seek(0);

        if (size === 'large') {
            animateWithGsapTimeline(tl.current, small, 0, '#view1', '#view2', {
                transform: 'translateX(-100%)',
                duration: 2
            })
        } else {
            animateWithGsapTimeline(tl.current, large, 0, '#view2', '#view1', {
                transform: 'translateX(0)',
                duration: 2
            })
        }

        tl.current.eventCallback('onComplete', () => {
            setActiveSize(size);
        });
        tl.current.play(0);
    }, [size, activeSize]);

    useGSAP(() => {
        gsap.to('#heading', {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.inOut',
            scrollTrigger: {
                trigger: '#heading',
            }
        })
    }, []);
  return (
    <section className="common-padding">
        <div className="screen-max-width">
            <h1 id='heading' className="section-heading">
                Take a closer look.
            </h1>
            <div className="flex flex-col items-center mt-5">
                <div
                className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative"
                ref={canvasWrapperRef}
                >
                    <ModelView
                    index={1}
                    groupRef={small}
                    gsapType="view1"
                    controlRef={cameraControlSmall}
                    setRotationState={setSmallRotation}
                    item={model}
                    size={activeSize}
                    />
                    <ModelView
                    index={2}
                    groupRef={large}
                    gsapType="view2"
                    controlRef={cameraControlLarge}
                    setRotationState={setLargeRotation}
                    item={model}
                    size={activeSize}
                    />

                    <Canvas
                    className="w-full h-full"
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        overflow: 'hidden'
                    }}
                    eventSource={canvasWrapperRef}
                    >
                        <View.Port />
                    </Canvas>
                </div>
                <div className="mx-auto w-full">
                    <p className="text-sm font-light text-center mb-5">{model.title}</p>
                    <div className="flex-center">
                        <ul className="color-container">
                            {models.map((item,i) =>(
                                <li key={i} className="w-6 h-6 rounded-full mx-2 cursor-pointer" 
                                style={{backgroundColor : item.color[0]}}
                                onClick={() => setModel(item)}
                                />
                            ))}
                        </ul>
                        <button className="size-btn-container">
                            {sizes.map(({label, value}) => (
                                <span key={label} className="size-btn" style={{
                                    backgroundColor : size === value ? 'white' : 'transparent',
                                    color : size === value ? 'black' : 'white'}}
                                    onClick={() => setSize (value)}>
                                    {label}
                                </span>
                            ))}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Model
