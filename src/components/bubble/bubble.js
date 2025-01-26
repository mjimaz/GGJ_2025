import { useEffect, useState, useRef } from "react";
import "./bubble.css";
import bubble_img from './bubble.png';

function Bubble(props) {
    const divRef = useRef(null);
    const [startPosition, setStartPosition] = useState({ top: props.startY + 64, left: props.startX + 256 });

    useEffect(() => {
        const randomTop = props.startY + 64;
        const startX = props.startX + 256;
        const endX = window.innerWidth;
        const duration = 1000;

        setStartPosition({ top: randomTop, left: startX });

        let startTime = null;

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;

            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const currentX = startX + (endX - startX) * progress;

            if (divRef.current) {
                divRef.current.style.left = `${currentX}px`;
            }

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, []); 



    return (
        <div
          ref={divRef}
          id="bubble"
          className="bubble"
          style = {{ 
            top: `${startPosition.top}px`,
            left: `${startPosition.left}px`,
            background: `url("${bubble_img}") no-repeat`,}}
        ></div>
    )
}

export default Bubble;
