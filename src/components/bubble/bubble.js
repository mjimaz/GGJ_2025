import { useEffect, useState, useRef } from "react";
import "./bubble.css";
import bubble_img from './bubble.png';

function Bubble({ startX = 0, startY = 0, collided = false }) {
    const divRef = useRef(null);
    const [bubbleCollided, setBubbleCollided] = useState(collided);
    const [startPosition, setStartPosition] = useState({ top: startY + 64, left: startX + 256 });

    useEffect(() => {
        const randomTop = startY + 64;
        const randomLeft =  startX + 256;
        const endX = window.innerWidth;
        const duration = 1000;

        setStartPosition({ top: randomTop, left: randomLeft });

        let startTime = null;

        const animate = (currentTime) => {
            if (divRef.current.style.left > window.innerWidth) {
                setBubbleCollided(true);
                return;
            }

            if (!startTime) startTime = currentTime;

            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const currentX = randomLeft + (endX - randomLeft) * progress;
            
            if (divRef.current) {
                divRef.current.style.left = `${currentX}px`;
            }

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, []); 



    return bubbleCollided ? null : (
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
