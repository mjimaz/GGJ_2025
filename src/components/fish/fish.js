import fish1 from './fish-1.png';
import { useEffect, useState, useRef } from "react";
import "./fish.css";

function Fish() {
    const [startPosition, setStartPosition] = useState({ top: getRandomTop(), right: 0 });
    const divRef = useRef(null);

    function getRandomTop(elementHeight = 48) {
        const maxTop = window.innerHeight - elementHeight;
        return Math.floor(Math.random() * maxTop);
    }

    useEffect(() => {
        const randomTop = Math.floor(Math.random() * (window.innerHeight - 50));
        const startX = -50;
        const endX = window.innerWidth + 50;
        const duration = 9000;

        setStartPosition({ top: randomTop, right: startX });

        let startTime = null;

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;

            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const currentX = startX + (endX - startX) * progress;

            if (divRef.current) {
                divRef.current.style.right = `${currentX}px`;
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
            className="fish"
            style={{
                top: `${startPosition.top}px`,
                right: `${startPosition.left}px`,
                background: `url("${fish1}") repeat-x`,
            }}></div>
    )
}

export default Fish;