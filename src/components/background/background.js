import backgroundAudio from './background-1.mp3';
import { useRef } from "react";
import "./background.css";

function Background() {
    const audioRef = useRef(null);

    const playAudio = () => {
        if (!audioRef.current.playing) {
            audioRef.current.play();
        }
    };

    return (
        <div className="game-background" onClick={() => playAudio()}>
            <div className="background-layer"></div>
            <div className="background-layer"></div>
            <audio id="audio" ref={audioRef} loop> 
                <source src={backgroundAudio} type="audio/mpeg" />
            </audio>
        </div>
    )
}

export default Background;
