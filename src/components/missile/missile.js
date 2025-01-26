import missile from './missile.png';
import { useEffect, useState, useRef } from "react";
import "./missile.css";

function generateRandom(max) {
    return Math.floor(Math.random() * max);
}

function Missile({ gameOver = false }) {
    const [image] = useState({url: missile});
    const [startPosition, setStartPosition] = useState({ top: getRandomTop(), right: 0 });
    const divRef = useRef(null);

    function getRandomTop(elementHeight = 48) {
        return generateRandom(window.innerHeight - elementHeight);
    }

    useEffect(() => {
        const startTop = 0;
        const startRight = generateRandom(window.innerWidth * 0.5);
        const endRight = window.innerWidth;
        const endBottom = window.innerHeight + 50;
        const duration = 9000;
    
        setStartPosition({ top: startTop, right: startRight });
    
        let startTime = null;
    
        const animateMissile = (currentTime) => {
            if (!startTime) startTime = currentTime;
    
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const currentX = startRight + (endRight - startRight) * progress;
            const currentY = startTop + (endBottom - startTop) * progress;
    
            if (divRef.current) {
                divRef.current.style.right = `${currentX}px`;
                divRef.current.style.top = `${currentY}px`;
            }
    
            if (progress < 1) {
                requestAnimationFrame(animateMissile);
            }
        };
    
        requestAnimationFrame(animateMissile);
    }, []);

    return gameOver ? null : (
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
