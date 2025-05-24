import {ArrowDown} from "lucide-react";
import {Canvas, useFrame} from "@react-three/fiber";
import {CalendarObj} from "../components/CalendarObj";
import {OrbitControls} from "@react-three/drei";
export const HeroSection = () =>{
    return <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">

        <div className = "container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className ="text-4xl md:text-6xl font-bold tracking-tight">
                   <span className="opacity-0 animate-fade-in-delay-2">New </span> 
                   <span className = "text-primary opacity-0 animate-fade-in-delay-3">Calendar </span> 
                   <span className = "opacity-0 animate-fade-in-delay-4">App</span> 
                </h1>

                <p className = "text-lg md:text-xl text-muted-foreground max-2-2xl opacity-0 animate-fade-in-delay-4">
                    Hello this is just a text experiment for the calendar app hehe
                </p>
                <div className = "pt-4">
                    <a href = "#projects" className = "cosmic-button opacity-0 animate-fade-in-delay-4">
                        Download
                    </a>
                </div>
            </div>

        </div>
        <figure className ="absolute inset-0 opacity-0 animate-fade-in-delay-4" style={{width:"100vw", height:"100vh"}}>
            <Canvas onCreated={({ gl }) => {
                    // Allow right-click context menu
                    gl.domElement.oncontextmenu = (e) => {
                    e.stopPropagation(); // Prevent OrbitControls from capturing
                    };
                }}>
                <CalendarObj />
                <OrbitControls enableRotate={false} enableZoom={false} enablePan={false} target={[-4.5,0,-3]} />
                {/*<MovePlanet />*/}
            </Canvas>

        </figure>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center">
            <span className = "text-sm text-muted-foreground mb-2"> Scroll </span>
            <ArrowDown className="h-5 w-5 text-primary" />
        </div>
    </section>
}

function MovePlanet(){
    return useFrame((state, delta) => {
        easing.damp3(state.camera.position, [state.mouse.x / 10, 1 + state.mouse.y/10, 1], 0.5, delta);
    });
}