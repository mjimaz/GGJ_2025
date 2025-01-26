import missile from './missile.png';
import { useEffect, useState, useRef } from "react";
import "./missile.css";

function generateRandom(max) {
    return Math.floor(Math.random() * max);
}

function Missile() {
    const [image] = useState({url: missile});
    const [startPosition, setStartPosition] = useState({ top: getRandomTop(), right: 0 });
    const divRef = useRef(null);

    function getRandomTop(elementHeight = 48) {
        return generateRandom(window.innerHeight - elementHeight);
    }

    useEffect(() => {
        const randomTop = Math.floor(Math.random() * (window.innerHeight - 50));
        const startX = -50;
        const endX = window.innerWidth + 50;
        const duration = 9000;

        setStartPosition({ top: randomTop, right: startX });

        let startTime = null;

        const animateFish1 = (currentTime) => {
            if (!startTime) startTime = currentTime;

            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const currentX = startX + (endX - startX) * progress;

            if (divRef.current) {
                divRef.current.style.right = `${currentX}px`;
            }

            if (progress < 1) {
                requestAnimationFrame(animateFish1);
            }
        };

        requestAnimationFrame(animateFish1);
    }, []); 

    return (
        <div
            ref={divRef}
            className={`missile`}
            style={{
                top: `${startPosition.top}px`,
                right: `${startPosition.left}px`,
                background: `url("${image.url}") repeat-x`,
            }}></div>
    )
}

export default Missile;
