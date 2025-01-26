import fish1 from './fish-1.png';
import fish2 from './fish-2.png';
import fish3 from './fish-3.png';
import fish4 from './fish-4.png';
import { useEffect, useState, useRef } from "react";
import "./fish.css";

function generateRandom(max) {
    return Math.floor(Math.random() * max);
}

function fishImage() {
    const number = generateRandom(4);
    switch (number) {
        case 1:
            return {className: 'fish-1', url: fish1};
        case 2:
            return {className: 'fish-2', url: fish2};
        case 3:
            return {className: 'fish-3', url: fish3};
        case 4:
        default:
            return {className: 'fish-4', url: fish4};
    }
}

function Fish() {
    const [image] = useState(fishImage());
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
            className={`fish ${image.className}`}
            style={{
                top: `${startPosition.top}px`,
                right: `${startPosition.left}px`,
                background: `url("${image.url}") repeat-x`,
            }}></div>
    )
}

export default Fish;