import "./scorecard.css";

function Scorecard({ fishes = 0, score = 0}) {
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
