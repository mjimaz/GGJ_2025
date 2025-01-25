import fish1 from './fish-1.png';
import { useEffect, useState, useRef } from "react";
import "./fish.css";

function Fish({ startX }) {
    const [startPosition, setStartPosition] = useState({ top: getRandomTop(), right: 0 });
    const divRef = useRef(null);

    function getRandomTop(elementHeight = 48) {
        const maxTop = window.innerHeight - elementHeight;
        return Math.floor(Math.random() * maxTop); // Random value between 0 and maxTop
    }

    useEffect(() => {
        // Generate random vertical position (within the visible screen height)
        const randomTop = Math.floor(Math.random() * (window.innerHeight - 50)); // Subtract 50 for div height
        const startX = -50; // Start just outside the left edge of the screen
        const endX = window.innerWidth + 50; // End just outside the right edge of the screen
        const duration = 9000; // Animation duration in milliseconds

        setStartPosition({ top: randomTop, right: startX });

        let startTime = null;

        const animate = (currentTime) => {
        if (!startTime) startTime = currentTime; // Set the start time
        const elapsedTime = currentTime - startTime;

        // Calculate progress as a percentage (0 to 1)
        const progress = Math.min(elapsedTime / duration, 1);

        // Calculate the current horizontal position
        const currentX = startX + (endX - startX) * progress;

        // Update div position
        if (divRef.current) {
            divRef.current.style.right = `${currentX}px`;
        }

        // Continue animation if not yet complete
        if (progress < 1) {
            requestAnimationFrame(animate);
        }
        };

        // Start the animation
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