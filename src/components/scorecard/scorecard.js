import { useEffect, useState } from 'react';
import "./scorecard.css";

function Scorecard() {
    const [score, setScore] = useState(0)
    const [fishes] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setScore(score + 1);
        }, 1000);

        return () => clearInterval(interval);
    });

    return (
        <div className="scorecard">
            <div className="score pane">
                <span>Score: {score}</span>
            </div>
            <div className="food pane">
                <span>Food: {fishes}</span>
            </div>
        </div>
    )
}

export default Scorecard;
