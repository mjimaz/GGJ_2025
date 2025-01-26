import "./banner.css";

function Banner({ gameOver = false, onStart, onGameOver }) {
    const message = !gameOver
        ? `Dive into an underwater adventure in Bubble Submarine! Navigate your submarine through vibrant ocean depths, hunting mischievous fish using strategically launched bubbles. Trap, collect, and outsmart elusive sea creatures while avoiding hazards like rocks and currents. Upgrade your sub, master bubble mechanics, and become the ultimate undersea hunter in this thrilling game!`
        : `Game Over! You fought bravely, but the journey ends here. Every defeat is a lesson—rise again, stronger and wiser. Ready for another challenge? Press restart and prove your skills. The adventure isn't over until you say it is!`;
    return (
        <div className="banner">
            <h1 className="title">GGJ_2025 Subhunt</h1>
            <p className="description">{message}</p>
            <button onClick={!gameOver ? onStart : onGameOver}>{!gameOver ? `Let's Go` : `Start Over`}</button>
        </div>
    )
}

export default Banner;
